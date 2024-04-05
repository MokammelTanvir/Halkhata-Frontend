<script setup>
/* All Imports */
import { ref, reactive, inject } from "vue";
import { useSupplierStore } from "@/stores/supplier";
import { useRouter } from "vue-router";

/* All Instance */
const supplierStore = useSupplierStore();
const swal = inject("$swal");
const router = useRouter();

supplierStore.swal = swal;
supplierStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  name: null,
  email: null,
  phone: null,
  nid: null,
  company_name: null,
  address: null,
  file: null,
});

const schema = reactive({
  name: "required",
  email: "required|email",
  phone: "required|min:11|max:14",
  nid: "required",
  company_name: "required",
  address: "required",
});

/* All Methods */
const saveSupplier = () => {
  supplierStore.storeSupplier(formData);
};
const onFileChange = (e) => {
  formData.file = e.target.files[0];
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
                <h4 class="card-title text-primary fw-bold">Supplier Create</h4>
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
                @submit="saveSupplier"
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
                      v-model="formData.name"
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
                      v-model="formData.email"
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
                      v-model="formData.phone"
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
                      v-model="formData.company_name"
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
                      v-model="formData.nid"
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
                      v-model="formData.address"
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
