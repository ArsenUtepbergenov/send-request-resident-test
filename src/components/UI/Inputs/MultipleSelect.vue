<template>
  <div class="input-field">
    <label :for="fieldName" class="input-label">{{ labelText }}</label>
    <div class="select-container" @click="toggleDropdown">
      <div class="selected-options">
        <span v-if="isMultiple">
          <span
            v-for="option in selectedOptions"
            :key="option.value"
            class="tag"
          >
            {{ option.label }}
            <button
              type="button"
              class="remove-btn"
              @click.stop="removeOption(option)"
            >
              &times;
            </button>
          </span>
        </span>
        <span v-else>{{ selectedOptions[0]?.label }}</span>
      </div>
      <span class="dropdown-icon">
        <i
          class="pi pi-angle-down"
          style="color: #174b7c; font-size: 14px; position: relative; top: -9px"
        ></i>
      </span>
    </div>
    <span v-if="error" class="input-error">{{ error }}</span>

    <ul v-if="isOpen" class="dropdown-list">
      <li
        v-for="option in options"
        :key="option.value"
        @click.stop="selectOption(option)"
        :class="{ 'selected-option': selectedValues.includes(option.value) }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRaw } from "vue"

const error = ref("")

const emit = defineEmits(["update:modelValue", "isError"])

const props = defineProps({
  fieldName: String,
  labelText: String,
  hasError: Boolean,
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [Array, Number],
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(false)
const selectedValues = ref(
  Array.isArray(props.modelValue) ? [...props.modelValue] : [props.modelValue]
)

const isMultiple = computed(() => props.multiple)
const selectedOptions = computed(() => {
  return props.options.filter((option) =>
    selectedValues.value.includes(option.value)
  )
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option) {
  if (isMultiple.value) {
    if (selectedValues.value.includes(option.value)) removeOption(option)
    else selectedValues.value.push(option.value)
  } else {
    selectedValues.value = [option.value]
    isOpen.value = false
  }
  emit(
    "update:modelValue",
    isMultiple.value ? selectedValues.value : selectedValues.value[0]
  )
}

function removeOption(option) {
  selectedValues.value = selectedValues.value.filter(
    (value) => value !== option.value
  )
  emit("update:modelValue", selectedValues.value)
}

function closeDropdown(event) {
  if (!event.target.closest(".input-field")) {
    isOpen.value = false
  }
}

document.addEventListener("click", closeDropdown)

watch(
  () => props.modelValue,
  (newValue) => {
    let temp = toRaw(newValue)

    if (Array.isArray(temp) && props.multiple) {
      let t = temp.filter(Boolean)

      if (t.length === 0) error.value = "Поле обязательно"
      else error.value = ""

      emit("isError", error.value)
    }

    selectedValues.value = Array.isArray(newValue) ? [...newValue] : [newValue]
  }
)
</script>
