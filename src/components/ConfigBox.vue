<template>
  <div class="container1">
    <el-scrollbar height="100%">
      <div class="scrollbar-all-box">

        <div class="container-clear">
          <div class="scrollbarBox">
            <el-scrollbar>
              <NoAgent type="分发机器人" agent="" v-if="clearList.length===0" @addAgent="addClearRobot"/>
              <draggable v-model="clearList" @end="onEnd" item-key="id" class="draggBox">
                <template #item="{ element, index }">
                  <AgentBox :key="index" :agent=element type="清洗机器人"
                            :num="index+1"
                            @deleteAgent="deleteClearRobot(index)"/>

                </template>
              </draggable>
            </el-scrollbar>
          </div>
        </div>

        <div class="divider"></div>

        <div class="container-clear">
          <div class="scrollbarBox">
            <el-scrollbar>
              <NoAgent type="标注机器人" agent="" v-if="labelList.length===0" @addAgent="addLabelRobot"/>
              <draggable v-model="labelList" @end="onEnd" item-key="id" class="draggBox">
                <template #item="{ element, index }">
                  <AgentBox :key="index" :agent=element type="标注机器人"
                            :num="index+1"
                            @deleteAgent="deleteLabelRobot(index)"/>

                </template>
              </draggable>
            </el-scrollbar>
          </div>
        </div>

        <div class="divider"></div>

        <div class="container-clear">
          <div class="scrollbarBox">
            <el-scrollbar>
              <NoAgent type="审查机器人" agent="" v-if="reviewList.length===0" @addAgent="addReviewRobot"/>
              <draggable v-model="reviewList" @end="onEnd" item-key="id" class="draggBox">
                <template #item="{ element, index }">
                  <AgentBox :key="index" :agent=element type="审查机器人"
                            :num="index+1"
                            @deleteAgent="deleteReviewRobot(index)"/>

                </template>
              </draggable>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </el-scrollbar>

  </div>
</template>

<script setup>
import {inject, ref} from 'vue'
import draggable from 'vuedraggable';
import AgentBox from '@/components/AgentBox.vue'
import NoAgent from "@/components/NoAgent.vue";

const testdata = ref([
  {name: 'agent1', prompt: 'prompt1'},
  {name: 'agent2', prompt: 'prompt2'},
])

const clearList = inject('clearList')
const labelList = inject('labelList')
const reviewList = inject('reviewList')

const addClearRobot = inject('addClearRobot')
const addLabelRobot = inject('addLabelRobot');
const addReviewRobot = inject('addReviewRobot')
const deleteClearRobot = inject('deleteClearRobot')
const deleteLabelRobot = inject('deleteLabelRobot')
const deleteReviewRobot = inject('deleteReviewRobot')

const onEnd = (event) => {
  console.log('Drag ended', event);
};
</script>

<style scoped>
.divider {
  height: 1px;
  background: #eee;
  margin: 12px 5px;
}

.container1 {
  overflow: auto;
  /* margin-right: 00px; */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scrollbar-all-box {
  display: flex;
  flex-direction: column;
}

.scrollbarBox {
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: row;
}

.draggBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
  gap: 20px;
}
</style>
