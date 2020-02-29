<template>
    <v-container>
        <h2 class="text-center display-1">Standings</h2>
        <div v-if="loading" class="text-center">Loading...</div>

        <v-row>
            <v-col class="text-left">
                <v-btn :to="{name: 'leagues'}" color="grey lighten-3" small>
                    <v-icon left>mdi-arrow-left</v-icon>
                    to leagues
                </v-btn>
            </v-col>
            <v-col class="text-right">
                <v-btn :to="{name: 'gamesList'}" color="grey lighten-1" small>
                    to games
                    <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-card class="pa-2 theme--dark" outlined tile>
            <v-row class="text-center" no-gutters>
                <v-col>Date</v-col>
                <v-col>Home</v-col>
                <v-col>Games</v-col>
                <v-col>Win</v-col>
                <v-col>Draw</v-col>
                <v-col>Lose</v-col>
                <v-col>Goals</v-col>
                <v-col>Points</v-col>
            </v-row>
        </v-card>

        <v-card class="pa-2">
            <v-row v-for="team in teams" :key="team.team_id" class="text-center elevation-1" dense>
                <v-col>{{ team.rank }}</v-col>
                <v-col>
                    <img :src="team.logo" align="absmiddle" height="20"/>
                    {{ team.teamName }}
                </v-col>
                <v-col>{{ team.all.matchsPlayed }}</v-col>
                <v-col>{{ team.all.win }}</v-col>
                <v-col>{{ team.all.draw }}</v-col>
                <v-col>{{ team.all.lose }}</v-col>
                <v-col>{{ team.goalsDiff }}</v-col>
                <v-col>{{ team.points }}</v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    import getTeams from '../__data__/actions/get-league-table.js';

    export default {
        name: 'LeagueTable',
        data() {
            return {
                teams: null,
                loading: true,
                leagueId: this.$route.params.id
            };
        },
        created: function () {
            getTeams(this.leagueId)
                .then((res) => this.teams = res)
                .finally(() => (this.loading = false));
        }
    };
</script>
