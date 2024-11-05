<template>
  <div class="input-field">
    <label :for="fieldName" class="input-label">{{
      labelText || "Введите информацию..."
    }}</label>
    <input
      :id="fieldName"
      :name="fieldName"
      v-model="modelValue"
      type="text"
      :class="{ 'input-invalid': error }"
      :placeholder="placeholder"
      :required="required"
      class="input"
      @blur="handleValidate"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { useRequired } from "@/composables/required"

const modelValue = defineModel()

const emit = defineEmits(["isError"])

const { handleValidate, error } = useRequired(modelValue, emit)

const props = defineProps({
  fieldName: String,
  placeholder: String,
  required: Boolean,
  labelText: String,
})
</script>
