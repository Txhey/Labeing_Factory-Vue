<template>
    <div v-if="isBuilding" class="overlay">
      <div class="content">
        <el-progress
          :percentage="progress"
          type="circle"
          :stroke-width="10"
          :width="150"
          :color="progressColor"
        />
        <p>{{ currentMessage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    messages: {
      type: Array,
      default: () => [
        '正在构建标注机器人7号的脑干...',
        '为标注星球铺设光缆...',
        '生成地形...',
        '散布生物...',
        '配置环境...'
      ]
    }
  });
  
  const router = useRouter();
  const progress = ref(0);
  const currentMessage = ref('');
  const isBuilding = ref(true);
  
  // 根据进度计算彩色渐变
  const progressColor = computed(() => {
    if (progress.value < 25) {
      return '#ff0000'; // 红色
    } else if (progress.value < 50) {
      return '#ff9900'; // 橙色
    } else if (progress.value < 75) {
      return '#ffff00'; // 黄色
    } else {
      return '#33cc33'; // 绿色
    }
  });
  
  onMounted(() => {
    let index = 0;
    const interval = setInterval(() => {
      progress.value += 25;
      currentMessage.value = props.messages[index];
      index++;
      if (progress.value >= 100) {
        clearInterval(interval);
        isBuilding.value = false;
        router.push('/factory'); // 替换为目标路由路径
      }
    }, 1000);
  });
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* 半透明黑色阴影 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* 确保覆盖在其他内容之上 */
  }
  
  .content {
    text-align: center;
    color: white;
  }
  </style>
  