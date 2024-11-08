<template>
  <div class="factory">

    <div class="left">
      <div class="img_potision">
        <img src="../assets/images/menke.png" alt="Logo" class="logo-img"
             style=" width: 200px;height: 200px;"/>
        <img src="../assets/images/sanqian.png" alt="Logo" class="logo-img"
             style=" width: 200px;height: 200px;"/>
      </div>
      <div class="imgBox">
        <img class="backImg" :src="img_factory" alt="">
        <div class="bubbleBox bubbleBox_clear">
          <Bubble v-for="(item,index) in clearList" :key="index"/>
        </div>
        <div class="bubbleBox bubbleBox_label">
          <Bubble v-for="(item,index) in labelList" :key="index"/>
        </div>
        <div class="bubbleBox bubbleBox_review">
          <Bubble v-for="(item,index) in reviewList" :key="index"/>
        </div>
      </div>
      <div class="clear">
        <div class="agent">
        </div>
      </div>
    </div>

    <div class="right">
      <div class="top">
        <el-steps style="width: 70%" :active="1" finish-status="success">
          <el-step title="Step 1" description="清洗分发数据"/>
          <el-step title="Step 2" description="标注数据"/>
          <el-step title="Step 3" description="审查标注结果"/>
        </el-steps>
      </div>
      <div class="chat">
        <el-card class="chat-box"></el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Agent from "@/components/Agent.vue";
import axios from 'axios';

import img_factory from '@/assets/images/factory.png'
import Bubble from "@/components/Bubble.vue";

import {useAgentListStore} from '../store/arrayStory';

const agentListStore = useAgentListStore();
const clearList = agentListStore.clearList;
const labelList = agentListStore.labelList;
const reviewList = agentListStore.reviewList;

function sendMsg(prompt, content) {
  const data = {
    prompt: prompt,
    content: content
  };
  const headers = {
    'Content-Type': 'application/json'
};
// 发送 POST 请求
  axios.post('http://localhost:8181/chat', data,{ headers })
      .then(response => {
        // 成功时处理响应
        console.log('Response:', response.data);
      })
      .catch(error => {
        // 失败时处理错误
        console.error('Error:', error);
      });
}

sendMsg('你是一个聊天机器人','如何找女朋友')
</script>

<style scoped>
.factory {
  width: 100%;
  height: 100%;
  background: #23252C;
  min-height: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.left {
  flex: 1;
  height: 100%;

  .imgBox {
    width: 800px;
    position: absolute;
    top: 320px;
    left: 0px;

    .backImg {
      width: 100%;
    }

    .bubbleBox {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      .bubbleItemBox {
        width: 70px;

        img {
          width: 70px;
          position: absolute;
        }

        span {
          position: absolute;
          font-size: 0.8rem;
        }
      }
    }
  }
}

.right {
  flex: 1;
  height: 100%;
  min-width: 1000px;
  background: #eee;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.chat-box {
  width: 800px; /* 调整宽度 */
  height: 600px; /* 调整高度 */
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow-y: auto; /* 使内容区域可滚动 */
}


.img_potision {
  left: 100px;
  position: absolute;
  top: 150px;
}


.bubbleBox_clear {
  top: 0px;
  left: 110px;
  width: 280px;
  flex-wrap: wrap;
}

.bubbleBox_label {
  top: 200px;
  left: 90px;
}

.bubbleBox_review {
  top: 0px;
  left: 450px;

  width: 280px;
  flex-wrap: wrap;
}
</style>