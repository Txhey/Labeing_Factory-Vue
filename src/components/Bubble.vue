<template>
  <div class="bubble">
    <img src="../assets/images/bubble.png" alt="">
    <div class="top">
      <span class="name">name</span>
      <div :class="stateClass"></div>
    </div>
    <div class="content">
      <marquee-text :speed="1" :repeat="true" class="bubble-content">
        This is a scrolling text with vue-marquee-text-component
      </marquee-text>
    </div>
  </div>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component';
import {computed} from "vue";

const props = defineProps({
  name: String,
  state: Number,
})

const stateClass = computed(() => {
  if (!props.state){
    return "state_error"
  }
  switch (props.state) {
    case -2:
      return 'state_error';
    case -1:
      return 'state_waiting';
    case 0:
      return 'state_running';
    case 1:
      return 'state_finished';
  }
});

</script>

<style scoped>
.bubble {
  width: 70px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  img {
    width: 70px;
    height: 50px;
    position: absolute;
    z-index: 0;
  }
}

.top {
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 0.8rem;
}

.state_waiting {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: grey;
}

.state_running {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #238de3;
}

.state_finished {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: green;
}

.state_error {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: red;
}


.content {
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.bubble-content {
  font-size: 0.8rem;
  color: #4C7620; /* 文字颜色 */
  word-wrap: break-word; /* 允许长单词换行 */
  overflow: hidden;
  z-index: 1;
}


</style>