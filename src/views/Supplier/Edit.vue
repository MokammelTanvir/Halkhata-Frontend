<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from "vue";
import { useSupplierStore } from "@/stores/supplier";
import { useRouter, useRoute } from "vue-router";

/* All Instance */
const supplierStore = useSupplierStore();
const swal = inject("$swal");
const router = useRouter();
const route = useRoute();

supplierStore.swal = swal;
supplierStore.router = router;
/* All Variables and Constants */

const schema = reactive({
  name: "required",
  code: "required",
});

/* All Methods */
const UpdateSupplier = () => {
  supplierStore.updateSupplier(supplierStore.editFormData, route.params.id);
};
const onFileChange = (e) => {
  supplierStore.editFormData.file = e.target.files[0];
};

/* Hooks and OnMounted */
onMounted(() => {
  supplierStore.getSupplier(route.params.id);
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
                <h4 class="card-title text-primary fw-bold">Supplier Update</h4>
                <router-link
                  :to="{ name: 'supplier-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i> Supplier List</router-link
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
                @submit="UpdateSupplier"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- supplier Name -->
                  <div class="col-md-6 mb-4">
                    <label for="supplier-name">Supplier Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="supplierStore.editFormData.name"
                      placeholder="Enter supplier Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- supplier Name -->

                  <!-- supplier Email -->
                  <div class="col-md-6 mb-4">
                    <label for="supplier-email">Supplier Email</label>
                    <vee-field
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="supplierStore.editFormData.email"
                      placeholder="Enter supplier Email"
                    />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>
                  <!-- supplier Name -->

                  <!-- supplier Phone -->
                  <div class="col-md-4 mb-4">
                    <label for="supplier-phone">Supplier Phone</label>
                    <vee-field
                      type="tel"
                      class="form-control"
                      name="phone"
                      v-model="supplierStore.editFormData.phone"
                      placeholder="Enter supplier Phone"
                    />
                    <ErrorMessage class="text-danger" name="phone" />
                  </div>
                  <!-- supplier Name -->

                  <!-- supplier company name -->
                  <div class="col-md-4 mb-4">
                    <label for="supplier-company-name"
                      >Supplier Company Name</label
                    >
                    <vee-field
                      type="text"
                      class="form-control"
                      name="company_name"
                      v-model="supplierStore.editFormData.company_name"
                      placeholder="Enter supplier company name"
                    />
                    <ErrorMessage class="text-danger" name="company_name" />
                  </div>
                  <!-- supplier company Name -->

                  <!-- supplier NID -->
                  <div class="col-md-4 mb-4">
                    <label for="supplier-nid">Supplier NID</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="nid"
                      v-model="supplierStore.editFormData.nid"
                      placeholder="Enter supplier NID"
                    />
                    <ErrorMessage class="text-danger" name="nid" />
                  </div>
                  <!-- supplier NID -->

                  <!-- supplier NID -->
                  <div class="col-md-12 mb-4">
                    <label for="supplier-nid">Supplier Address</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="address"
                      v-model="supplierStore.editFormData.address"
                      placeholder="Enter supplier address"
                    />
                    <ErrorMessage class="text-danger" name="address" />
                  </div>
                  <!-- supplier NID -->

                  <!-- supplier Image -->
                  <div class="col-md-12 mb-4">
                    <label for="name" class="form-label text-shuttle"
                      >Upload Attachment</label
                    >
                    <vee-field
                      id="uploadFile"
                      @change="onFileChange"
                      type="file"
                      class="form-control"
                      name="file"
                      accept="image/*,.pdf"
                    />
                    <ErrorMessage class="text-danger" name="file" />
                  </div>
                  <!-- supplier Image -->
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
