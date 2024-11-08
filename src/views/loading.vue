<template>
  <div class="transition-overlay">
    <div class="background-container">
      <div class="circle-background">
        <img class="background-image" src="../assets/images/ye.png" alt="Background"/>
        <div class="text-container">
          <span class="text" :style="{ color: currentColor }">{{ currentText }}</span>
        </div>
        <div class="spinner">
          <div class="character-wrapper">
            <img class="animated-character" src="../assets/gif/p.gif" alt="Character"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {useAgentListStore} from '../store/arrayStory';

const agentListStore = useAgentListStore();
console.log(agentListStore.clearList)

const router = useRouter();
const isVisible = ref(true);

const route = useRoute();

// Texts for each circle
const texts = [
  '构建标注机器人7号的脑干…',
  '为标注星球铺设光缆…',
  '标注工厂就绪准备…',

];

// Colors for each circle
const colors = [
  '#FF5733', // 红色
  '#33FF57', // 绿色
  '#3357FF'  // 蓝色
];

const currentText = ref(texts[0]);
const currentColor = ref(colors[0]);

const getTextAndColor = (percentage) => {
  if (percentage < 33.33) {
    currentText.value = texts[0];
    currentColor.value = colors[0];
  } else if (percentage < 66.66) {
    currentText.value = texts[1];
    currentColor.value = colors[1];
  } else {
    currentText.value = texts[2];
    currentColor.value = colors[2];
  }
};

onMounted(() => {
  // Rotate for 3 circles, e.g., 3 seconds total for 3 circles
  setTimeout(() => {
    isVisible.value = false;
    router.push('/factory'); // 替换为目标路由路径
  }, 3000); // 旋转时间调整为 3 秒

  // Update text and color based on animation progress
  const updateTextColor = () => {
    const percentage = (performance.now() % 3000) / 3000 * 100;
    getTextAndColor(percentage);
    requestAnimationFrame(updateTextColor);
  };

  updateTextColor();
});
</script>

<style scoped>
.transition-overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #23252C;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background-container {
  position: relative;
  width: 150px; /* 背景图片的尺寸 */
  height: 150px; /* 背景图片的尺寸 */
}

.circle-background {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: circle(50% at 50% 50%);
}

.spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animated-character {
  position: absolute;
  width: 50px; /* 小人尺寸 */
  height: 50px; /* 小人尺寸 */
  transform-origin: center center;
  animation: spin 3s linear infinite; /* 每圈旋转1秒，三圈 */
}

.text-container {
  position: absolute;
  bottom: -60px; /* 使文本显示在图片下方 */
  width: 100%;
  text-align: center;
}

.text {
  font-size: 16px; /* 调整字体大小 */
  font-weight: bold;
  color: #FF5733; /* 初始颜色 */
}

@keyframes spin {
  0% {
    transform: rotate(0deg) translateY(-75px) rotate(0deg); /* 小人初始位置在圆形的正上方 */
  }
  100% {
    transform: rotate(1080deg) translateY(-75px) rotate(-1080deg); /* 旋转三圈 */
  }
}
</style>
  