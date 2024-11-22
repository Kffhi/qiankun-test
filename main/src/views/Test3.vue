<template>
    <div class="page">
        <el-menu @select="select">
            <el-menu-item index="test1">子页面1</el-menu-item>
            <el-menu-item index="test2">子页面2</el-menu-item>
        </el-menu>
        <div class="router-content">
            这里还是主页面3
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()

function select(path: any) {
    router.push({
        path
    })
}
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    height: 100%;
    display: flex;

    .router-content {
        width: calc(100% - 91px);
        height: 100%;
    }
}
</style>