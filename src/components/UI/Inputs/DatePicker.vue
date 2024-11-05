<template>
  <div class="input-field">
    <label :for="fieldName" class="input-label-date">{{ labelText }}</label>
    <input
      :id="fieldName"
      :name="fieldName"
      v-model="modelValue"
      type="date"
      :class="{ 'input-invalid': error }"
      class="input input-date"
      @blur="handleValidate"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { useRequired } from "@/composables/required"

const props = defineProps({
  fieldName: String,
  hasError: Boolean,
  labelText: String,
})

const modelValue = defineModel()

const emit = defineEmits(["isError"])

const { handleValidate, error } = useRequired(modelValue, emit)
</script>
