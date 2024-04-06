<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from 'vue';
import { useExpenseStore } from '@/stores/expense';
import { useStaffStore } from '@/stores/staff';

import { useRouter, useRoute } from 'vue-router';

/* All Instance */
const expenseStore = useExpenseStore();
const staffStore = useStaffStore();

const swal = inject("$swal");
const router = useRouter();
const route = useRoute();

expenseStore.swal = swal;
expenseStore.router = router;

staffStore.swal = swal;
staffStore.router = router;

/* All Variables and Constants */

const schema = reactive({
  expense_category_id: 'required',
  staff_id: 'required',
  amount: 'required',
});

/* All Methods */
const UpdateExpense = () => {
  expenseStore.updateExpense(expenseStore.editFormData, route.params.id);
}
const onFileChange = (e) => {
  expenseStore.editFormData.file = e.target.files[0];
};

/* Hooks and OnMounted */
onMounted(() => {
  expenseStore.getExpense(route.params.id);
  expenseStore.getAllExpenseCategory();
  staffStore.getAllStaffs();
})

</script>

<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="card-title text-primary fw-bold">Expense Update</h4>
                <router-link :to="{ name: 'expense-index' }" class="btn btn-primary text-white fw-bold">
                  <i class="fas fa-arrow-left"></i> Expense List</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <vee-form :validation-schema="schema" @submit="UpdateExpense" class="mt-4 pt-2"
                enctype="multipart/form-data">

                <div class="row">

                  <!-- category Name -->
                  <div class="col-md-6 mb-4">
                    <label for="category-name" class="form-label">Expense Category Name</label>
                    <vee-field as="select" class="form-select" name="expense_category_id"
                      v-model="expenseStore.editFormData.expense_category_id">
                      <option value="">Select Expense Category Name</option>
                      <option :value="category.id" v-for="(category, index) in expenseStore.expenses_category"
                        :key="category.id">{{ index + 1 }}. {{ category.name }}</option>
                    </vee-field>
                    <ErrorMessage class="text-danger" name="category_id" />
                  </div>
                  <!-- category Name -->

                  <!-- staff Name -->
                  <div class="col-md-6 mb-4">
                    <label for="staff-name" class="form-label">Staff Name</label>
                    <vee-field as="select" class="form-select" name="staff_id" v-model="expenseStore.editFormData.staff_id">
                      <option value="">Select Staff Name</option>
                      <option :value="staff.id" v-for="(staff, index) in staffStore.staffs" :key="staff.id">{{ index + 1 }}.
                        {{ staff.name }}</option>
                    </vee-field>
                    <ErrorMessage class="text-danger" name="staff_id" />
                  </div>
                  <!-- staff Name -->

                  <!-- expense amount -->
                  <div class="col-md-12 mb-4">
                    <label for="expense-original_price">Expense Amount</label>
                    <vee-field type="number" class="form-control" name="amount" v-model="expenseStore.editFormData.amount"
                      placeholder="Enter expense amount" min="0" />
                    <ErrorMessage class="text-danger" name="amount" />
                  </div>
                  <!-- expense amount -->

                  <!-- expense notes -->
                  <div class="col-md-12 mb-4">
                    <label for="expense-notes" class="form-label">Expense notes</label>
                    <textarea name="notes" class="form-control" id="" cols="30" rows="5" v-model="expenseStore.editFormData.notes"
                      placeholder="Enter expense notes"></textarea>
                  </div>
                  <!-- expense notes -->

                  <!-- expense Image -->
                  <div class="col-md-12 mb-4">
                    <label for="name" class="form-label text-shuttle">Upload Attachment</label>
                    <vee-field id="uploadFile" @change="onFileChange" type="file" class="form-control" name="file"
                      accept="image/*,.pdf" />
                    <ErrorMessage class="text-danger" name="file" />
                  </div>
                  <!-- expense Image -->
                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" class="btn btn-warning fw-bold">Update</button>
                </div>
              </vee-form>

            </div>
          </div>
        </div>


      </div>
  </div>
</div></template>