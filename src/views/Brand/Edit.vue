<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from "vue";
import { useBrandStore } from "@/stores/brand";
import { useRouter, useRoute } from "vue-router";

/* All Instance */
const brandStore = useBrandStore();
const swal = inject("$swal");
const router = useRouter();
const route = useRoute();

brandStore.swal = swal;
brandStore.router = router;
/* All Variables and Constants */

const schema = reactive({
  name: "required",
  code: "required",
});

/* All Methods */
const updateBrand = () => {
  brandStore.updateBrand(brandStore.editFormData, route.params.id);
};
const onFileChange = (e) => {
  brandStore.editFormData.file = e.target.files[0];
};

/* Hooks and OnMounted */
onMounted(() => {
  brandStore.getBrand(route.params.id);
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
                <h4 class="card-title text-primary fw-bold">Brand Update</h4>
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
                @submit="updateBrand"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- Brand Name -->
                  <div class="col-md-6 mb-4">
                    <label for="Brand-name">Brand Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="brandStore.editFormData.name"
                      placeholder="Enter Brand Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- Brand Name -->

                  <!-- Brand code -->
                  <div class="col-md-6 mb-4">
                    <label for="Brand-code">Brand Code</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="code"
                      v-model="brandStore.editFormData.code"
                      placeholder="Enter Brand Code"
                    />
                    <ErrorMessage class="text-danger" name="code" />
                  </div>
                  <!-- Brand Name -->

                  <!-- Brand Image -->
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
                  <!-- Brand Image -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-warning fw-bold">
                    Update Brand
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
