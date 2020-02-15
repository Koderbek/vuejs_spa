<template>
    <v-app>
      <v-content>
        <v-container>
          <div class="text-center">
            <v-img :src="imgPath" contain height="180"/>
            <h1 class="display-2 font-weight-bold mb-4">
              Football Info
            </h1>

            <h2 class="display-1 font-weight-bold mb-6">
              <span>Leagues</span>
            </h2>
          </div>
        </v-container>

        <Leagues/>

      </v-content>
    </v-app>
</template>

<script>
  import Leagues from './components/leagues.vue'
  import Logo from './assets/logo.png'

  export default {
    name: 'app',
    data() {
      return {
        imgPath: Logo
      };
    },
    components: {
      Leagues
    }
  }
</script>
