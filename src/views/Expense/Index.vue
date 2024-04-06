<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from 'vue';
import { useExpenseStore } from '@/stores/expense';
import { useRouter } from 'vue-router';
import _ from 'lodash';

/* All Instance */
const expenseStore = useExpenseStore();
const router = useRouter();
const swal = inject('$swal');

expenseStore.swal = swal;
expenseStore.router = router;

/* All Variables */
const searchKeyWord = ref('');

/* All Methods */
/* Hooks and Computed */
onMounted(() => {
    expenseStore.getExpenses(expenseStore.pagination.current_page, expenseStore.dataLimit);
})

watch(
    searchKeyWord,
    _.debounce((current, previous) => {
        expenseStore.getExpenses(expenseStore.pagination.current_page, expenseStore.dataLimit, current);
    }, 500)
)

</script>

<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <!-- Header Part -->
                <div class="col-md-12">
                    <div class="card border-primary">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4 class="card-title text-primary fw-bold">Expense Index</h4>
                                <router-link :to="{ name: 'expense-create' }" class="btn btn-success text-white fw-bold">
                                    <i class="fas fa-plus-circle"></i> Create New</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistics Part -->
                <div class="col-md-12">
                    <div class="card border-primary">
                        <div class="card-body">
                            <!-- Search Bar & Count -->
                            <div class="row">
                                <div class="col-md-8">
                                    Total Count: <span class="text-primary fw-bold">{{ expenseStore.getTotalCount }}</span>
                                </div>
                                <div class="col-md-4">
                                    <input type="search" name="" class="form-control" placeholder="Search ..."
                                        v-model="searchKeyWord">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Table -->
                <div class="row my-4">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped text-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Staff Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Expense Category</th>
                                        <th scope="col">Ref</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(expense,index) in expenseStore.expenses" :key="expense.id">
                                        <th scope="row">{{ (expenseStore.pagination.current_page*expenseStore.dataLimit) - expenseStore.dataLimit+index+1 }}</th>
                                        <td>{{ new Date(expense.created_at).toDateString() }}</td>
                                        <td>{{ expense.staff?.name }} / {{ expense.staff?.phone }}</td>
                                        <td>{{ expense.amount }}</td>
                                        <td>{{ expense.category?.name }}</td>
                                        <td>
                                            <div class="" v-if="expense.file">
                                                <a :href="expense.file" class=""> <i class="fas fa-download"></i></a>
                                            </div>
                                        </td>
                                        <td>
                                            <router-link :to="{name: 'expense-edit', params: {id: expense.id }}" class="btn btn-info btn-sm"><i class="fas fa-edit"></i></router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end my-4">
                    <v-pagination
                        v-model="expenseStore.pagination.current_page"
                        :pages="expenseStore.pagination.last_page"
                        :range-size="1"
                        active-color ="#776acF"
                        @update:modelValue="expenseStore.getExpenses(expenseStore.pagination.current_page, expenseStore.dataLimit)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>