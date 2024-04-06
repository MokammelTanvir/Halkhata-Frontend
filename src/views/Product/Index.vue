<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useProductStore } from "@/stores/product";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const productStore = useProductStore();
const router = useRouter();
const swal = inject("$swal");

productStore.swal = swal;
productStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */
const DeleteProduct = (id, name) => {
  swal({
    title: `Do you want to delete this data: ${name} ${id}`,
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      productStore.deleteProduct(id, (status) => {
        if (status == "success") {
          productStore.getProducts(
            productStore.pagination.current_page,
            productStore.dataLimit
          );
        }
      });
    }
  });
};

/* Hooks and Computed */
onMounted(() => {
  productStore.getProducts(
    productStore.pagination.current_page,
    productStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    productStore.getProducts(
      productStore.pagination.current_page,
      productStore.dataLimit,
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
                <h4 class="card-title text-primary fw-bold">Product Index</h4>
                <router-link
                  :to="{ name: 'product-create' }"
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
                    productStore.getTotalCount
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
                    <th scope="col">Image</th>
                    <th scope="col">BarCode</th>
                    <th scope="col">QrCode</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Original Price</th>
                    <th scope="col">Sell Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(product, index) in productStore.products"
                    :key="product.id"
                  >
                    <th scope="row">
                      {{
                        productStore.pagination.current_page *
                          productStore.dataLimit -
                        productStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>
                      <div class="" v-if="product.file">
                        <img
                          :src="product.file"
                          alt=""
                          class="img-fluid"
                          style="width: 80px; height: 80px"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="" v-if="product.barcode">
                        <img
                          :src="product.barcode"
                          alt=""
                          class="img-fluid"
                          style="width: 80px; height: 80px"
                        />
                      </div>
                    </td>
                    <td>
                      <div class="" v-if="product.qrcode">
                        <img
                          :src="product.qrcode"
                          alt=""
                          class="img-fluid"
                          style="width: 80px; height: 80px"
                        />
                      </div>
                    </td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.code }}</td>
                    <td>{{ product.original_price }}</td>
                    <td>{{ product.sell_price }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                      <div
                        class="form-check form-switch d-flex justify-content-center"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input fs-5"
                          role="switch"
                          id="changeStatus"
                          :checked="product.is_active"
                          @change.prevent="
                            productStore.changeStatus(product.id)
                          "
                        />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="{
                          name: 'product-edit',
                          params: { id: product.id },
                        }"
                        class="btn btn-info btn-sm"
                        ><i class="fas fa-edit"></i
                      ></router-link>
                      <a
                        @click.prevent="DeleteProduct(product.id, product.name)"
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
            v-model="productStore.pagination.current_page"
            :pages="productStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              productStore.getProducts(
                productStore.pagination.current_page,
                productStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
