<template>
  <div style="height: 100%;position: relative;">
    <div class="container">
      <div class="rectangle">
        <img src="../assets/images/factory.png" class="factory">
        <div class="bubble-container">
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人1号</div>
              <div class="bubble-content">{{displayedText1}}</div>
            </div>
          </div>
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人2号</div>
              <div class="bubble-content">{{displayedText2}}</div>
            </div>
          </div>
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人3号</div>
              <div class="bubble-content">{{displayedText3}}</div>
            </div>
          </div>
        </div>

        <div class="bubble-container-1">
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人4号</div>
              <div class="bubble-content">{{displayedText4}}</div>
            </div>
          </div>
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人5号</div>
              <div class="bubble-content">{{displayedText2}}</div>
            </div>
          </div>
          <div class="bubble-wrapper">
            <img src="../assets/images/bubble.png" class="bubble">
            <div class="bubble-text">
              <div class="bubble-title">标注机器人6号</div>
              <div class="bubble-content">{{displayedText1}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  // components: {Notice, Dict},
  data() {
    return {
      state1: '正在标注中...😥',
      state2: '标注完成，正在审核中...🙃',
      state3: '审核失败😡，需要人工介入',
      state4: '审核通过√🙂',
      displayedText1: '',
      displayedText2: '',
      displayedText3: '',
      displayedText4: '',
      currentIndex1: 0,
      currentIndex2: 0,
      currentIndex3: 0,
      currentIndex4: 0,
      intervalTime: 500,
    };
  },
  mounted() {
    this.showText1();
    this.showText2();
    this.showText3();
    this.showText4();
  },
  methods: {
    showText1() {
      const interval = setInterval(() => {
        if (this.currentIndex1 < this.state1.length) {
          this.displayedText1 += this.state1[this.currentIndex1];
          this.currentIndex1++;
        } else {
          clearInterval(interval); // 当全部字符显示完毕时，停止定时器
          setTimeout(() => {
            this.resetText1(); // 延迟 2 秒后重新开始
          }, 2000); // 2000 毫秒 = 2 秒
        }
      }, this.intervalTime); // 调整这个值来控制每个字符出现的速度
    },

    resetText1() {
      this.displayedText1 = ''; // 清空显示的文本
      this.currentIndex1 = 0; // 重置索引
      this.showText1(); // 重新开始
    },

    showText2() {
      const interval = setInterval(() => {
        if (this.currentIndex2 < this.state2.length) {
          this.displayedText2 += this.state2[this.currentIndex2];
          this.currentIndex2++;
        } else {
          clearInterval(interval); // 当全部字符显示完毕时，停止定时器
          setTimeout(() => {
            this.resetText2(); // 延迟 2 秒后重新开始
          }, 2000); // 2000 毫秒 = 2 秒
        }
      }, this.intervalTime); // 调整这个值来控制每个字符出现的速度
    },

    resetText2() {
      this.displayedText2 = ''; // 清空显示的文本
      this.currentIndex2 = 0; // 重置索引
      this.showText2(); // 重新开始
    },

    showText3() {
      const interval = setInterval(() => {
        if (this.currentIndex3 < this.state3.length) {
          this.displayedText3 += this.state3[this.currentIndex3];
          this.currentIndex3++;
        } else {
          clearInterval(interval); // 当全部字符显示完毕时，停止定时器
          setTimeout(() => {
            this.resetText3(); // 延迟 2 秒后重新开始
          }, 2000); // 2000 毫秒 = 2 秒
        }
      }, this.intervalTime); // 调整这个值来控制每个字符出现的速度
    },

    resetText3() {
      this.displayedText3 = ''; // 清空显示的文本
      this.currentIndex3 = 0; // 重置索引
      this.showText3(); // 重新开始
    },

    showText4() {
      const interval = setInterval(() => {
        if (this.currentIndex4 < this.state4.length) {
          this.displayedText4 += this.state4[this.currentIndex4];
          this.currentIndex4++;
        } else {
          clearInterval(interval); // 当全部字符显示完毕时，停止定时器
          setTimeout(() => {
            this.resetText4(); // 延迟 2 秒后重新开始
          }, 2000); // 2000 毫秒 = 2 秒
        }
      }, this.intervalTime); // 调整这个值来控制每个字符出现的速度
    },

    resetText4() {
      this.displayedText4 = ''; // 清空显示的文本
      this.currentIndex4 = 0; // 重置索引
      this.showText4(); // 重新开始
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  position:absolute;
  left:-660px;
  background-color: white; /* 灰色背景 */
  display: flex;

  align-items: center;
  // height: 88vh; 
  height: 100%;
}

.rectangle {
  position: absolute;
  left: 330px;
  background-color: #23252C; /* 白色背景 */
  width: 90vw; /* 矩形宽度为窗口的45% */
  height: 75vh; /* 矩形高度为窗口的90% */
  border-radius: 20px; /* 圆角 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  overflow: hidden; /* 防止超出父容器 */
  transform: scale(0.5); /* 缩小 80% */
  transform-origin: center; /* 从中心缩放 */
}

.factory {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 50%;  /* 让图像中心与父容器中心对齐 */
  top: 50%;   /* 让图像中心与父容器中心对齐 */
  transform: translate(-50%, -50%); /* 使图像真正居中 */
}

.bubble-container {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 30vw;
  height: 30vh;
  left: 8vw;
  top: 22vh;
}

.bubble-container-1 {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 30vw;
  height: 30vh;
  left: 38vw;
  top: 22vh;
}

.bubble-wrapper {
  position: relative;
  width: 10vw;
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubble {
  width: 95%;
  height: 95%;
  object-fit: contain;
}

.bubble-text {
  position: absolute;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px; /* 内边距，避免文字紧贴图片边缘 */
  box-sizing: border-box;
  pointer-events: none;
  overflow: hidden; /* 防止溢出 */
  font-family: 'Press Start 2P', cursive; /* 应用像素风格字体 */
}

.bubble-title {
  position: absolute;
  top: 22%; /* 将标题放在图片的顶部 */
  width: 100%; /* 确保标题不会超出图片边界 */
  text-align: center;
  font-size: 1.2vw; /* 根据需要调整字体大小 */
  color: #4C7620; /* 文字颜色 */
  white-space: nowrap; /* 防止标题换行 */
  overflow: hidden;
  text-overflow: ellipsis; /* 如果标题太长，用省略号显示 */
}

.bubble-content {
  position: absolute;
  top: 55%; /* 将内容文字放在图片的中心 */
  transform: translateY(-50%); /* 确保内容文字垂直居中 */
  width: 100%; /* 确保内容文字不会超出图片边界 */
  text-align: center;
  font-size: 1.1vw; /* 根据需要调整字体大小 */
  color: #4C7620; /* 文字颜色 */
  word-wrap: break-word; /* 允许长单词换行 */
}

.spacer {
  width: 5px; /* 设置中间的空隙宽度 */
}
</style>

