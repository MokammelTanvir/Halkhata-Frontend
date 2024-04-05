<script setup>
/* All Imports */
import { ref, reactive, inject } from "vue";
import { useStaffStore } from "@/stores/staff";
import { useRouter } from "vue-router";

/* All Instance */
const staffStore = useStaffStore();
const swal = inject("$swal");
const router = useRouter();

staffStore.swal = swal;
staffStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  name: null,
  email: null,
  phone: null,
  nid: null,
  address: null,
  file: null,
});

const schema = reactive({
  name: "required",
  email: "required|email",
  phone: "required|min:11|max:14",
  nid: "required",
  address: "required",
});

/* All Methods */
const saveStaff = () => {
  staffStore.storeStaff(formData);
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
                <h4 class="card-title text-primary fw-bold">Staff Create</h4>
                <router-link
                  :to="{ name: 'staff-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i> Staff List</router-link
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
                @submit="saveStaff"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- staff Name -->
                  <div class="col-md-6 mb-4">
                    <label for="staff-name">Staff Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="formData.name"
                      placeholder="Enter staff Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- staff Name -->

                  <!-- staff Email -->
                  <div class="col-md-6 mb-4">
                    <label for="staff-email">Staff Email</label>
                    <vee-field
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="formData.email"
                      placeholder="Enter staff Email"
                    />
                    <ErrorMessage class="text-danger" name="email" />
                  </div>
                  <!-- staff Name -->

                  <!-- staff Phone -->
                  <div class="col-md-6 mb-4">
                    <label for="staff-phone">Staff Phone</label>
                    <vee-field
                      type="tel"
                      class="form-control"
                      name="phone"
                      v-model="formData.phone"
                      placeholder="Enter staff Phone"
                    />
                    <ErrorMessage class="text-danger" name="phone" />
                  </div>
                  <!-- staff Name -->

                  <!-- staff NID -->
                  <div class="col-md-6 mb-4">
                    <label for="staff-nid">Staff NID</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="nid"
                      v-model="formData.nid"
                      placeholder="Enter staff NID"
                    />
                    <ErrorMessage class="text-danger" name="nid" />
                  </div>
                  <!-- staff NID -->

                  <!-- staff NID -->
                  <div class="col-md-12 mb-4">
                    <label for="staff-nid">Staff Address</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="address"
                      v-model="formData.address"
                      placeholder="Enter staff address"
                    />
                    <ErrorMessage class="text-danger" name="address" />
                  </div>
                  <!-- staff NID -->

                  <!-- staff Image -->
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
                  <!-- staff Image -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-primary fw-bold">
                    Create Staff
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
