import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 初始的document.body.appendChild事件
const originFn = document.body.appendChild.bind(document.body);

let instance: any = null;
export function render({ container }: any = {}) {
    console.log('sub-app');
    redirectPopup(container);
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector("#sub-app") : "#sub-app");
}

// 避免子应用中Message等组件样式丢失
function redirectPopup(container: any) {
    // 子应用中需要挂载到子应用的弹窗className。样式class白名单，用子应用的样式。
    const whiteList = ['v-transfer-dom', 'ivu-message', 'ivu-tooltip-popper'];

    // 保存原有document.body.appendChild方法
    const originFn = document.body.appendChild.bind(document.body);

    // 重写appendChild方法
    document.body.appendChild = (dom: any) => {
      // 根据标记，来区分是否用新的挂载方式
        let count = 0;
        whiteList.forEach((x) => {
            if (dom.className.includes(x)) {
                count++;
            }
        })
        if (count > 0 && container) {
            // 有弹出框的时候，挂载的元素挂载到子应用上，而不是主应用的body上
            container.appendChild(dom);
        } else {
            originFn(dom);
        }
        return dom
    }
}

export async function bootstrap(props: any) {
    console.log("[vue] vue app bootstraped", props);
}
export async function mount(props: any, ...args: any) {
    console.log("[vue] props from main framework", props, args);
    setData(props);
    props.onGlobalStateChange((state: any, prev: any) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log("🚀props.onGlobalStateChange", state);
        setData(state);
    });
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
    document.body.appendChild = originFn
}
export async function update() {
}
// 拿到主应用传过来的数据进行处理
function setData(state: any) {
    const { router, userInfo, token } = state;
}
export default render;
