<template>
  <nav id="sidebarMenu" class="d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <h3
        class="
          sidebar-heading
          d-flex
          justify-content-between
          align-items-center
          px-3
          mt-4
          mb-1
          text-muted
        "
      >
        <span>Categorías</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h3>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Orders
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Customers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Reports
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-iconstack font-scale="1">
              <b-icon
                stacked
                icon="journal-bookmark-fill"
                variant="info"
              ></b-icon>
            </b-iconstack>
            Integrations
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import { BCollapse } from "bootstrap-vue";

export default {
  components: {
    // BRow,
    // BCol,
  },
};
</script>

<style lang="css">
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
