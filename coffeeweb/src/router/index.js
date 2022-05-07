import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Location from '@/components/Location'

Vue.use(Router)
Vue.use(VueRouter)

const routes = [{

        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/Location',
        name: 'Location',
        component: Location
    },

    {
        path: '/Reserve',
        name: 'Signup',
        component: () =>
            import ('../components/Reserve')
    },
    {
        path: '/view',
        name: 'view',
        component: () =>
            import ('../components/List')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () =>
            import ('../components/Edit')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router