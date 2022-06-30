<template>
    <div class="common-layout">
        <el-container>
            <img src="../assets/images/logo.svg" alt="" class="layout_logo">
            <el-header class="header">
                <el-menu class="el-menu--horizontal" mode="horizontal" router :default-active="activeIndex">
                    <el-menu-item  index="/index">首页</el-menu-item>
                    <el-menu-item index="/hello">课程</el-menu-item>
                    <el-menu-item index="/learn">知识</el-menu-item>
                    <el-menu-item index="/hello">社区</el-menu-item>
                    <el-menu-item index="/hello">活动</el-menu-item>
                </el-menu>
            </el-header>
        </el-container>
    </div>
    <div id="main">
        <el-main>
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';

let activeIndex = ref("");
const route = useRoute();

onMounted(()=>{
    activeIndex.value = route.path;
})

</script>

<style scoped lang="less">
@import "../assets/styles/common.less";
</style>
