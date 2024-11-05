import { ref, toValue } from "vue"

export function useRequired(value, emit) {
  const error = ref("")

  function handleValidate() {
    if (!toValue(value)) {
      error.value = "Поле обязательно"
    } else {
      error.value = ""
    }
    emit("isError", error.value)
  }

  return { handleValidate, error }
}
