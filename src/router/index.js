import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth/Login'
import Register from '@components/Auth/Register'
import Home from '@/components/Home/Home'
import Navbar from '@/components/Base/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
