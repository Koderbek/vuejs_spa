<template>
    <v-container>
        <h2 class="text-center display-1 mb-6">Leagues</h2>

        <v-row class="text-center">
            <v-col md="3" v-for="league in leagues" :key="league.league_id">
                <v-card class="mx-auto league-card" width="344" outlined>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="league-card__headline">
                                {{ league.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{ league.country }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="grey lighten-3">
                            <v-img :src="league.logo" contain height="50"/>
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
    const leaguesJson = require('../__data__/mock_leagues.json');

    export default {
        name: 'Leagues',
        data() {
            return {
                leagues: leaguesJson,
            };
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


