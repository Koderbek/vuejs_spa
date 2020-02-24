<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container class="primary">
          <div class="text-center">
            <v-img :src="imgPath" contain height="180"/>
            <h1 class="display-2 font-weight-bold mb-4">
              Football Info
            </h1>
          </div>
        </v-container>

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
