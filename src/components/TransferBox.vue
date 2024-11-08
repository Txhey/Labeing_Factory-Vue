<template>
    <el-card style="background-color: #FAFAFA;height: 87%;border-radius: 15px;">
      <div class="title1">
        <span class="custom-text" style="margin-bottom: 10px;">增加新过程</span>
        <span style="color: #D3D6DE;margin-bottom: 20px;">可以选择增加或者拖拽</span>
      </div>
      <div>
      <el-row v-for="(option, index) in options" :key="index" class="option-row">
        <el-col :span="20">
          <el-tag style="background-color: #FFFFFF; color: #73767E ; border: none; font-size: medium;">{{ option.name }}</el-tag>
        </el-col>
        <el-col :span="4" >
          <el-icon @click="addOption(option)" style="cursor: pointer;"><CirclePlusFilled /></el-icon>
        </el-col>
      </el-row>
    </div>
    </el-card>
  </template>
  
  <script setup>
  const props = defineProps({
    options: Array,
  });
  
  const emit = defineEmits(['addOption']);

  const addOption = (option) => {
    emit('addOption', option);
  };
  </script>
  
  <style scoped>
    .custom-text {
  font-size: 20px; /* 设置字体大小为18像素 */
  color: black;
}
  .title1{
    display: flex;
    flex-direction: column;
  }
  .option-row {
    display: flex;
    flex-direction: row;
    /* border-radius: 15px; */
    margin-bottom: 10px;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    height: 40px;
  }
  </style>
  