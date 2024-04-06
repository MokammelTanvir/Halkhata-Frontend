<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from "vue";
import { useOrderStore } from "@/stores/order";
import { useRouter } from "vue-router";
import _ from "lodash";

/* All Instance */
const orderStore = useOrderStore();
const router = useRouter();
const swal = inject("$swal");

orderStore.swal = swal;
orderStore.router = router;

/* All Variables */
const searchKeyWord = ref("");

/* All Methods */

/* Hooks and Computed */
onMounted(() => {
  orderStore.getOrders(
    orderStore.pagination.current_page,
    orderStore.dataLimit
  );
});

watch(
  searchKeyWord,
  _.debounce((current, previous) => {
    orderStore.getOrders(
      orderStore.pagination.current_page,
      orderStore.dataLimit,
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
                <h4 class="card-title text-primary fw-bold">Sales History</h4>
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
                    orderStore.getTotalCount
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
                    <th scope="col">Transaction Number</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Paid Amount</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Total</th>
                    <th scope="col">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(order, index) in orderStore.orders"
                    :key="order.id"
                  >
                    <th scope="row">
                      {{
                        orderStore.pagination.current_page *
                          orderStore.dataLimit -
                        orderStore.dataLimit +
                        index +
                        1
                      }}
                    </th>
                    <td>{{ order.transaction_number ?? "---" }}</td>
                    <td>{{ order.customer?.name }}</td>
                    <td>{{ order.pay_amount }}</td>
                    <td>{{ order.subtotal }}</td>
                    <td>{{ order.discount }}</td>
                    <td>{{ order.total }}</td>
                    <td>{{ order.payment_method }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end my-4">
          <v-pagination
            v-model="orderStore.pagination.current_page"
            :pages="orderStore.pagination.last_page"
            :range-size="1"
            active-color="#776acF"
            @update:modelValue="
              orderStore.getOrders(
                orderStore.pagination.current_page,
                orderStore.dataLimit
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
