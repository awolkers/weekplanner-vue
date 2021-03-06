import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Settings from './views/Settings'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
