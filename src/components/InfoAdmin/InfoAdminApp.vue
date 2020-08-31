<template>
  <div id="app">
    <navbar />
    <!-- <sidenav /> -->
    <router-view />
  </div>
</template>

<script>
import navbar from './InfoNavbar.vue'
// import sidenav from './EngSideNav.vue'
export default {
  components: {
    navbar
    // sidenav
  }
}
</script>

<style scoped>
#app {
  overflow-x: hidden;
}
</style>
