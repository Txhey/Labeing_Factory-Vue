<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 自定义上方组件 -->
      <el-header>
        <navbar/>
      </el-header>

      <el-mian calss="main">
        <router-view/>
      </el-mian>

    </el-container>
  </div>
</template>
<script setup>
import navbar from '@/components/navbar.vue';
</script>
<style scoped lang="less">
.common-layout, .lay-container, .main {
  height: 100%;
}

.el-header {
  padding: 0 46px 0 64px;
  height: 60px;
  background-color: #EFF1F6;
  line-height: 17px;
  border-bottom: 1px solid #ccc; /* 添加细线 */
}
</style>
