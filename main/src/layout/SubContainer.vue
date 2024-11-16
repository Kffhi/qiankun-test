<!-- 微服务子应用挂载容器 -->
<template>
    <div id="sub-app"></div>
</template>

<script lang="ts" setup>
import { injectMicroApps } from '../qiankun';

onMounted(() => {
    injectMicroApps();
});
</script>

<style lang="scss" scoped>
#sub-app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
