<template>
    <v-container>
        <h2 class="text-center display-1 mb-6">Leagues</h2>

        <v-row class="text-center" no-gutters>
            <v-col class="text-center">
                <v-text-field style="max-width: 300px" @keyup="setSearchVal" label="Country" placeholder="Enter country" type="text" outlined></v-text-field>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col md="3" v-for="league in leagues" :key="league.league_id">
                <v-card class="mx-auto league-card" width="300" outlined>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="league-card__headline">
                                {{ league.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{ league.country }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="grey lighten-3">
                            <v-img :src="league.logo || league.flag" contain height="50"/>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn :to="{name: 'gamesList', params: {id: league.league_id}}" text>Games</v-btn>
                        <v-btn :to="{name: 'table', params: {id: league.league_id}}" text>Standings</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import getLeagues from '../__data__/actions/get-leagues.js';

    const leaguesJson = require('../__data__/mock_leagues.json');

    export default {
        name: 'Leagues',
        data() {
            return {
                leagues: leaguesJson,
                searchParams: String
            };
        },
        methods: {
            setSearchVal: function(event) {
                this.searchParams = event.target.value;
                if (event.keyCode === 13) {
                    getLeagues(this.searchParams.toLowerCase())
                        .then((res) => this.leagues = res);
                }
            }
        }
    };
</script>

<style>

    @import url('https://fonts.googleapis.com/css?family=Saira&display=swap');

    .league-card
    {
        border-color: rgb(0, 0, 0) !important;
    }

    .league-card__headline
    {
        font-family: 'Saira', sans-serif !important;
    }
</style>


