<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useStaffStore } from "@/stores/staff";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const staffStore = useStaffStore();
const router = useRouter();
const swal = inject("$swal");

staffStore.swal = swal;
staffStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */
const DeleteStaff = (id, name) => {
  swal({
    title: `Do you want to delete this data: ${name} ${id}`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      staffStore.deleteStaff(id, (status) => {
        if (status == "success") {
          staffStore.getStaffs(
            staffStore.pagination.current_page,
            staffStore.dataLimit
          );
        }
      });
    }
  });
};

/* Hooks and Computed */
onMounted(() => {
  staffStore.getStaffs(
    staffStore.pagination.current_page,
    staffStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    staffStore.getStaffs(
      staffStore.pagination.current_page,
      staffStore.dataLimit,
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
                <h4 class="card-title text-primary fw-bold">Staff Index</h4>
                <router-link
                  :to="{ name: 'staff-create' }"
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
                    staffStore.getTotalCount
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
                    <th scope="col">Phone</th>
                    <th scope="col">NID</th>
                    <th scope="col">Address</th>
                    <th scope="col">Ref</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(staff, index) in staffStore.staffs"
                    :key="staff.id"
                  >
                    <th scope="row">
                      {{
                        staffStore.pagination.current_page *
                          staffStore.dataLimit -
                        staffStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>{{ staff.name }}</td>
                    <td>{{ staff.phone }}</td>
                    <td>{{ staff.nid }}</td>
                    <td>{{ staff.address }}</td>
                    <td>
                      <template v-if="staff.file != null">
                        <a :href="staff.file"
                          ><i class="fas fa-download"></i
                        ></a>
                      </template>
                    </td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input fs-5"
                          role="switch"
                          id="changeStatus"
                          :checked="staff.is_active"
                          @change.prevent="staffStore.changeStatus(staff.id)"
                        />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{ name: 'staff-edit', params: { id: staff.id } }"
                        class="btn btn-info btn-sm"
                        ><i class="fas fa-edit"></i
                      ></router-link>
                      <a
                        @click.prevent="DeleteStaff(staff.id, staff.name)"
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
            v-model="staffStore.pagination.current_page"
            :pages="staffStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              staffStore.getStaffs(
                staffStore.pagination.current_page,
                staffStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
