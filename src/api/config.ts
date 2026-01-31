import axios, {AxiosRequestConfig} from 'axios'

const config: AxiosRequestConfig = {
  validateStatus: function (status: number) {
    return status < 400
  },
  timeout: 10_000,
  withCredentials: true
}

const api = axios.create(config)

export default api
