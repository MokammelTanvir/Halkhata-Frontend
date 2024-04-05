<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from "vue";
import { useCustomerStore } from "@/stores/customer";
import { useRouter, useRoute } from "vue-router";

/* All Instance */
const customerStore = useCustomerStore();
const swal = inject("$swal");
const router = useRouter();
const route = useRoute();

customerStore.swal = swal;
customerStore.router = router;
/* All Variables and Constants */

const schema = reactive({
  name: "required",
  code: "required",
});

/* All Methods */
const UpdateCustomer = () => {
  customerStore.updateCustomer(customerStore.editFormData, route.params.id);
};

/* Hooks and OnMounted */
onMounted(() => {
  customerStore.getCustomer(route.params.id);
});
</script>

<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="card-title text-primary fw-bold">Customer Update</h4>
                <router-link
                  :to="{ name: 'customer-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i> Customer List</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <vee-form
                :validation-schema="schema"
                @submit="UpdateCustomer"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- customer Name -->
                  <div class="col-md-12 mb-4">
                    <label for="customer-name">Customer Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="customerStore.editFormData.name"
                      placeholder="Enter customer Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- customer Name -->

                  <!-- customer Email -->
                  <div class="col-md-12 mb-4">
                    <label for="customer-email">Customer Email</label>
                    <vee-field
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="customerStore.editFormData.email"
                      placeholder="Enter customer Email"
                    />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>
                  <!-- customer Name -->

                  <!-- customer Phone -->
                  <div class="col-md-12 mb-4">
                    <label for="customer-phone">Customer Phone</label>
                    <vee-field
                      type="tel"
                      class="form-control"
                      name="phone"
                      v-model="customerStore.editFormData.phone"
                      placeholder="Enter customer Phone"
                    />
                    <ErrorMessage class="text-danger" name="phone" />
                  </div>
                  <!-- customer Name -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-warning fw-bold">
                    Update
                  </button>
                </div>
              </vee-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
