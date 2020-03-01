import Vue from 'vue';
import Vuex from 'vuex';
import getLeagues from '../actions/get-leagues.js'

const leaguesJson = require('../mock_leagues.json');

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        leagues: leaguesJson
    },
    getters: {
        getLeagues: (state) => state.leagues
    },
    mutations: {
        set(state, { type, items }) {
            state[type] = items;
        }
    },
    actions: {
        searchLeagues ({ commit }, query) {
            getLeagues(query).then(result => {
                commit('set', { type: 'leagues', items: result})
            });
        }
    }
});

export default store