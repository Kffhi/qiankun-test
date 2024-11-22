<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="test5" name="test5"></el-tab-pane>
        <el-tab-pane label="test6" name="test6"></el-tab-pane>
    </el-tabs>
    <div class="tab-content" id="sub-container"></div>
</template>

<script lang="ts" setup>
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { loadMicroApp } from 'qiankun';

const activeName = ref('test');

const sub = {
    name: 'subapp1',
    entry: 'http://localhost:3738/#/sub/test1',
    container: '#sub-container',
};

const sub2 = {
    name: 'subapp2',
    entry: 'http://localhost:3738/#/sub/test2',
    container: '#sub-container',
};

let curApp = sub;

let curMicro: any = null;
const loaderApp = () => {
    // 手动再设置全局状态
    qiankunWindow.__POWERED_BY_QIANKUN__ = true;

    setTimeout(() => {
        // @ts-ignore
        curMicro = loadMicroApp(curApp);
        curMicro.name = curApp.name;
        curMicro.mountPromise.finally(() => {
            console.log('mountPromise');
        });
    });
};

onMounted(() => {
    loaderApp();
});

watch(
    () => activeName.value,
    (val) => {
        console.log(val);
        if (curMicro) {
            curMicro.unmount();
            curMicro.unmountPromise.then(() => {
                setTimeout(() => {
                    if (val === 'test5') {
                        curApp = sub;
                    } else {
                        curApp = sub2;
                    }
                    loaderApp();
                });
            });
        }
    }
);
</script>

<style lang="scss" scoped>
.tab-content {
    width: 500px;
    height: 300px;
    border: 1px solid red;
}
</style>
