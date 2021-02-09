import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/inicio',
            name: 'inicio',
            component: () => { return import ('./views/About.vue') }
        },
        {
            path: '/form',
            name: 'form',
            component: () => { return import ('./views/Form.vue') }
        },
        {
            path: '/info',
            name: 'info',
            component: () => { return import ('./views/Info.vue') }
        }
    ]
})