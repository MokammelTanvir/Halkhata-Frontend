<script setup>
/* All Imports */
import { ref, reactive, inject } from "vue";
import { useBrandStore } from "@/stores/brand";
import { useRouter } from "vue-router";

/* All Instance */
const brandStore = useBrandStore();
const swal = inject("$swal");
const router = useRouter();

brandStore.swal = swal;
brandStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  name: null,
  code: null,
  file: null,
});

const schema = reactive({
  name: "required",
  code: "required",
});

/* All Methods */
const saveBrand = () => {
  brandStore.storeBrand(formData);
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
                <h4 class="card-title text-primary fw-bold">Brand Create</h4>
                <router-link
                  :to="{ name: 'brand-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i> Brand List</router-link
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
                @submit="saveBrand"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- brand Name -->
                  <div class="col-md-6 mb-4">
                    <label for="brand-name">Brand Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="formData.name"
                      placeholder="Enter brand Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- brand Name -->

                  <!-- brand code -->
                  <div class="col-md-6 mb-4">
                    <label for="brand-code">Brand Code</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="code"
                      v-model="formData.code"
                      placeholder="Enter brand Code"
                    />
                    <ErrorMessage class="text-danger" name="code" />
                  </div>
                  <!-- brand Name -->

                  <!-- brand Image -->
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
                  <!-- brand Image -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-primary fw-bold">
                    Create Brand
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
