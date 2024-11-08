<template>
  <svg @mouseover="hover" @mouseleave="leave" class="svgIcon" aria-hidden="true" :width="props.width"
       :height="props.height">
    <use :xlink:href="symbolId" :fill="tcolor"/>
  </svg>
</template>

<script setup>
import {ref, computed} from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "var(--color-text)",
  },
  hoverColor: {
    type: String,
    default: "var(--color-text-light)"
  },
  width: {
    type: String,
    default: "24px",
  },
  height: {
    type: String,
    default: "24px",
  },
});

const tcolor = ref(props.color);

const symbolId = computed(() => `#${props.prefix}-${props.name}`);


function hover() {
  tcolor.value = props.hoverColor;
}

function leave() {
  tcolor.value = props.color;
}

</script>

<style lang="scss" scoped>
.svgIcon {
  cursor: pointer;
}
</style>