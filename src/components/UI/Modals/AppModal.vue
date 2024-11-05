<script setup>
import { VueFinalModal } from "vue-final-modal"

defineProps({
  title: String,
})

const emits = defineEmits(["confirm"])
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h1 class="heading">{{ title }}</h1>
    <slot />
  </VueFinalModal>
</template>

<style lang="scss">
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;

  .heading {
    color: #1a263d;
  }
}

.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
}

.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}

.confirm-modal-content h1 {
  font-size: 1.375rem;
}

.confirm-modal-content button {
  margin: 30px auto 24px auto;
}

.dark .confirm-modal-content {
  background: #000;
}
</style>
