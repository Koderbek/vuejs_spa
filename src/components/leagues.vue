<template>
  <v-container>
<!--    <div v-if="loading" class="text-center">Loading...</div>-->

    <v-row v-for="item in items" :key="item.league_id" class="text-center">
      <v-col v-if="item.logo" class="mb-4">
        <v-img :src="item.logo" contain height="50"/>
        <h3>{{ item.name }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    // import axios from 'axios'
    //
    // const personalApiKey = '4e436d1c54msh19af8e3baaddd90p189f54jsnf74b7880f274';
    // const url = 'https://api-football-v1.p.rapidapi.com/v2/leagues/current/england';

    //Временная заглушка, чтобы не тратить огранниченное кол-во запросов к серверу (100 запросов/день)
    const leaguesJson = require('../assets/mock_data.json');

    export default {
        name: 'Leagues',
        data() {
            return {
                items: leaguesJson,
                // items: [],
                // errored: false,
                // loading: true,
            };
        },
        // mounted: function () {
        //   axios.get(url,
        //           {
        //             responseType: 'json',
        //             headers: {'X-RapidAPI-Key': personalApiKey},
        //             validateStatus: function (status) {
        //               return status === 200;
        //             }
        //           })
        //           .then(response => {
        //             this.items = response.data.api.leagues;
        //           })
        //           .catch(error => {
        //             // eslint-disable-next-line no-console
        //             console.log(error);
        //             this.errored = true;
        //           })
        //           .finally(() => (this.loading = false));
        // }
    };
</script>
