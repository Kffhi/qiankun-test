import Vue from "vue";
import Router, { RouteConfig, Route, NavigationGuardNext } from "vue-router";

Vue.use(Router);

const routes: RouteConfig[] = [];

// 需要在主工程中展示的路由
const subRoutes: RouteConfig[] = [
    {
        path: "test1",
        name: "test1",
        component: () => import("./views/test/test1.vue"),
    },
    {
        path: "test2",
        name: "test2",
        component: () => import("./views/test/test2.vue"),
    },
];

// 仅单独运行时的路由
const elseRoutes: RouteConfig[] = [
    {
        path: "",
        redirect: "/main",
    },
    {
        path: "/main",
        name: "main",
        component: () => import("./views/Layout.vue"),
        redirect: "/manage",
        children: [
            {
                path: "/manage",
                name: "manage",
                component: () => import("./views/test/Index.vue"),
                redirect: "/manage/test3",
                children: [
                    {
                        path: "test3",
                        name: "test3",
                        component: () => import("./views/test/test3.vue"),
                    },
                    {
                        path: "test4",
                        name: "test4",
                        component: () => import("./views/test/test4.vue"),
                    },
                ]
            },
        ],
    },
    {
        path: "*",
        name: "notFound",
        component: () => import("./views/error/NotFound.vue"),
    },
]

// 为乾坤主程序添加路由，不含顶部和左侧菜单
if (window.__POWERED_BY_QIANKUN__) {
    routes.push(...subRoutes.map(item => {
        return {
            ...item,
            path: '/sub/' + item.path,
        }
    }))
} else {
    const match = elseRoutes.find(item => item.name == 'main');
    match?.children?.push(
        {
            path: "/sub",
            name: "sub",
            component: () => import("./views/test/Index.vue"),
            redirect: { name: "ywdw" },
            children: subRoutes
        }
    )
    routes.push(...elseRoutes);
}

const router = new Router({
    routes
});

export default router;
