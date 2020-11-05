import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('./App.vue')
        },
        {
            path: '/producto',
            name: 'producto',
            component: () => import('./components/producto/Producto.vue')
        }
    ]
})


