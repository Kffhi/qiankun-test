<template>
    <div class="main-layout">
        <header>
            <div class="header-left">
                <span>主应用</span>
            </div>
            <div class="header-right">
                <div class="menu-wrap">
                    <ul class="menu">
                        <li
                            v-for="(item, index) in menu"
                            :key="index"
                            :class="{ active: item.path == activeName }"
                            @click="selectMenu(item.path)"
                        >
                            <span>{{ item.label }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

interface MenuItem {
    label: string;
    path: string;
    icon: string;
}

const menu: MenuItem[] = [
    {
        label: '主页面1',
        path: '/test',
        icon: 'xxx',
    },
    {
        label: '主页面2',
        path: '/test2',
        icon: 'xxx',
    },
    {
        label: '子页面',
        path: '/test3',
        icon: 'xxx',
    },
];

const activeName = ref('');
function selectMenu(path: string) {
    activeName.value = path;
    router.push({
        path
    });
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>
