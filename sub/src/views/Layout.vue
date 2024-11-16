<template>
    <div>
        <header>
            <div class="header-title">
                <span class="system-name">子应用</span>
            </div>
            <div>
                <div
                    ref="scroll"
                    class="menu-wrap"
                >
                    <ul
                        class="menu"
                        ref="menu"
                    >
                        <li
                            v-for="(item, index) in menu"
                            :key="index"
                            :class="{ active: item.active }"
                            @click="go(item)"
                        >
                            <span>{{ item.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({
    components: {
    }
})
export default class Layout extends Vue {
    menu: any = [
        {
            title: "一级菜单",
            name: "test",
            active: false,
        },
    ];
}
</script>

<style lang="scss" scoped>
$header-height: 80px;

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    padding: 0 24px;
    font-size: 16px;
    color: #fff;
    background: blue;
    // background-size: 100% 100%;
    box-shadow: 0px 3px 6px 0px rgba(5, 23, 73, 0.3);

    .header-title {
        display: flex;
        align-items: center;

        svg {
            width: 36px;
            height: 36px;
            margin-right: 18px;
        }

        .system-name {
            color: #fff;
            font-size: 26px;
            // letter-spacing: 2px;
            white-space: nowrap;
        }

        .qymc-wrap {
            line-height: normal;
        }
    }

    >div {
        display: flex;
    }

    .menu-wrap {
        position: relative;
        height: $header-height;
        line-height: $header-height;
        overflow-x: auto;
        overflow-y: hidden;

        ul {
            display: flex;
            height: 100%;
            margin-right: 16px;

            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0 10px;
                cursor: pointer;

                &.active {
                    position: relative;
                    background: #162954;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 50%;
                        bottom: 16px;
                        height: 4px;
                        border-radius: 4px;
                        background: #1890ff;
                        transform: translateX(-50%);
                        animation: expandLine 0.6s ease forwards;
                    }
                }
            }
        }
    }
}

main {
    height: calc(100vh - #{$header-height});
    overflow-y: auto;
    background: #F3F5FA;
}

@keyframes expandLine {
    from {
        width: 0;
    }

    to {
        width: calc(100% - 20px);
    }
}
</style>
