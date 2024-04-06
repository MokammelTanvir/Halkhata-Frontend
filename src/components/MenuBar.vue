<template>
  <div class="topnav active">
    <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">
      <div class="collapse navbar-collapse active" id="topnav-menu-content">
        <ul class="navbar-nav active">
          <li class="nav-item active">
            <router-link
              class="nav-link dropdown-toggle arrow-none active"
              :to="{ name: 'dashboard' }"
              id="topnav-dashboard"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bx bx-home-circle icon"></i>
              <span data-key="t-dashboard">Dashboard</span>
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle arrow-none"
              href="#"
              id="topnav-uielement"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bx bx-cart icon"></i>
              <span data-key="t-elements">POS</span>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle arrow-none"
              href="#"
              id="topnav-pages"
              role="button"
            >
              <i class="bx bx-customize icon"></i>
              <span data-key="t-apps">Inventory</span>
              <div class="arrow-down"></div>
            </a>
            <div class="dropdown-menu" aria-labelledby="topnav-pages">
              <!-- Category -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-projects"
                  role="button"
                >
                  <span data-key="t-projects">Category Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                  <router-link
                    :to="{ name: 'category-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Category List</router-link
                  >
                  <router-link
                    :to="{ name: 'category-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
              <!-- Category End -->
              <!-- Brand -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-projects"
                  role="button"
                >
                  <span data-key="t-projects">Brand Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                  <router-link
                    :to="{ name: 'brand-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Brand List</router-link
                  >
                  <router-link
                    :to="{ name: 'brand-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
              <!-- Brand End -->
              <!-- Supplier -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-projects"
                  role="button"
                >
                  <span data-key="t-projects">Supplier Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                  <router-link
                    :to="{ name: 'supplier-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Supplier List</router-link
                  >
                  <router-link
                    :to="{ name: 'supplier-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
              <!-- Supplier End -->

              <!-- product -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-projects"
                  role="button"
                >
                  <span data-key="t-projects">Product Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                  <router-link
                    :to="{ name: 'product-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Product List</router-link
                  >
                  <router-link
                    :to="{ name: 'product-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
              <!-- product End -->

              <!-- expense -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-projects"
                  role="button"
                >
                  <span data-key="t-projects">Expense Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                  <router-link
                    :to="{ name: 'expense-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Expense List</router-link
                  >
                  <router-link
                    :to="{ name: 'expense-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
              <!-- expense End -->
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle arrow-none"
              href="#"
              id="topnav-components"
              role="button"
            >
              <i class="bx bx-layer icon"></i>
              <span data-key="t-components">HRM</span>
              <div class="arrow-down"></div>
            </a>
            <div class="dropdown-menu" aria-labelledby="topnav-components">
              <!-- Staff -->
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-map"
                  role="button"
                >
                  <span data-key="t-maps">Employee Management</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-map">
                  <router-link
                    :to="{ name: 'staff-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Staff List</router-link
                  >
                  <router-link
                    :to="{ name: 'staff-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle arrow-none"
              href="#"
              id="topnav-more"
              role="button"
            >
              <i class="bx bx-file icon"></i>
              <span data-key="t-pages">CRM</span>
              <div class="arrow-down"></div>
            </a>
            <div class="dropdown-menu" aria-labelledby="topnav-more">
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-pricing"
                  role="button"
                >
                  <span data-key="t-pricing">Customers</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                  <router-link
                    :to="{ name: 'customer-index' }"
                    class="dropdown-item"
                    data-key="t-p-list"
                    >Customer List</router-link
                  >
                  <router-link
                    :to="{ name: 'customer-create' }"
                    class="dropdown-item"
                    data-key="t-create-new"
                    >Create New</router-link
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
