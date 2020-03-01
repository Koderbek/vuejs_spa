<template>
    <v-container>
        <h2 class="text-center display-1">Games</h2>
        <div v-if="loadingLastGames && loadingNextGames" class="text-center">Loading...</div>

        <v-row>
            <v-col class="text-left">
                <v-btn :to="{name: 'leagues'}" color="grey lighten-3" small>
                    <v-icon left>mdi-arrow-left</v-icon>
                    to leagues
                </v-btn>
            </v-col>
            <v-col class="text-center">
                <v-text-field
                        v-model="date"
                        label="Date"
                        placeholder="YYYY-MM-DD"
                        @keyup="setSearchDate"
                        :rules="dateRules"
                        dense
                        hide-details
                ></v-text-field>
            </v-col>
            <v-col class="text-right">
                <v-btn :to="{name: 'table'}" color="grey lighten-1" small>
                    to standings
                    <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-card v-if="searchGames" class="black-border" outlined>
            <h3 class="text-center">Found games</h3>
            <v-row v-for="game in searchGames" :key="game.fixture_id" class="text-center">
                <v-col>{{ game.event_date | timestampToString }}</v-col>
                <v-col>
                    {{ game.homeTeam.team_name }}
                    <img :src="game.homeTeam.logo" align="right" height="30"/>
                </v-col>
                <v-col><h3>{{ game.goalsHomeTeam || 0 }} : {{ game.goalsAwayTeam || 0 }}</h3></v-col>
                <v-col>
                    <img :src="game.awayTeam.logo" align="left" height="30"/>
                    {{ game.awayTeam.team_name }}
                </v-col>
            </v-row>
        </v-card>

        <v-row>
            <v-col>
                <v-card class="black-border" outlined>
                    <h3 class="text-center">Last games</h3>
                    <v-row v-for="game in lastGames" :key="game.fixture_id" class="text-center">
                        <v-col>{{ game.event_date | timestampToString }}</v-col>
                        <v-col>
                            {{ game.homeTeam.team_name }}
                            <img :src="game.homeTeam.logo" align="right" height="30"/>
                        </v-col>
                        <v-col><h3>{{ game.goalsHomeTeam || 0 }} : {{ game.goalsAwayTeam || 0 }}</h3></v-col>
                        <v-col>
                            <img :src="game.awayTeam.logo" align="left" height="30"/>
                            {{ game.awayTeam.team_name }}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="black-border" outlined>
                    <h3 class="text-center">Next games</h3>
                    <v-row v-for="game in nextGames" :key="game.fixture_id" class="text-center">
                        <v-col>{{ game.event_date | timestampToString }}</v-col>
                        <v-col>
                            {{ game.homeTeam.team_name }}
                            <img :src="game.homeTeam.logo" align="right" height="30"/>
                        </v-col>
                        <v-col><h3>{{ game.goalsHomeTeam || '-' }} : {{ game.goalsAwayTeam || '-' }}</h3></v-col>
                        <v-col>
                            <img :src="game.awayTeam.logo" align="left" height="30"/>
                            {{ game.awayTeam.team_name }}
                        </v-col>
                        <v-col lg="2">
                            <v-btn color="indigo" icon disabled small>
                                <v-icon>mdi-checkbox-marked-circle</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import getGames from '../__data__/actions/get-games.js';
    import getSearchGames from "../__data__/actions/get-search-games.js";

    export default {
        name: 'Games',
        data() {
            return {
                lastGames: null,
                nextGames: null,
                searchGames: null,
                loadingLastGames: true,
                loadingNextGames: true,
                leagueId: this.$route.params.id,
                searchResult: null,
                dateRules: [
                    v => /(\d{4}-\d{1,2}-\d{1,2})/i.test(v) || 'Not valid date format',
                    v => v.length <= 10 || 'Date must be less than 10 characters'
                ]
            };
        },
        created: function () {
            getGames(this.leagueId)
                .then((res) => this.lastGames = res)
                .finally(() => (this.loadingLastGames = false));

            getGames(this.leagueId, 'next')
                .then((res) => this.nextGames = res)
                .finally(() => (this.loadingNextGames = false));
        },
        filters: {
            timestampToString: (timestamp) => {
                let date = new Date(timestamp);
                return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
            }
        },
        methods: {
            setSearchDate: function(event) {
                this.searchParams = event.target.value;
                if (event.keyCode === 13 && this.searchParams) {
                    getSearchGames(this.leagueId, this.searchParams)
                        .then((res) => {
                            if (res && res !== []) {
                                this.searchGames = res;
                            } else {
                                this.searchResult = 'По запросу "' + this.searchParams + '" ничего не найдено!';
                            }
                        });
                }
            }
        }
    };
</script>

<style>
    .black-border
    {
        border-color: rgb(0, 0, 0) !important;
    }
</style>
