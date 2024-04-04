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
