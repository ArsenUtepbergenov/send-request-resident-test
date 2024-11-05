<template>
  <div class="input-field">
    <label :for="fieldName" class="input-label">{{
      labelText || "Введите информацию..."
    }}</label>
    <input
      :id="fieldName"
      :name="fieldName"
      type="tel"
      v-model="modelValue"
      :required="required"
      :class="{ 'input-invalid': error }"
      placeholder="+7 (___) ___-__-__"
      pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
      @input="handleFormatPhone"
      @blur="handleValidatePhone"
      maxlength="18"
      class="input"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  fieldName: String,
  required: Boolean,
  labelText: String,
})

const modelValue = defineModel()
const error = ref("")

const emit = defineEmits(["isError"])

function handleFormatPhone() {
  let input = modelValue.value.replace(/\D/g, "")

  if (input.startsWith("7")) {
    input = input.slice(1)
  }
  input = "+7 (" + input

  if (input.length > 7) input = input.slice(0, 7) + ") " + input.slice(7)
  if (input.length > 12) input = input.slice(0, 12) + "-" + input.slice(12)
  if (input.length > 15) input = input.slice(0, 15) + "-" + input.slice(15)

  modelValue.value = input.slice(0, 18)
  error.value = ""
}

function handleValidatePhone() {
  const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
  if (!phonePattern.test(modelValue.value)) {
    error.value =
      "Введите корректный номер телефона в формате +7 (900) 123-45-67"
  } else {
    error.value = ""
  }
  emit("isError", error.value)
}
</script>
