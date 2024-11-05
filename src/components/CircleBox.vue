<template>
  <div class="circle">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "...",
  },
  color: {
    type: String,
    default: "#F7F8F8",
  },
})
</script>

<style lang="scss">
.circle {
  border-radius: 100%;
  background: v-bind(color);
  display: flex;
  padding: 12px;

  .text {
    margin: auto;
    text-align: center;
    word-break: break-all;
  }

  @media screen and (max-width: $mobile) {
    width: 150px;
    height: 150px;

    .text {
      font-size: 12px;
      line-height: 13px;
    }
  }

  @media screen and (min-width: $min-tablet) {
    width: 200px;
    height: 200px;

    .text {
      font-size: 14px;
      line-height: 15px;
    }
  }
}
</style>
