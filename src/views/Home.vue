<template>
  <div class="main-container">
    <div class="background">
      <div class="top-image">
        <div class="text-container">
          <h1 class="text-shadow1">门客三千</h1>
          <p class="text-shadow2">使用智能体来实现自动标注</p>
        </div>
      </div>
      <div class="gradient-bar"></div>
      <div class="bottom-gray"></div>
      <BuildProgress v-if="isBuilding"/>
    </div>

    <div class="content-box">
      <div class="basic1">
        <el-icon size="30px">
          <Operation/>
        </el-icon>
        <span class="custom-text">基础设置</span>
      </div>
      <div class="setting1">
        <span class="text">项目名称</span>
        <el-input v-model="input" placeholder="Please input" clearable size="large"/>
        <div class="spacer"></div> <!-- 空白行 -->
        <span class="text">项目描述</span>
        <el-input
            v-model="textarea"
            maxlength="300"
            placeholder="Please input"
            show-word-limit
            type="textarea"
            size="large"
            :rows="5"
        />
      </div>
      <div class="basic2">
        <el-icon size="30px">
          <Operation/>
        </el-icon>
        <span class="custom-text">进阶设置</span>
      </div>
      <div class="setting2">
        <div class="rest">
          <span class="text2">Art Phase</span>
          <el-switch color="#3B71FC" v-model="value1" class="switch" size="middle"/>
        </div>
        <div class="rest">
          <span class="text2">智能体规模</span>
          <el-slider v-model="value2" class="slider" size="middle"/>
        </div>
        <div class="rest">
          <span class="text2">自定义配置</span>
          <el-icon size="25px" color="#3B71FC" @click="showDrawer">
            <SetUp/>
          </el-icon>
        </div>
      </div>
      <div class="setting3">
        <div class="rest">
          <span class="text">文件上传</span>
          <div class="upload-container">
            <el-upload
                ref="upload"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"

            >
              <template #trigger>
                <el-button color="#656980">select file</el-button>
              </template>

            </el-upload>
          </div>
        </div>
      </div>
      <div class="setting4">
        <el-button type="primary" size="large" color="#30333E" style="width: 600px; " @click="goToAbout">开始运行
        </el-button>
      </div>

    </div>
    <!-- 引入 SlidingPanel 组件 -->
    <SlidingPanel ref="slidingPanelRef"/>

  </div>
</template>

<script lang="ts" setup>
import {provide, ref} from 'vue'
import SlidingPanel from '@/components/SlidingPanel.vue'
import {genFileId} from 'element-plus'
import type {UploadInstance, UploadProps, UploadRawFile} from 'element-plus'
import BuildProgress from '../components/BuildProgress.vue';
import {useRouter} from 'vue-router';
import {useAgentListStore} from '../store/arrayStory';

const agentListStore = useAgentListStore();

const value1 = ref(true)
const value2 = ref(0)


/* provide: clearList, labelList, reviewList */
const clearList = ref([])
const labelList = ref([])
const reviewList = ref([])
provide('clearList', clearList)
provide('labelList', labelList)
provide('reviewList', reviewList)

function addClearRobot() {
  clearList.value.push({
    id: Date.now(),
    name: '清洗机器人',
    prompt: '你是一个清洗机器人，负责对文件内容进行处理并切分',
  })
}

function addLabelRobot() {
  labelList.value.push({
    id: Date.now(),
    name: '标注机器人',
    prompt: '你是一个标注机器人，负责对文件内容进行标注',
  })
}

function addReviewRobot() {
  reviewList.value.push({
    id: Date.now(),
    name: '审查机器人',
    prompt: '你是一个审查机器人，负责对标注结果进行审查',
  })
}

// 删除 agent 的方法
const deleteClearRobot = (index) => {
  console.log('delete', index)
  clearList.value.splice(index, 1);
};
const deleteLabelRobot = (index) => {
  console.log('delete', index)
  labelList.value.splice(index, 1);
};
const deleteReviewRobot = (index) => {
  console.log('delete', index)
  reviewList.value.splice(index, 1);
};

provide('addClearRobot', addClearRobot);
provide('addLabelRobot', addLabelRobot);
provide('addReviewRobot', addReviewRobot);
provide('deleteClearRobot', deleteClearRobot);
provide('deleteLabelRobot', deleteLabelRobot);
provide('deleteReviewRobot', deleteReviewRobot);

