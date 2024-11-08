import { resolveDirective } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';

//制定路由规则

const routes = [
    {
        path:'/',
        // name:'main',
        component:()=>import('@/views/Main.vue'),
        redirect:'/home',
        children:[
            {
                path:'home',
                name:'home',
                component:()=>import('@/views/Home.vue'),
            },
            {
                path:'index1',
                name:'index1',
                component:()=>import('@/views/index1.vue'),
            },
            {
                path:'join',
                name:'join',
                component:()=>import('@/views/join.vue'),
            },
            {
                path:'xx',
                name:'xx',
                component:()=>import('@/views/xx.vue'),
            },
            {
                path:'factory',
                name:'factory',
                component:()=>import('@/views/factory.vue'),
            },
            {
                path:'factory2',
                name:'factory2',
                component:()=>import('@/views/Factory2.vue'),
            },
            {
                path:'loading',
                name:'loading',
                component:()=>import('@/views/loading.vue'),
            },

        ]
    },
];

const router = createRouter({
    //设置路由模式
    history : createWebHashHistory(),
    routes,

});

export default router