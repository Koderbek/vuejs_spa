import Vue from 'vue'
import VueRouter from 'vue-router'
import leagues from "../components/leagues.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'leagues',
    component: leagues,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
