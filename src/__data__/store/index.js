import Vue from 'vue';
import Vuex from 'vuex';
import getLeagues from '../actions/get-leagues.js'
import getGames from '../actions/get-search-games.js'

const leaguesJson = require('../mock_leagues.json');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        leagues: leaguesJson,
        games: null
    },
    getters: {
        getLeagues: (state) => state.leagues,
        getGames: (state) => state.games
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items;
        }
    },
    actions: {
        searchLeagues ({ commit }, query) {
            getLeagues(query).then(result => {
                commit('set', { type: 'leagues', items: result.data.api.leagues})
            });
        },
        searchGames ({ commit }, params) {
            getGames(params.leagueId, params.searchParams).then(result => {
                commit('set', { type: 'games', items: result.data.api.fixtures})
            });
        }
    }
});

export default store