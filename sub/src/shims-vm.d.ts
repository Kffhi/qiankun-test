import Vue from 'vue';
import { AxiosStatic } from "axios";

declare global {
    interface Window {
        __POWERED_BY_QIANKUN__: boolean | undefined;
        __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string | undefined;
    }
    const __webpack_public_path__: string;
}