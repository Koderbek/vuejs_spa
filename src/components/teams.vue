<template>
    <v-container>
        <h2 class="text-center display-1 font-weight-bold mb-2">
            <span>Teams</span>
        </h2>

        <div v-if="loading" class="text-center">Loading...</div>

        <v-row v-for="team in teams" :key="team.team_id" class="text-center">
            <v-col>
                <v-card class="mx-auto grey" width="344" outlined>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">
                                {{ team.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="blue">
                            <v-img :src="team.logo" contain height="50"/>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import getTeams from '../__data__/actions/get-team.js';

    export default {
        name: 'Teams',
        data() {
            return {
                teams: [],
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
