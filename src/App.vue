<template>
  <div id="app">
    <v-app>
      <v-content>
        <div class="text-center primary">
          <v-img :src="imgPath" contain height="150"/>
          <h1 class="display-2 font-weight-bold mb-4">
            Football Info
          </h1>
        </div>
        <router-view/>

      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Logo from './assets/logo.png'

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
