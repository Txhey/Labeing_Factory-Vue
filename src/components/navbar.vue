<template>
<div class="navbar">
    <div class="logo" >
        <img src="../assets/images/menke.png" alt="Logo"  class="logo-img" style="background-color: #EFF1F6;" />
        <img src="../assets/images/sanqian.png" alt="Logo"  class="logo-img" style="background-color: #EFF1F6;"/>
        <!-- <span>门客三千</span> -->
    </div>
    <div class="left-menu">
      <el-menu
        router :default-active="route.path"
        class="el-menu-horizontal-demo"
        @open="handleOpen"
        @close="handleClose"
        mode="horizontal"
        :ellipsis="false"
        style="background-color: #EFF1F6;"
        :router="true"
    
      >
        <el-menu-item index="/index1">
          <el-icon><icon-menu /></el-icon>
          <span>使用指导</span>
        </el-menu-item>
        <el-menu-item index="/join">
            <el-icon><TopRight /></el-icon>
          <span>联系我们</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>我的项目</span>
          </template>
            <el-menu-item index="/home">项目配置</el-menu-item>
            <el-menu-item index="/xx">项目详情</el-menu-item>
        </el-sub-menu>
      </el-menu>
 

    </div>

    <div class="right-menu">
        <div style="display: flex;  height: 100%; background-color: #EFF1F6;align-items: center;">
            <img class="language"
            src="../assets/images/chinese.png"
            style="background-color: #EFF1F6;"
            >
        </div>
      <div class="feedback">
        <el-icon><Edit /></el-icon>
        <span>意见反馈</span>
      </div>
      <div class="feedback">
        <el-icon><Setting /></el-icon>
        <span>一键定制</span>
      </div>
      <div class="feedback">
        <el-icon><User /></el-icon>
        <span>欢迎</span>
      </div>
      
    </div>

    
   
</div>
</template>
<script lang="ts" setup>
import{useRoute,userRouter} from "vue-router"

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const route = useRoute()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped lang="less">
.logo-img {
    display: inline-block;
    vertical-align: middle; /* 使图片垂直居中对齐 */
}
.left-menu{
    margin-left: 90px;
}
.navbar{
    height: 100%;
    color:#4f5669;
    font-family: RobotoRegular;
    line-height: 17px;
    // flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  
}


.feedback{
    gap: 6px;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
    white-space: nowrap; /* 防止子元素换行 */
    flex-wrap: nowrap; /* 防止子元素换行 */
    background-color: #EFF1F6
}
.right-menu{
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: auto;
    background-color: white;
}
.language{
    background-color: #EFF1F6;
    height: 32px;
    width: 32px;
    cursor: pointer;
    margin-right: 8px;

}


.logo {
  display: flex;
  align-items: center;
  background-color: white;
}

.logo img {
  height: 50px;

}
.el-menu-horizontal-demo {
  display: flex;
  align-items: center;
  background-color: white;
}

.el-menu-item {
  padding: 0 15px;
}
</style>
