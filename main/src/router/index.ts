import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            meta: {
                noAuth: true,
            },
            redirect: { name: 'main' },
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../layout/Index.vue'),
            redirect: { name: 'test' },
            children: [{
                path: '/test',
                name: 'test',
                component: () => import('../views/Test.vue'),
            }, {
                path: '/test2',
                name: 'test2',
                component: () => import('../views/Test2.vue'),
            }, {
                path: '/test3',
                name: 'test3',
                component: () => import('../views/Test3.vue'),
                redirect: '/sub/test1',
                children: [{
                    path: '/sub/:pathMatch(.*)*',
                    component: () => import('@/layout/SubContainer.vue'),
                }]
            }]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/main',
        },

    ],
});

export default router
