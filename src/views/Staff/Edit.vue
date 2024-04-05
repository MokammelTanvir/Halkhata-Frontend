<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from "vue";
import { useStaffStore } from "@/stores/staff";
import { useRouter, useRoute } from "vue-router";

/* All Instance */
const staffStore = useStaffStore();
const swal = inject("$swal");
const router = useRouter();
const route = useRoute();

staffStore.swal = swal;
staffStore.router = router;
/* All Variables and Constants */

const schema = reactive({
  name: "required",
  code: "required",
});

/* All Methods */
const UpdateStaff = () => {
  staffStore.updateStaff(staffStore.editFormData, route.params.id);
};
const onFileChange = (e) => {
  staffStore.editFormData.file = e.target.files[0];
};

/* Hooks and OnMounted */
onMounted(() => {
  staffStore.getStaff(route.params.id);
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
                <h4 class="card-title text-primary fw-bold">Staff Update</h4>
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
                @submit="UpdateStaff"
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
                      v-model="staffStore.editFormData.name"
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
                      v-model="staffStore.editFormData.email"
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
                      v-model="staffStore.editFormData.phone"
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
                      v-model="staffStore.editFormData.nid"
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
                      v-model="staffStore.editFormData.address"
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
                  <button type="submit" class="btn btn-warning fw-bold">
                    Update Staff
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
