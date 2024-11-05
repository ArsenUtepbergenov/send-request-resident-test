<template>
  <button
    type="button"
    class="primary-button"
    :class="[variant]"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "contained" },
  width: { type: String, default: "214px" },
  disabled: { type: Boolean },
})

const emits = defineEmits(["click"])

function handleClick() {
  emits("click")
}
</script>

<style lang="scss">
.primary-button {
  width: v-bind(width);
  padding: 14px 40px;
  text-align: center;
  border-radius: 66px;
  transition: all 0.4s ease;
  margin: auto;
  display: block;
}

.primary-button.contained {
  color: $primary-c-btn;
  background: $primary-bg-btn;
}

.primary-button.contained:hover {
  background: $primary-c-btn-hover;
}

.primary-button:disabled {
  background: grey;
  cursor: not-allowed;
  user-select: none;

  &:hover {
    background: grey;
  }
}
</style>
