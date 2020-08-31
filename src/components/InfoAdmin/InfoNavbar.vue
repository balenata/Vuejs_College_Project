<template>
  <div>
    <nav class=" navbar navbar-expand bg-dark">
      <a class="navbar-brand text-white" href="#">Informatics</a>
      <!-- Navbar Search-->
      <div class="col-md-5 ml-auto">
        <form >
          <div style="margin-left:-15px" class="input-group">
            <input
              type="text"
              class="form-control search-input"
              placeholder="Search..."
            />
            <button  type="button" class="btn btn-white search-button">
              <font-awesome-icon class="text-primary" icon="search" />
            </button>
          </div>
        </form>
      </div>

      <!-- Navbar-->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li style="position: fixed; margin-left:-30px; margin-top:-20px" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
          >
            <font-awesome-icon class="text-white" icon="user" />
          </a>
          <div class="dropdown-menu dropdown-menu-right ">
            <router-link class="dropdown-item" to="/info-admin/add-administrator-info">Settings </router-link>
            <a class="dropdown-item" href="#">Activity Log</a>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/admin">Logout </router-link>
          </div>
        </li>
      </ul>
    </nav>
    <sidenavinfo />
  </div>
</template>

<script>
import sidenavinfo from './InfoSideNav.vue'
export default {
  components: {
    sidenavinfo
  }
}
</script>

<style scoped>
/* .navbar {
  background-color: #000008e3;
} */
.search-input {
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgb(241, 231, 231);
  transition: all 0.4s;
}

.search-input:focus {
  background: transparent;
  box-shadow: none;
  border-bottom: 2px solid #4e35dc;
}

.search-button {
  border-radius: 50%;
  padding: 10px 16px;
  transition: all 0.4s;
}

.search-button:hover {
  background-color: #eee;
  transform: translateY(-1px);
}
</style>
