import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: DefaultLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/views/Dashboard.vue"),
        },

        /* Inventory */
        /* category routes */
        {
          path: "/category",
          name: "category-index",
          component: () => import("@/views/Category/Index.vue"),
        },
        {
          path: "/category/create",
          name: "category-create",
          component: () => import("@/views/Category/Create.vue"),
        },
        {
          path: "/category/edit/:id",
          name: "category-edit",
          component: () => import("@/views/Category/Edit.vue"),
        },
        /* category routes end */
        /* brand routes */
        {
          path: "/brand",
          name: "brand-index",
          component: () => import("@/views/Brand/Index.vue"),
        },
        {
          path: "/brand/create",
          name: "brand-create",
          component: () => import("@/views/Brand/Create.vue"),
        },
        {
          path: "/brand/edit/:id",
          name: "brand-edit",
          component: () => import("@/views/Brand/Edit.vue"),
        },
        /* brand routes end */
        /* supplier routes */
        {
          path: "/supplier",
          name: "supplier-index",
          component: () => import("@/views/Supplier/Index.vue"),
        },
        {
          path: "/supplier/create",
          name: "supplier-create",
          component: () => import("@/views/Supplier/Create.vue"),
        },
        {
          path: "/supplier/edit/:id",
          name: "supplier-edit",
          component: () => import("@/views/Supplier/Edit.vue"),
        },
        /* supplier routes end */
        /* product routes */
        {
          path: "/product",
          name: "product-index",
          component: () => import("@/views/Product/Index.vue"),
        },
        {
          path: "/product/create",
          name: "product-create",
          component: () => import("@/views/Product/Create.vue"),
        },
        {
          path: "/product/edit/:id",
          name: "product-edit",
          component: () => import("@/views/Product/Edit.vue"),
        },
        /* product routes end */

        /*HRM */
        /* staff routes */
        {
          path: "/staff",
          name: "staff-index",
          component: () => import("@/views/Staff/Index.vue"),
        },
        {
          path: "/staff/create",
          name: "staff-create",
          component: () => import("@/views/Staff/Create.vue"),
        },
        {
          path: "/staff/edit/:id",
          name: "staff-edit",
          component: () => import("@/views/Staff/Edit.vue"),
        },

        /*CRM */
        /* supplier routes */
        {
          path: "/customer",
          name: "customer-index",
          component: () => import("@/views/Customer/Index.vue"),
        },
        {
          path: "/customer/create",
          name: "customer-create",
          component: () => import("@/views/Customer/Create.vue"),
        },
        {
          path: "/customer/edit/:id",
          name: "customer-edit",
          component: () => import("@/views/Customer/Edit.vue"),
        },
        /* supplier routes end */
      ],
    },
    {
      path: "/auth",
      redirect: "/login",
      component: AuthLayout,
      meta: { isGuest: true },
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/Auth/Login.vue"),
        },
      ],
    },
  ],
});

// Middleware
router.beforeEach((to, form, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    next({ name: "login" });
  } else if (to.meta.isGuest && localStorage.getItem("token")) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
