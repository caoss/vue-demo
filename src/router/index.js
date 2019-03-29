// import Vue from 'vue'
// import Router from 'vue-router'

// import Login from '@/pages/login'
// import Layout from '@/pages/layout/layout'

// Vue.use(Router)

// export const constantRouterMap = [{
//         path: '/login',
//         name: 'login',
//         hidden: true,
//         component: Login,
//         meta: {
//             title: '登录'
//         }
//     },
//     {
//         path: '/',
//         hidden: true,
//         component: Layout,
//         redirect: '/home',
//         children: [{
//             path: 'home',
//             name: 'home',
//             component: () => import('@/pages/home'),
//             meta: {
//                 title: '首页'
//             }
//         }]
//     },
//     {
//         path: '/test',
//         hidden: true,
//         component: Layout,
//         children: [{
//             path: 'test1',
//             name: 'test1',
//             component: () => import('@/pages/test'),
//             meta: {
//                 title: 'test1'
//             }
//         },{
//             path: 'test2',
//             name: 'test2',
//             component: () => import('@/pages/test2'),
//             meta: {
//                 title: 'test2'
//             }
//         }]
//     }
// ]

// export default new Router({
//     routes: constantRouterMap
// })






import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login'
import Layout from '@/pages/layout/layout'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

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
        path: '/test',
        component: Layout,
        redirect: '/test/test1',
        meta: { //控制在左栏显示
            icon: 'question',
            title: '测试一'
        },
        children: [{
            path: 'test1',
            name: 'Introduction',
            component: () => import('@/pages/test/index'),
            meta: {
                icon: 'warning',
                title: '测试一'
            }
        }]
    },
    {
        path: '/introduction',
        component: Layout,
        redirect: '/introduction/index',
        meta: { //控制在左栏显示
            icon: 'question',
            title: '简述'
        },
        children: [{
            path: 'index',
            name: 'Introduction',
            component: () => import('@/pages/test2/index'),
            meta: {
                icon: 'warning',
                title: '简述'
            }
        }]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        hidden: true,
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/pages/home'),
            meta: {
                title: '首页'
            }
        }]
    },

]

export default new Router({
    // mode: 'history',  require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

export const asyncRouterMap = [

]