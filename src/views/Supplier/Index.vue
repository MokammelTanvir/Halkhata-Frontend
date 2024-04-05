<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useSupplierStore } from "@/stores/supplier";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const supplierStore = useSupplierStore();
const router = useRouter();
const swal = inject("$swal");

supplierStore.swal = swal;
supplierStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */
const DeleteSupplier = (id, name) => {
  swal({
    title: `Do you want to delete this data: ${name} ${id}`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      supplierStore.deleteSupplier(id, (status) => {
        if (status == "success") {
          supplierStore.getSuppliers(
            supplierStore.pagination.current_page,
            supplierStore.dataLimit
          );
        }
      });
    }
  });
};

/* Hooks and Computed */
onMounted(() => {
  supplierStore.getSuppliers(
    supplierStore.pagination.current_page,
    supplierStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    supplierStore.getSuppliers(
      supplierStore.pagination.current_page,
      supplierStore.dataLimit,
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
                <h4 class="card-title text-primary fw-bold">Supplier Index</h4>
                <router-link
                  :to="{ name: 'supplier-create' }"
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
                    supplierStore.getTotalCount
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
                    <th scope="col">Company Name</th>
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
                    v-for="(supplier, index) in supplierStore.suppliers"
                    :key="supplier.id"
                  >
                    <th scope="row">
                      {{
                        supplierStore.pagination.current_page *
                          supplierStore.dataLimit -
                        supplierStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>{{ supplier.name }}</td>
                    <td>{{ supplier.company_name }}</td>
                    <td>{{ supplier.phone }}</td>
                    <td>{{ supplier.nid }}</td>
                    <td>{{ supplier.address }}</td>
                    <td>
                      <template v-if="supplier.file != null">
                        <a :href="supplier.file"
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
                          :checked="supplier.is_active"
                          @change.prevent="
                            supplierStore.changeStatus(supplier.id)
                          "
                        />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'supplier-edit',
                          params: { id: supplier.id },
                        }"
                        class="btn btn-info btn-sm"
                        ><i class="fas fa-edit"></i
                      ></router-link>
                      <a
                        @click.prevent="
                          DeleteSupplier(supplier.id, supplier.name)
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
            v-model="supplierStore.pagination.current_page"
            :pages="supplierStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              supplierStore.getSuppliers(
                supplierStore.pagination.current_page,
                supplierStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
