
<template>
    <div class="main1">
        <div class="l1">
            <div class="img_potision">
                <img src="../assets/images/menke.png" alt="Logo"  class="logo-img" style="background-color: #23252C; width: 200px;height: 200px;" />
                <img src="../assets/images/sanqian.png" alt="Logo"  class="logo-img" style="background-color: #23252C; width: 200px;height: 200px;" />
            </div>
            <div class="left">
                <index12/>
            </div>
        </div>
        
        <div class="r1">
            
                <div class="right">
                   
  
                    <chat/>
                </div>
                    
        </div>
    </div>
  </template>
<script setup>
import index12 from '../components/index1.vue'
import chat from '../components/ChatBox.vue'
import { ref } from 'vue'
import {useAgentListStore} from '../store/arrayStory';

const agentListStore = useAgentListStore();
const clearList = agentListStore.clearList;
const labelList = agentListStore.clearList;
const reviewList = agentListStore.clearList;

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>



<style scoped>
.img_potision{
    left: 100px;
    position: absolute;
    top:150px;
}
.l1{
    position: relative;
    height: 100%;
    width: 46%;
    overflow: hidden;
}
.r1{
    position: relative;
    height: 100%;
    width: 54%;
    overflow: hidden;
}
.left {
    position: absolute;
    top:65px;
    left: -70px;
    display: flex   ;
    justify-content: flex-start; /* 从左边开始对齐 */
    height: 100%;
    width: 800px;

}

.right {
    position: absolute;
    top:110px;
    right: 100px;
  height: 100%;
  width: 800px;
  display: flex;
  justify-content: flex-end; /* 从右边开始对齐 */
}
.main1 {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow-y: hidden;
    align-items: center; 
    background-color: #23252C;
}
</style>
