<template>
    <div id="page-error">
        <div class="content">
            <p>抱歉，您访问的页面不存在, 请检查您输入的网址是否正确</p>
            <div @click="$router.push('/main')">返回首页</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class NotFound extends Vue {
}
</script>

<style lang="scss" scoped>
#page-error {
    position: relative;
    height: 100vh;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        p {
            margin: 64px 0 32px;
            color: #373a3b;
            font-size: 16px;
        }

        div {
            margin: 0 auto;
            width: 144px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background: #75848f;
            border-radius: 4px;
            cursor: pointer;
        }
    }
}
</style>
