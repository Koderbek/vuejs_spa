import Vue from 'vue'
import VueRouter from 'vue-router'
import leagues from "../components/leagues.vue";
import teams from "../components/teams.vue";
import leagueTable from "../components/league-table.vue"

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'leagues', component: leagues },
  { path: '/teams/:id', name: 'teamsList', component: teams, props: true },
  { path: '/league-table/:id', name: 'table', component: leagueTable, props: true }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
});

export default router
