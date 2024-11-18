<template>
    <el-tabs
        v-model="activeName"
    >
        <el-tab-pane
            label="test5"
            name="test5"
        ></el-tab-pane>
        <el-tab-pane
            label="test6"
            name="test6"
        ></el-tab-pane>
    </el-tabs>
    <div class="tab-content">
        <!-- todo -->
    </div>
</template>

<script lang="ts" setup>
const activeName = ref('test5');

watch(
    () => activeName.value,
    (val) => {
        console.log(val);
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
