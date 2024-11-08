<template>
  <div class="drawer-container">

    <el-drawer v-model="drawerVisible" :append-to-body="true" :before-close="handleClose" size="80%"
               :with-header="false">
      <div class="drawer-content">
        <!-- 抽屉的内容 -->
        <div class="header">
          <span class="text">
            自定义配置链路
          </span>
          <div style="color:#D3D6DE ;margin-left: 16px;">
            按住对默认阶段的编辑。角色可以下拉并选择以前存在的角色
          </div>


          <div class="tools">
            <div class="icon1 ">
              <el-icon style="margin-right: 5px;">
                <Histogram/>
              </el-icon>
              <span class="text" style="margin-right: 20px;color: #4f5669;">
              排序
            </span>
            </div>
            <div class="icon2">
              <el-icon style="margin-right: 5px;">
                <RefreshLeft/>
              </el-icon>
              <span class="text" style="margin-right: 20px;color: #4f5669">
              重置
            </span>
            </div>
            <el-button type="success" @click="handleClose">确定</el-button>
          </div>
        </div>
        <div class="main">
          <el-row class="main-row">
            <el-col :span="5" style="border:none">
              <TransferBox :options="leftOptions" @addOption="handleAddOption"/>
            </el-col>

            <el-col :span="19" style="overflow: auto;padding: 0px;">
              <ConfigBox :configs="rightConfigs" @removeConfig="handleRemoveConfig" @addNewConfig="handleAddNewConfig"
                         @updateConfigs="updateConfigs"
                         style="overflow: auto;margin-left: 10px;margin-right: 0px;border:none;padding: 0px;"/>
            </el-col>
          </el-row>


        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import {inject, ref} from 'vue'

import TransferBox from './TransferBox.vue';
import ConfigBox from './ConfigBox.vue';

const leftOptions = ref([
  {name: '清洗机器人'},
  {name: '标注机器人'},
  {name: '审查机器人'},
  // 其他预设配置
]);

const rightConfigs = ref([]);


const addClearRobot = inject('addClearRobot', () => {
})
const addLabelRobot = inject('addLabelRobot', () => {
})
const addReviewRobot = inject('addReviewRobot', () => {
})

const handleAddOption = (option) => {
  console.log(option);
  switch (option.name) {
    case '清洗机器人':
      addClearRobot();
      break;
    case '标注机器人':
      addLabelRobot();
      break;
    case '审查机器人':
      addReviewRobot();
      break;
  }
};

const handleRemoveConfig = (index) => {
  rightConfigs.value.splice(index, 1);
};

const handleAddNewConfig = () => {
  rightConfigs.value.push({
    id: Date.now(),
    name: `自定义配置 ${rightConfigs.value.length + 1}`,
    configName: '',
    role: '',
    description: '',
    specificConfigs: [] // 存储特定配置项
  });
};

const updateConfigs = (newConfigs) => {
  rightConfigs.value = newConfigs;
};
const drawerVisible = ref(false)

const handleClose = () => {
  drawerVisible.value = false
}

const showDrawer = () => {

  drawerVisible.value = true
}

// 公开 showDrawer 方法供外部调用
defineExpose({showDrawer})
</script>

<style scoped>
.el-card__body {
  padding: 0px;
  margin: 0px
}

.main-row {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.left {
  width: 20%;
  background-color: #FAFAFA;
  border-radius: 20px;
  height: 92%;
}

.right {
  width: 75%;
  padding: 0;
}

.main {
  position: absolute;
  top: 60px;
  display: flex;
  height: 100%;
  width: 100%;
}

.text {
  font-weight: 550;
}

.header {

  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.tools{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.drawer-content {
  left: 10px;
  position: relative;
  padding: 0px;
  height: 100%;
  overflow: hidden;
}
</style>