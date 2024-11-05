<template>
  <div class="number-range">
    <label class="number-range-label">{{ labelText }}</label>
    <div class="number-range-inputs">
      <InputNumber
        v-model="from"
        field-name="from"
        label-text="от"
        @isError="handleFirstNumberError"
      />
      <InputNumber
        v-model="to"
        field-name="to"
        label-text="до"
        @isError="handleSecondNumberError"
      />
    </div>
    <span v-if="error" class="number-range-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import InputNumber from "@/components/UI/Inputs/InputNumber.vue"

const props = defineProps({
  labelText: String,
})

const emit = defineEmits(["isError"])

const from = defineModel("from")
const to = defineModel("to")

const isFirstError = ref(false)
const isSecondError = ref(false)

const error = computed(() => {
  let message = ""

  if (isFirstError.value || isSecondError.value) message = "Заполните поля"

  if (to.value < from.value)
    message = "Второе значение не должно быть меньше первого!"

  emit("isError", message)

  return message
})

function handleFirstNumberError(value) {
  isFirstError.value = !!value
}

function handleSecondNumberError(value) {
  isSecondError.value = !!value
}
</script>
