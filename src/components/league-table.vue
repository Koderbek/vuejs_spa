<template>
    <v-container>
        <h2 class="text-center display-1 font-weight-bold mb-2">
            <span>Standings</span>
        </h2>

        <div v-if="loading" class="text-center">Loading...</div>

        <v-card class="pa-2 theme--dark" outlined tile>
            <v-row class="text-center" no-gutters>
                <v-col>Rank</v-col>
                <v-col>Name</v-col>
                <v-col>Games</v-col>
                <v-col>Win</v-col>
                <v-col>Draw</v-col>
                <v-col>Lose</v-col>
                <v-col>Goals</v-col>
                <v-col>Points</v-col>
            </v-row>
        </v-card>

        <v-card class="pa-2" outlined tile>
            <v-row v-for="team in teams" :key="team.team_id" class="text-center" dense>
                <v-col>{{ team.rank }}</v-col>
                <v-col>
                    <v-img :src="team.logo" contain height="20"/>
                    <router-link :to="{name: 'teamPlayers', params: {team: team.team_id}}">
                        {{ team.teamName }}
                    </router-link>
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
            };
        },
        created: function () {
            getTeams(this.$route.params.id)
                .then((res) => this.teams = res)
                .finally(() => (this.loading = false));
        }
    };
</script>
