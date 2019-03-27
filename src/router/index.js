import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login'
import Layout from '@/pages/layout/layout'

Vue.use(Router)

export const constantRouterMap = [{
        path: '/login',
        name: 'login',
        hidden: true,
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        hidden: true,
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/pages/home'),
            meta: {
                title: '首页'
            }
        }]
    }
]

export default new Router({
    routes: constantRouterMap
})