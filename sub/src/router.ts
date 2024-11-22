import Vue from 'vue';
import Router, { RouteConfig, Route, NavigationGuardNext } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let prefix = '';
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    prefix = '/sub'; // 为主应用的activeRule
}

Vue.use(Router);

const routes: RouteConfig[] = [];

// 需要在主工程中展示的路由
const subRoutes: RouteConfig[] = [
    {
        path: '/test1',
        name: 'test1',
        component: () => import('./views/test/test1.vue'),
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('./views/test/test2.vue'),
    },
    {
        path: '/test3',
        name: 'test3',
        component: () => import('./views/test/test3.vue'),
    },
];

// 为乾坤主程序添加路由，不含顶部和左侧菜单
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    routes.push(
        ...subRoutes.map((item) => {
            return {
                ...item,
                path: prefix + item.path,
            };
        })
    );
}

const router = new Router({
    routes,
});

export default router;
