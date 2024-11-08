<template>
  <div class="agent">
    <el-card class="card">
      <div class="tools">
        <span>{{ type }} {{ num }}</span>
        <el-button class="delete" type="danger" :icon="Delete" circle @click="handleDeleteAgent"/>
        <!--        <SvgIcon name="delete" width="4rem" height="4rem" color="#fff" hoverColor="#999"> </SvgIcon>-->
      </div>
      <div class="avatar-div">
        <el-avatar :src="robotSrc"/>
      </div>
      <div class="name">
        <span>name:</span>
        <el-input class="input" size="small" v-model="agent.name" placeholder="input name"/>
      </div>
      <div class="model">
        <span>model:</span>
        <el-select-v2
            v-model="agent.model"
            :options="options"
            placeholder="select model"
            size="small"
        />
      </div>
      <div class="prompt">
        <span>prompt:</span>
        <el-input
            class="textarea"
            v-model="agent.prompt"
            :autosize="{ minRows: 1, maxRows: 2 }"
            type="textarea"
            placeholder="Please input prompt"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {ref, defineProps, inject, computed} from 'vue'
import {Delete} from '@element-plus/icons-vue'

const props = defineProps({
  agent: {
    type: Object,
    required: true
  },
  num: Number,
  type: String,
})

const options = ref([
  {value: 0, label: "qwen2.5-7b"},
  {value: 1, label: "qwen2.5-72b"},
  {value: 2, label: "ChatGPT4.0"},
  {value: 3, label: "ChatGPT4o"},
  {value: 4, label: "ChatGPT3.5"},
])

// 使用 defineEmits 定义事件
const emit = defineEmits(['deleteAgent']);
// 定义删除函数
const handleDeleteAgent = () => {
  emit('deleteAgent');
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
  width: 250px;
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
  justify-content: space-between;

  span {
    width: 80px;
    font-size: 0.9rem;
    color: #5a5656;
  }
}

.model {
  width: 100%;
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    width: 80px;
    font-size: 0.9rem;
    color: #5a5656;
  }
}

.prompt {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  span {
    width: 80px;
    font-size: 0.9rem;
    color: #5a5656;
  }

  .textarea {
    margin-top: 5px;
  }
}
</style>