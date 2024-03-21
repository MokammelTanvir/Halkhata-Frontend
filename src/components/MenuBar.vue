<template>
  <div class="topnav active">
    <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">
      <div class="collapse navbar-collapse active" id="topnav-menu-content">
        <ul class="navbar-nav active">
          <li class="nav-item active">
            <a
              class="nav-link dropdown-toggle arrow-none active"
              href="index.html"
              id="topnav-dashboard"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bx bx-home-circle icon"></i>
              <span data-key="t-dashboard">Dashboard</span>
            </a>
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
              <a
                href="apps-file-manager.html"
                class="dropdown-item"
                data-key="t-filemanager"
                >File Manager</a
              >

              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-ecommerce"
                  role="button"
                >
                  <span data-key="t-ecommerce">Ecommerce</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                  <a
                    href="ecommerce-products.html"
                    class="dropdown-item"
                    data-key="t-products"
                    >Products</a
                  >
                  <a
                    href="ecommerce-product-detail.html"
                    class="dropdown-item"
                    data-key="t-product-detail"
                    >Product Detail</a
                  >
                  <a
                    href="ecommerce-orders.html"
                    class="dropdown-item"
                    data-key="t-orders"
                    >Orders</a
                  >
                  <a
                    href="ecommerce-customers.html"
                    class="dropdown-item"
                    data-key="t-customers"
                    >Customers</a
                  >
                  <a
                    href="ecommerce-cart.html"
                    class="dropdown-item"
                    data-key="t-cart"
                    >Cart</a
                  >
                  <a
                    href="ecommerce-checkout.html"
                    class="dropdown-item"
                    data-key="t-checkout"
                    >Checkout</a
                  >
                  <a
                    href="ecommerce-shops.html"
                    class="dropdown-item"
                    data-key="t-shops"
                    >Shops</a
                  >
                  <a
                    href="ecommerce-add-product.html"
                    class="dropdown-item"
                    data-key="t-add-product"
                    >Add Product</a
                  >
                </div>
              </div>
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-email"
                  role="button"
                >
                  <span data-key="t-email">Email</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-email">
                  <a
                    href="email-inbox.html"
                    class="dropdown-item"
                    data-key="t-inbox"
                    >Inbox</a
                  >
                  <a
                    href="email-read.html"
                    class="dropdown-item"
                    data-key="t-read-email"
                    >Read Email</a
                  >
                </div>
              </div>

              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-contact"
                  role="button"
                >
                  <span data-key="t-contacts">Contacts</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-contact">
                  <a
                    href="contacts-grid.html"
                    class="dropdown-item"
                    data-key="t-user-grid"
                    >User Grid</a
                  >
                  <a
                    href="contacts-list.html"
                    class="dropdown-item"
                    data-key="t-user-list"
                    >User List</a
                  >
                  <a
                    href="contacts-settings.html"
                    class="dropdown-item"
                    data-key="t-user-settings"
                    >User Settings</a
                  >
                </div>
              </div>
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
              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-map"
                  role="button"
                >
                  <span data-key="t-maps">Employee</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-map">
                  <a
                    href="maps-google.html"
                    class="dropdown-item"
                    data-key="t-google"
                    >Employee List</a
                  >
                  <a
                    href="maps-vector.html"
                    class="dropdown-item"
                    data-key="t-vector"
                    >Create Employee</a
                  >
                  <a
                    href="maps-leaflet.html"
                    class="dropdown-item"
                    data-key="t-leaflet"
                    >Create New</a
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
                  <span data-key="t-pricing">Pricing</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                  <a
                    href="pricing-basic.html"
                    class="dropdown-item"
                    data-key="t-basic"
                    >Basic</a
                  >
                  <a
                    href="pricing-table.html"
                    class="dropdown-item"
                    data-key="t-table"
                    >table</a
                  >
                </div>
              </div>

              <div class="dropdown">
                <a
                  class="dropdown-item dropdown-toggle arrow-none"
                  href="#"
                  id="topnav-invoices"
                  role="button"
                >
                  <span data-key="t-invoices">Invoices</span>
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-invoices">
                  <a
                    href="invoices-list.html"
                    class="dropdown-item"
                    data-key="t-invoice-list"
                    >Invoice List</a
                  >
                  <a
                    href="invoices-detail.html"
                    class="dropdown-item"
                    data-key="t-invoice-detail"
                    >Invoice Detail</a
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
