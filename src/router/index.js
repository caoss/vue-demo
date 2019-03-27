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
    },
    {
        path: '/test',
        hidden: true,
        component: Layout,
        children: [{
            path: 'test1',
            name: 'test1',
            component: () => import('@/pages/test'),
            meta: {
                title: 'test1'
            }
        },{
            path: 'test2',
            name: 'test2',
            component: () => import('@/pages/test2'),
            meta: {
                title: 'test2'
            }
        }]
    }
]

export default new Router({
    routes: constantRouterMap
})