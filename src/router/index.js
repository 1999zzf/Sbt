import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component:()=>import( '../components/Login.vue')
  },
  {
    path:'/Inout',
    name:'Inout',
    component:()=>import('../components/Inout.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
