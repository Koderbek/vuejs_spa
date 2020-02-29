<template>
  <div id="app">
    <v-app>
      <v-content>
        <header class="mt-3">
            <div id="main-title" class="pl-11 pr-3">
              <h1 class="d-inline-block">Football Info</h1>
              <v-img max-width="150" max-height="150" class = "ml-3 d-inline-block" :src="imgPath"/>
            </div>
        </header>

        <hr>

        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Logo from './assets/soccer.png'

  export default {
    name: 'app',
    data() {
      return {
        imgPath: Logo
      };
    },
    components: {},
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Trade+Winds&display=swap');
  header {
    height: 150px;
    text-align: center;
    margin-bottom: 30px;
  }

  #main-title h1 {
    font-family: 'Trade Winds', sans-serif !important;
    font-size: 3rem;
    line-height: 6rem;
    top: -50px;
    position: relative;
  }
</style>