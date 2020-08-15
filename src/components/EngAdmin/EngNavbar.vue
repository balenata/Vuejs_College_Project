<template>
  <div>
    <nav class=" navbar navbar-expand bg-dark">
      <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
      <!-- Navbar Search-->
      <div class="col-md-5 ml-auto">
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control search-input"
              placeholder="Search..."
            />
            <button type="button" class="btn btn-white search-button">
           <font-awesome-icon class="text-primary" icon="search" />
            </button>
          </div>
        </form>
      </div>

      <!-- Navbar-->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
          >
            <font-awesome-icon class="text-white" icon="user" />
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Settings</a>
            <a class="dropdown-item" href="#">Activity Log</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="login.html">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
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
