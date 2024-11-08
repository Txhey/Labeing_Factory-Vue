<template>
  <div class="agent">
    <el-image class="image" :src="robot1" :fit="fit" />
  </div>
</template>

<script setup>
import robot1 from "@/assets/images/robot.png";
import robot2 from "@/assets/images/robot2.png";
import robot3 from "@/assets/images/robot3.png";
</script>

<style scoped>
.image{
  width: 50px;
}
</style>