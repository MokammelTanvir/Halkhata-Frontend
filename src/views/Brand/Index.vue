<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useBrandStore } from "@/stores/brand";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const brandStore = useBrandStore();
const router = useRouter();
const swal = inject("$swal");

brandStore.swal = swal;
brandStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */
const DeleteBrand = (id, name) => {
  swal({
    title: `Do you want to delete this data: ${name} ${id}`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      brandStore.deleteBrand(id, (status) => {
        if (status == "success") {
          brandStore.getBrands(
            brandStore.pagination.current_page,
            brandStore.dataLimit
          );
        }
      });
    }
  });
};

/* Hooks and Computed */
onMounted(() => {
  brandStore.getBrands(
    brandStore.pagination.current_page,
    brandStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    brandStore.getBrands(
      brandStore.pagination.current_page,
      brandStore.dataLimit,
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
                <h4 class="card-title text-primary fw-bold">Brand Index</h4>
                <router-link
                  :to="{ name: 'brand-create' }"
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
                    brandStore.getTotalCount
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
                    <th scope="col">Code</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(brand, index) in brandStore.brands"
                    :key="brand.id"
                  >
                    <th scope="row">
                      {{
                        brandStore.pagination.current_page *
                          brandStore.dataLimit -
                        brandStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>{{ brand.name }}</td>
                    <td>{{ brand.code }}</td>
                    <td>
                      <template v-if="brand.file != null">
                        <img
                          :src="brand.file"
                          alt=""
                          class="img-fluid"
                          style="width: 80px; height: 80px; border-radius: 5px"
                        />
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
                          :checked="brand.is_active"
                          @change.prevent="brandStore.changeStatus(brand.id)"
                        />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{ name: 'brand-edit', params: { id: brand.id } }"
                        class="btn btn-info btn-sm"
                        ><i class="fas fa-edit"></i
                      ></router-link>
                      <a
                        @click.prevent="DeleteBrand(brand.id, brand.name)"
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
            v-model="brandStore.pagination.current_page"
            :pages="brandStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              brandStore.getBrands(
                brandStore.pagination.current_page,
                brandStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
