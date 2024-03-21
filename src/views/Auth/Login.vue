<template>
  <div class="auth-page d-flex align-items-center min-vh-100">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-xxl-3 col-lg-4 col-md-5">
          <div class="d-flex flex-column h-100 py-5 px-4">
            <div class="text-center text-muted mb-2">
              <div class="pb-3">
                <a href="#">
                  <span class="logo-lg">
                    <img src="@/assets/images/logo-sm.svg" alt="" height="24" />
                    <span class="logo-txt auth-logo-txt">HalKhata</span>
                  </span>
                </a>
                <p class="text-muted font-size-15 w-75 mx-auto mt-3 mb-0">
                  User Experience & Interface Design Strategy Saas Solution
                </p>
              </div>
            </div>

            <div class="my-auto">
              <div class="p-3 text-center">
                <img
                  src="@/assets/images/auth-img.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>

            <div class="mt-4 mt-md-5 text-center">
              <p class="mb-0">
                &copy; {{ currentYear }} HalKhata Inventory | Developed with
                <i class="mdi mdi-heart text-danger"></i> by MokammelTanvir.
              </p>
            </div>
          </div>

          <!-- end auth full page content -->
        </div>
        <!-- end col -->

        <div class="col-xxl-9 col-lg-8 col-md-7">
          <div class="auth-bg bg-light py-md-5 p-4 d-flex">
            <div class="bg-overlay-gradient"></div>
            <!-- end bubble effect -->
            <div
              class="row justify-content-center g-0 align-items-center w-100"
            >
              <div class="col-xl-4 col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <div class="px-3 py-3">
                      <div class="text-center">
                        <h5 class="mb-0">Welcome!</h5>
                        <p class="text-muted mt-2">Sign in to continue.</p>
                      </div>
                      <vee-form
                        :validation-schema="schema"
                        @submit="login"
                        class="mt-4 pt-2"
                      >
                        <div class="form-floating form-floating-custom mb-3">
                          <vee-field
                            type="email"
                            class="form-control"
                            id="input-username"
                            name="email"
                            v-model="loginForm.email"
                            placeholder="Enter Email Address"
                          />
                          <label for="input-username">Email</label>
                          <div class="form-floating-icon">
                            <i class="uil uil-users-alt"></i>
                          </div>
                          <ErrorMessage class="text-danger" name="email" />
                        </div>
                        <div
                          class="form-floating form-floating-custom mb-3 auth-pass-inputgroup"
                        >
                          <vee-field
                            type="password"
                            class="form-control"
                            id="password-input"
                            name="password"
                            placeholder="Enter Password"
                            v-model="loginForm.password"
                          />
                          <button
                            type="button"
                            class="btn btn-link position-absolute h-100 end-0 top-0"
                            id="password-addon"
                          >
                            <i
                              class="mdi mdi-eye-outline font-size-18 text-muted"
                            ></i>
                          </button>
                          <label for="password-input">Password</label>
                          <div class="form-floating-icon">
                            <ErrorMessage class="text-danger" name="password" />
                            <i class="uil uil-padlock"></i>
                          </div>
                        </div>

                        <div
                          class="form-check form-check-primary font-size-16 py-1"
                        >
                          <vee-field
                            class="form-check-input"
                            type="checkbox"
                            id="remember-check"
                            name="remember"
                            value="true"
                          />
                          <label
                            class="form-check-label font-size-14"
                            for="remember-check"
                          >
                            Remember me
                          </label>
                        </div>

                        <div class="mt-3">
                          <button class="btn btn-primary w-100" type="submit">
                            Log In
                          </button>
                        </div>
                      </vee-form>
                      <!-- end form -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container fluid -->
  </div>
  <!-- end authentication section -->
</template>

<script setup>
/* All Library Import */
import { useAuthStore } from "@/stores/auth";
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";

/* All Instance */
const swal = inject("$swal");
const authStore = useAuthStore();
const router = useRouter();

/* All Variable */
const loginForm = reactive({
  email: null,
  password: null,
});

const schema = reactive({
  email: "required|email",
  password: "required|min:4|max:25",
});

/* Methods */
const login = () => {
  authStore.login(loginForm, (status) => {
    if (status == "success") {
      swal({
        icon: "success",
        timer: 1000,
        title: authStore.message,
      });
      router.push({ name: "dashboard" });
      document.body.setAttribute("data-layout", "horizontal"); // Set data-layout attribute to default
    } else {
      swal({
        icon: "error",
        timer: 1000,
        title: authStore.message,
      });
      router.push({ name: "login" });
      document.body.setAttribute("data-layout", ""); // Set data-layout attribute to empty string
    }
  });
};

/* Hooks and Computed */
</script>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