const input = ref('')
const textarea = ref('')
const router = useRouter();
const slidingPanelRef = ref(null)
const upload = ref<UploadInstance>()
const isBuilding = ref(false);
const goToAbout = () => {
  // router.replace({ path: '/loading' });
  agentListStore.setClearList(clearList.value)
  agentListStore.setLabelList(labelList.value)
  agentListStore.setReviewList(reviewList.value)
  router.push({
    path: '/loading',
  })
};

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const showDrawer = () => {

  if (slidingPanelRef.value) {

    slidingPanelRef.value.showDrawer()
  }
}

</script>

<style scoped lang="less">
.el-drawer__header {
  margin-bottom: 10px;
}

.upload-container, .upload-demo {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.setting3 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 345px;
  width: 1000px;
  height: 50px;
  display: flex;
}

.setting4 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 500px
}

.slider {
  width: 100px; /* 设置滑块的宽度 */
  margin-left: 20px; /* 可选：添加与文字之间的间距 */
}

.rest {

  align-items: center;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
}

.switch {
  margin-left: 10px;
}

.spacer {
  height: 20px; /* 设置空白行的高度 */
}

.text {
  font-size: 22px; /* 设置字体大小为22像素 */
  color: #4f5669;
}

.text2 {
  font-size: 18px; /* 设置字体大小为18像素 */
  color: #4f5669;
}

.setting1 {
  display: flex;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 300px;
  flex-direction: column; /* 设置子元素垂直排列 */
  gap: 8px; /* 设置文本和输入框之间的间距，可以根据需要调整 */
}

.setting2 {
  display: flex;
  position: absolute;
  top: 430px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 30px;
  justify-content: space-between; /* 水平均匀分布子元素 */
}

.custom-text {
  font-size: 28px; /* 设置字体大小为18像素 */
  color: black;
}

.basic1 {
  position: absolute;
  left: 20px;
  top: 30px;
  align-items: center;
  display: flex;
  white-space: nowrap; /* 防止子元素换行 */
  flex-wrap: nowrap; /* 防止子元素换行 */
  gap: 8px;
  color: #4f5669;
}

.basic2 {
  position: absolute;
  left: 20px;
  top: 380px;
  align-items: center;
  display: flex;
  white-space: nowrap; /* 防止子元素换行 */
  flex-wrap: nowrap; /* 防止子元素换行 */
  gap: 8px;
  color: #4f5669;
}

.text-container {
  position: absolute;
  top: 80px;
  left: 100px;

  // text-align: center;
}

.text-shadow1 {
  font-family: 'Arial Black', 'Heiti SC', 'Heiti TC', sans-serif; /* 指定黑体 */
  font-weight: normal; /* 加粗 */
  color: black; /* 文字颜色 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* 阴影效果 */
  margin: 10px 0; /* 调整文字间距 */
  font-size: 24px; /* 调整字体大小 */
}

.text-shadow2 {
  font-family: 'Arial', sans-serif; /* 使用普通字体 */
  font-weight: normal; /* 取消加粗 */
  color: black; /* 文字颜色 */
  text-shadow: 0 0 4px rgba(207, 207, 230, 0.8), /* 蓝色光晕 */ 0 0 8px rgba(96, 96, 191, 0.6), /* 蓝色光晕 */ 0 0 12px rgba(189, 189, 229, 0.4), /* 蓝色光晕 */ 0 0 16px rgba(0, 0, 255, 0.2); /* 蓝色光晕 */
  font-size: 24px; /* 调整字体大小 */
}

.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background {
  // position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; /* 背景在内容框下方 */
}

.top-image {
  position: relative;;
  width: 100%;
  height: calc(100% * 2 / 7); /* 2/7 的高度 */
  background-image: url('../assets/images/blue.jpg'); /* 替换为你的图片路径 */
  background-size: cover;
  background-position: center;
}

.gradient-bar {
  height: 48px;
  background: linear-gradient(to top, #e0e0e0, #cee2f0);
}

.bottom-gray {
  width: 100%;
  height: calc(100% - 48px - (100% * 2 / 7));
  background-color: #e0e0e0;
  height: 100%;

}

.content-box {
  position: absolute;
  width: 1400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%); /* 正确的 transform 语法 */
  height: 600px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}
</style>
  