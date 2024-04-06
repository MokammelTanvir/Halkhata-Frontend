<script setup>
/* All Imports */
import { ref, reactive, inject, onMounted } from "vue";
import { useProductStore } from "@/stores/product";
import { useBrandStore } from "@/stores/brand";
import { useCategoryStore } from "@/stores/category";
import { useSupplierStore } from "@/stores/supplier";

import { useRouter } from "vue-router";

/* All Instance */
const productStore = useProductStore();
const brandStore = useBrandStore();
const categoryStore = useCategoryStore();
const supplierStore = useSupplierStore();

const swal = inject("$swal");
const router = useRouter();

productStore.swal = swal;
productStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  brand_id: "",
  category_id: "",
  supplier_id: "",
  name: "",
  code: "",
  original_price: 0,
  sell_price: 0,
  stock: 1,
  description: null,
  file: null,
});

const schema = reactive({
  brand_id: "required",
  category_id: "required",
  supplier_id: "required",
  name: "required",
  code: "required|min:4|max:25",
  original_price: "required|min:1|max:10|min_value:0",
  sell_price: "required|min:1|max:10|min_value:0",
  stock: "required|min_value:1|min:1",
});

/* All Methods */
const saveProduct = () => {
  productStore.storeProduct(formData);
};
const onFileChange = (e) => {
  formData.file = e.target.files[0];
};

/* Hooks and OnMounted */
onMounted(() => {
  brandStore.getAllBrands();
  categoryStore.getAllCategories();
  supplierStore.getAllSuppliers();
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
                <h4 class="card-title text-primary fw-bold">Product Create</h4>
                <router-link
                  :to="{ name: 'product-index' }"
                  class="btn btn-primary text-white fw-bold"
                >
                  <i class="fas fa-arrow-left"></i> product List</router-link
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
                @submit="saveProduct"
                class="mt-4 pt-2"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <!-- Brand Name -->
                  <div class="col-md-4 mb-4">
                    <label for="Brand-name" class="form-label"
                      >Brand Name</label
                    >
                    <vee-field
                      as="select"
                      class="form-select"
                      name="brand_id"
                      v-model="formData.brand_id"
                    >
                      <option value="">Select Brand Name</option>
                      <option
                        :value="brand.id"
                        v-for="(brand, index) in brandStore.brands"
                        :key="brand.id"
                      >
                        {{ index + 1 }}. {{ brand.name }}
                      </option>
                    </vee-field>
                    <ErrorMessage class="text-danger" name="brand_id" />
                  </div>
                  <!-- Brand Name -->

                  <!-- category Name -->
                  <div class="col-md-4 mb-4">
                    <label for="category-name" class="form-label"
                      >Category Name</label
                    >
                    <vee-field
                      as="select"
                      class="form-select"
                      name="category_id"
                      v-model="formData.category_id"
                    >
                      <option value="">Select Category Name</option>
                      <option
                        :value="category.category_id"
                        v-for="(category, index) in categoryStore.categories"
                        :key="category.category_id"
                      >
                        {{ index + 1 }}. {{ category.category_name }}
                      </option>
                    </vee-field>
                    <ErrorMessage class="text-danger" name="category_id" />
                  </div>
                  <!-- category Name -->

                  <!-- supplier Name -->
                  <div class="col-md-4 mb-4">
                    <label for="supplier-name" class="form-label"
                      >Supplier Name</label
                    >
                    <vee-field
                      as="select"
                      class="form-select"
                      name="supplier_id"
                      v-model="formData.supplier_id"
                    >
                      <option value="">Select Supplier Name</option>
                      <option
                        :value="supplier.id"
                        v-for="(supplier, index) in supplierStore.suppliers"
                        :key="supplier.id"
                      >
                        {{ index + 1 }}. {{ supplier.name }}
                      </option>
                    </vee-field>
                    <ErrorMessage class="text-danger" name="supplier_id" />
                  </div>
                  <!-- supplier Name -->

                  <!-- product Name -->
                  <div class="col-md-6 mb-4">
                    <label for="product-name">Product Name</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="formData.name"
                      placeholder="Enter product Name"
                    />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- product Name -->

                  <!-- product code -->
                  <div class="col-md-6 mb-4">
                    <label for="product-code">Product Code</label>
                    <vee-field
                      type="text"
                      class="form-control"
                      name="code"
                      v-model="formData.code"
                      placeholder="Enter product code"
                    />
                    <ErrorMessage class="text-danger" name="code" />
                  </div>
                  <!-- product code -->

                  <!-- product Originial Price -->
                  <div class="col-md-4 mb-4">
                    <label for="product-original_price"
                      >Product Original Price</label
                    >
                    <vee-field
                      type="number"
                      class="form-control"
                      name="original_price"
                      v-model="formData.original_price"
                      placeholder="Enter product original_price"
                      min="0"
                    />
                    <ErrorMessage class="text-danger" name="original_price" />
                  </div>
                  <!-- product Originial Price -->

                  <!-- product Sell Price -->
                  <div class="col-md-4 mb-4">
                    <label for="product-Sell_price">Product Sell Price</label>
                    <vee-field
                      type="number"
                      class="form-control"
                      name="sell_price"
                      v-model="formData.sell_price"
                      placeholder="Enter product sell_price"
                      min="0"
                    />
                    <ErrorMessage class="text-danger" name="sell_price" />
                  </div>
                  <!-- product Sell Price -->

                  <!-- product Stock -->
                  <div class="col-md-4 mb-4">
                    <label for="product-stock">Product Stock</label>
                    <vee-field
                      type="number"
                      class="form-control"
                      name="stock"
                      v-model="formData.stock"
                      placeholder="Enter product stock"
                      min="0"
                    />
                    <ErrorMessage class="text-danger" name="stock" />
                  </div>
                  <!-- product Stock -->

                  <!-- product Description -->
                  <div class="col-md-12 mb-4">
                    <label for="product-description" class="form-label"
                      >Product Description</label
                    >
                    <textarea
                      name="description"
                      class="form-control"
                      id=""
                      cols="30"
                      rows="5"
                      v-model="formData.description"
                      placeholder="Enter product description"
                    ></textarea>
                  </div>
                  <!-- product Description -->

                  <!-- product Image -->
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
                  <!-- product Image -->
                </div>

                <div
                  class="d-flex justify-content-center align-items-center mt-3"
                >
                  <button type="submit" class="btn btn-primary fw-bold">
                    Submit
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
