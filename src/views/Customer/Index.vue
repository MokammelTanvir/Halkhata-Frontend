<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useCustomerStore } from "@/stores/customer";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const customerStore = useCustomerStore();
const router = useRouter();
const swal = inject("$swal");

customerStore.swal = swal;
customerStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */
const DeleteCustomer = (id, name) => {
  swal({
    title: `Do you want to delete this data: ${name} ${id}`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      customerStore.deleteCustomer(id, (status) => {
        if (status == "success") {
          customerStore.getCustomers(
            customerStore.pagination.current_page,
            customerStore.dataLimit
          );
        }
      });
    }
  });
};

/* Hooks and Computed */
onMounted(() => {
  customerStore.getCustomers(
    customerStore.pagination.current_page,
    customerStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    customerStore.getCustomers(
      customerStore.pagination.current_page,
      customerStore.dataLimit,
      current
    );
  }, 500)
);
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
                <h4 class="card-title text-primary fw-bold">Customer Index</h4>
                <router-link
                  :to="{ name: 'customer-create' }"
                  class="btn btn-success text-white fw-bold"
                >
                  <i class="fas fa-plus-circle"></i> Create New</router-link
                >
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
                  Total Count:
                  <span class="text-primary fw-bold">{{
                    customerStore.getTotalCount
                  }}</span>
                </div>
                <div class="col-md-4">
                  <input
                    type="search"
                    name=""
                    class="form-control"
                    placeholder="Search ..."
                    v-model="searchKeyWord"
                  />
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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(customer, index) in customerStore.customers"
                    :key="customer.id"
                  >
                    <th scope="row">
                      {{
                        customerStore.pagination.current_page *
                          customerStore.dataLimit -
                        customerStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input fs-5"
                          role="switch"
                          id="changeStatus"
                          :checked="customer.is_active"
                          @change.prevent="
                            customerStore.changeStatus(customer.id)
                          "
                        />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'customer-edit',
                          params: { id: customer.id },
                        }"
                        class="btn btn-info btn-sm"
                        ><i class="fas fa-edit"></i
                      ></router-link>
                      <a
                        @click.prevent="
                          DeleteCustomer(customer.id, customer.name)
                        "
                        class="btn btn-danger btn-sm ms-2"
                        ><i class="fas fa-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end my-4">
          <v-pagination
            v-model="customerStore.pagination.current_page"
            :pages="customerStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              customerStore.getCustomers(
                customerStore.pagination.current_page,
                customerStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
