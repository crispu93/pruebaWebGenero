<template>
  <div id="app">
    <header class="header">
      <Navbar />
    </header>
    <div id="main-container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    }
  }
  </script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}

body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: black ;
  background-color:  #9e9e9e;
}

#main-container {
  background-color:#d9d9d9;
  /*background: url(https://simplesmenteberlim.com/wp-content/themes/lifestyle/images/header-gray.png) no-repeat center;*/
  background-size: cover;
  min-height: 100vh;
  margin-top: 100px;
  padding: 5%;
}

.header {
  height: 40px;
  background-color: #fec8bd;
}

</style>