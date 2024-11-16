if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ as string;
}

import Vue from 'vue'
import render from "./qiankun";

import ViewUI, { LoadingBar, Message } from "view-design";
import 'view-design/dist/styles/iview.css';
import '@/styles/main.scss';

Vue.use(ViewUI, {
    transfer: false,
    capture: false,
    modal: {
        maskClosable: false
    }
});

Vue.config.productionTip = false;

// 导出所有的钩子
export * from "./qiankun";
if (!window.__POWERED_BY_QIANKUN__) {
    // 独立运行时
   render();
}