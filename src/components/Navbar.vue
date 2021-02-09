//src/components/Navbar.vue
<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#">
        <img src="../assets/genero_ujed_white.png" style="width: 12vw; min-width: 30px; margin-left: 20px;" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/inicio">Inicio</b-nav-item>
        <b-nav-item href="/form" >Realiza tu queja</b-nav-item>
        <b-nav-item href="/info" >Información</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.navbar-dark .navbar-nav .nav-link{
      color:white!important
    }

 .navbar.navbar-dark.bg-dark{
    background-color: #f2215f!important;
    height: 100px;
    font-size: 22px;
    font-family: Helvetica;
 }
 .nav-item {
     padding: 20px;
 }

 .collapse {
        padding-right: 5%;
    }
</style>
