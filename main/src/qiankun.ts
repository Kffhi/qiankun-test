import { registerMicroApps, start } from 'qiankun';
import router from './router';

const subApps = [
    {
        name: 'sub', // name 需要唯一
        entry: process.env.SUB_ENTRY as string, // 入口地址
        container: '#sub-app', // 表示承载为应用的容器的id
        activeRule: '/#/sub', // 匹配的路由
        props: {
            router,
        },
    },
];

export function injectMicroApps() {
    if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        try {
            registerMicroApps(subApps, {
                beforeLoad: [
                    // @ts-ignore
                    (app) => {
                        console.log('before load', app);
                    },
                ],
                beforeMount: [
                    // @ts-ignore
                    (app) => {
                        console.log('before mount', app);
                    },
                ],
                afterUnmount: [
                    // @ts-ignore
                    (app) => {
                        console.log('before unmount', app);
                    },
                ],
            });
            start({
                // prefetch: 'all',
                sandbox: {
                    strictStyleIsolation: false,   // 开启严格的样式隔离模式
                    experimentalStyleIsolation: true, // 样式隔离
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
}
