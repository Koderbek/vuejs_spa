<template>
    <v-container>
        <h2 class="text-center display-1 font-weight-bold mb-2">
            <span>Players</span>
        </h2>

        <div v-if="loading" class="text-center">Loading...</div>

    </v-container>
</template>

<script>
    import getPlayers from '../__data__/actions/get-players.js';

    export default {
        name: 'Teams',
        data() {
            return {
                players: null,
                loading: true,
            };
        },
        created: function () {
            getPlayers(this.$route.params.team)
                .then((res) => this.players = res)
                .finally(() => (this.loading = false));
        }
    };
</script>
