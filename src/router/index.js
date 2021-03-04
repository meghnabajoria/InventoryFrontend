import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from '@/pages/admin.vue'
import employee from '@/pages/employee.vue'
import manageOrder from '@/pages/manageOrder.vue'
import manageInventory from '@/pages/manageInventory.vue'
import manageEmployee from '@/pages/manageEmployee.vue'
import viewInventory from '@/pages/viewInventory.vue'
import register from '@/pages/register.vue'
import homePage from '@/pages/homePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '',
    mane: '/login-as',
    component: homePage
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authenticated == false) {
    //     next(false)
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/employee',
    name: 'employee',
    component: employee
  },
  {
    path: '/manage-order',
    name: 'manageOrder',
    component: manageOrder
  },
  {
    path: '/manage-inventory',
    name: 'manageInventory',
    component: manageInventory
  },
  {
    path: '/manage-employee',
    name: 'manageEmployee',
    component: manageEmployee
  },
  {
    path: '/view-inventory',
    name: 'viewInventory',
    component: viewInventory
  },
  {
    path: '*',
    name: ''
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
