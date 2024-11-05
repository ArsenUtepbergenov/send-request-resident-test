<template>
  <div class="divider" />
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  height: {
    type: Number,
    default: 1,
  },
  color: {
    type: String,
    default: "#F7F8F8",
  },
  margin: {
    type: Array,
    default: [4, 4],
  },
})

const mt = computed(() => props.margin[0] + "px")
const mb = computed(() => props.margin[1] + "px")
const h = computed(() => props.height + "px")
</script>

<style lang="scss">
.divider {
  width: 100%;
  height: v-bind(h);
  background: v-bind(color);
  margin-top: v-bind(mt);
  margin-bottom: v-bind(mb);
}
</style>
