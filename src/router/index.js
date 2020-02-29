import Vue from 'vue'
import VueRouter from 'vue-router'
import leagues from "../components/leagues.vue";
import leagueTable from "../components/league-table.vue"
import games from "../components/games.vue"

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'leagues', component: leagues },
  { path: '/league-table/:id', name: 'table', component: leagueTable },
  { path: '/games/:id', name: 'gamesList', component: games }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
});

export default router
