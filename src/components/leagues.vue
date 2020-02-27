<template>
    <v-container class = "mt-10">
        <h2 class="text-center display-1 font-weight-bold mb-2">
            Leagues
        </h2>
        <v-row class="text-center">
            <v-col :cols="3" md="3" v-for="league in leagues" :key="league.id">
                <v-card class="mx-auto league-card" width="344" outlined>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline league-card__headline mb-1">
                                {{ league.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="grey lighten-3">
                            <v-img :src="league.logo" contain height="50"/>
                        </v-list-item-avatar>
                    </v-list-item>
                    <v-card-actions>
                        <v-btn  color="orange" text>
                            <router-link :to="{name: 'teamsList', params: {id: league.id}}">Teams</router-link>
                        </v-btn>
                        <v-btn  color="orange darken-3" text>
                            <router-link :to="{name: 'table', params: {id: league.id}}">League table</router-link>
                        </v-btn>

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

    h2 {
        font-family: 'Saira', sans-serif;
        font-weight: bold;
    }

    .league-card
    {
        border-color: rgb(239, 131, 24) !important;
    }

    .league-card .league-card__headline
    {
        font-family: 'Saira', sans-serif !important;
    }
</style>


