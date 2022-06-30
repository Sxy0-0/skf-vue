import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import index from '../components/index.vue';
import HelloWorld from '../components/HelloWorld.vue'
import Layout from '../layout/index.vue'



const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path : '/',
        component: Layout,
        children: [
            {
              path: 'index',
              component: () => import('../components/index.vue')
            },
            {
              path: 'hello',
              component: () => import('../components/HelloWorld.vue')
            },
            {
              path: 'learn',
              component: () => import('../components/Learn.vue')
            },
          ]
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory(),
})

export default router;