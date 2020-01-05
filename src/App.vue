<template>
  <div id="app">
    <Header />
    <div class="flex space-between" style="margin-top: 75px;">
    <!-- <Nav /> -->

    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    </div>

    <footer>
      <p>&copy; empathy divisions 2019. self-automate own risk. abuses of automated consciousness expansion will be logged and offenders
  may be subject to disciplinary action</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Header,
    Nav
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* position: relative; */
  /* margin-top: 60px; */
}
</style>
