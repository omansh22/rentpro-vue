import Router from 'vue-router'
import Home from '@/components/home';
import Listing from '@/components/list';
import Login from '@/components/login';
import Signup from '@/components/signup'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'list',
            path: '/list',
            component: Listing
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'signup',
            path: '/signup',
            component: Signup
        }


    ]
})

export default router