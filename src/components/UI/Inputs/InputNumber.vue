<template>
  <div class="input-field">
    <label :for="fieldName" class="input-label-number">{{ labelText }}</label>
    <input
      :id="fieldName"
      :name="fieldName"
      v-model="modelValue"
      type="number"
      :class="{ 'input-invalid': error }"
      :required="required"
      class="input input-number"
      @blur="handleValidate"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { useRequired } from "@/composables/required"

const props = defineProps({
  fieldName: String,
  required: Boolean,
  labelText: String,
})

const modelValue = defineModel()

const emit = defineEmits(["isError"])

const { handleValidate, error } = useRequired(modelValue, emit)
</script>
