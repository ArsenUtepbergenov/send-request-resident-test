<template>
  <div class="date-range">
    <label class="date-range-label">{{ labelText }}</label>
    <div class="date-range-dates">
      <DatePicker
        v-model="from"
        field-name="from"
        label-text="от"
        @isError="handleFirstDateError"
      />
      <DatePicker
        v-model="to"
        field-name="to"
        label-text="до"
        @isError="handleSecondDateError"
      />
    </div>
    <span v-if="error" class="date-range-error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import DatePicker from "@/components/UI/Inputs/DatePicker.vue"

const props = defineProps({
  hasError: Boolean,
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

  const toTime = new Date(to.value).getTime()
  const fromTime = new Date(from.value).getTime()

  if (toTime < fromTime) message = "Вторая дата не должна быть раньше первой!"

  emit("isError", message)

  return message
})

function handleFirstDateError(value) {
  isFirstError.value = !!value
}

function handleSecondDateError(value) {
  isSecondError.value = !!value
}
</script>
