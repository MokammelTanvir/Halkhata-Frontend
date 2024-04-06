<script setup>
/* All Library Import */
import { useDashboardStore } from "@/stores/dashboard";
import { ref, reactive, inject, onMounted } from "vue";
import { useRouter } from "vue-router";

/* All Instance */
const dashboardStore = useDashboardStore();
const swal = inject("$swal");
const router = useRouter();

/* All Variable */

/* Methods */

/* Hooks and Computed */
onMounted(() => {
  dashboardStore.getNotifications();
});
</script>

<template>
  <div class="dropdown d-inline-block">
    <button
      type="button"
      class="btn header-item noti-icon"
      id="page-header-notifications-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="bx bx-bell icon-sm"></i>
      <span class="noti-dot bg-danger rounded-pill">{{
        dashboardStore.getUnReadNotificationCount
      }}</span>
    </button>
    <div
      class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
      aria-labelledby="page-header-notifications-dropdown"
      style=""
    >
      <div class="p-3">
        <div class="row align-items-center">
          <div class="col">
            <h5 class="m-0 font-size-15">Notifications</h5>
          </div>
          <div class="col-auto">
            <a
              href="javascript:void(0);"
              class="small"
              @click.prevent="dashboardStore.markAsReadAll()"
            >
              Mark all as read</a
            >
          </div>
        </div>
      </div>
      <div data-simplebar="init" style="max-height: 250px">
        <div class="simplebar-wrapper" style="margin: 0px">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px">
              <div
                class="simplebar-content-wrapper"
                style="height: auto; overflow: hidden"
              >
                <div class="simplebar-content" style="padding: 0px">
                  <h6 class="dropdown-header bg-light">New</h6>

                  <template
                    v-for="(
                      notification, index
                    ) in dashboardStore.notifications"
                    :key="notification.id"
                  >
                    <a href="" class="text-reset notification-item">
                      <div class="d-flex border-bottom align-items-start">
                        <div class="flex-grow-1">
                          <h6 class="mb-1">
                            {{
                              new Date(notification.created_at).toLocaleString()
                            }}
                          </h6>
                          <div class="text-muted">
                            <p class="mb-1 font-size-13">
                              {{ notification.data.details["subject"] }}
                              <span
                                class="badge badge-soft-success"
                                v-if="notification.read_at"
                                >Review</span
                              >
                              <span class="badge badge-soft-danger" v-else>{{
                                "Unread"
                              }}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div
            class="simplebar-placeholder"
            style="width: 0px; height: 0px"
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-horizontal"
          style="visibility: hidden"
        >
          <div
            class="simplebar-scrollbar"
            style="transform: translate3d(0px, 0px, 0px); display: none"
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-vertical"
          style="visibility: hidden"
        >
          <div
            class="simplebar-scrollbar"
            style="
              transform: translate3d(0px, 0px, 0px);
              display: none;
              height: 135px;
            "
          ></div>
        </div>
      </div>
      <div class="p-2 border-top d-grid d-none">
        <a
          class="btn btn-sm btn-link font-size-14 btn-block text-center"
          href="javascript:void(0)"
        >
          <i class="uil-arrow-circle-right me-1"></i> <span>View More..</span>
        </a>
      </div>
    </div>
  </div>
</template>
