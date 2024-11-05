import api from "../api/axios-instance"
import DataDto from "../DTO/Data"

const SUCCESS = 200

export default class ResidentService {
  static async sendRequest(data) {
    try {
      const postData = new DataDto(data).get()

      const response = await api.post("", postData)

      if (response?.status === SUCCESS)
        return "Заявка стать резидентом удачно отправлена."
    } catch (error) {
      if (error.response) {
        console.error("Ошибка ответа сервера:", error.response.status)
        console.log("Данные ошибки:", error.response.data)
      } else if (error.request) {
        console.error("Ошибка соединения или сервер не ответил.")
      } else {
        console.error("Ошибка запроса:", error.message)
      }

      throw error
    }
  }
}
