import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import User from './pages/User'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'profile',
        path: '/profile',
        component: Profile
      },
      {
        name: 'user',
        path: '/user/:id',
        component: User
      },
      {
        name: 'register',
        path: '/register',
        component: Register
      },
      {
        name: 'login',
        path: '/login',
        component: Login
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
