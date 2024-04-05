<script setup>
/* All Imports */
import { ref, reactive, inject } from "vue";
import { useCustomerStore } from "@/stores/customer";
import { useRouter } from "vue-router";

/* All Instance */
const customerStore = useCustomerStore();
const swal = inject("$swal");
const router = useRouter();

customerStore.swal = swal;
customerStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  name: null,
  email: null,
  phone: null,
});

const schema = reactive({
  email: "email",
  phone: "required|min:11|max:14",
});

/* All Methods */
const saveCustomer = () => {
  customerStore.storeCustomer(formData);
};

/* Hooks and OnMounted */
</script>

<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="card-title text-primary fw-bold">Customer Create</h4>
                <router-link
                  :to="{ name: 'customer-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i>Customer List</router-link
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
                @submit="saveCustomer"
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
                      v-model="formData.name"
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
                      v-model="formData.email"
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
                      v-model="formData.phone"
                      placeholder="Enter customer Phone"
                    />
                    <ErrorMessage class="text-danger" name="phone" />
                  </div>
                  <!-- customer Name -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-primary fw-bold">
                    Create
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
