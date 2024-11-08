<template>
  <div class="agent">
    <el-card class="card">
      <div class="avatar-div">
        <el-avatar :src="robotSrc"/>
      </div>
      <div class="name">
        <span>添加{{type}}</span>
      </div>
      <div class="button-box">
        <el-button class="button" :icon="Plus" @click="handleAddAgent"/>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {ref, defineProps, inject, computed} from 'vue'
import {Plus} from '@element-plus/icons-vue'

const props = defineProps({
  type: String,
})

// 使用 defineEmits 定义事件
const emit = defineEmits(['addAgent']);
// 定义删除函数
const handleAddAgent = () => {
  emit('addAgent');
};

import robot1 from '@/assets/images/robot.png'
import robot2 from '@/assets/images/robot2.png'
import robot3 from '@/assets/images/robot3.png'
import SvgIcon from "../assets/SvgIcon.vue";


// 根据传入的 type 值动态生成图片的 src
const robotSrc = computed(() => {
  switch (props.type) {
    case '清洗机器人':
      return robot1;
    case '标注机器人':
      return robot2;
    case '审查机器人':
      return robot3;
    default:
      return robot1;
  }
});

</script>

<style lang="scss" scoped>
.agent {
  width: 200px;
  min-width: 200px;
  height: 240px;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.tools {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    color: #4f5669;
  }

  .delete {
    width: 20px;
    height: 20px;
  }
}

.avatar-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
}

.name {
  width: 100%;
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  span {
    width: 80px;
    font-size: 0.9rem;
    color: #5a5656;
  }
}

.button-box {
  width: 100%;
  height: 100%;
  margin-top: 15px;
}

.button {
  width: 100px;
  height: 100px;
}
</style>