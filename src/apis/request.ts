import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'

// 创建 Axios 实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROXY, // 替换为你的 API 基础 URL
  timeout: 10000 // 设置请求超时时间
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以添加请求头、添加 token 等
    // config.headers['Authorization'] = 'Bearer your_token';
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data // 直接返回数据
  },
  (error) => {
    const { response } = error
    if (response) {
      // 处理 403 错误
      if (response.status === 403) {
        console.error('权限不足，访问被拒绝。')
        // 在这里可以重定向或显示提示
      }
      return Promise.reject(error)
    } else {
      console.error('网络错误，请检查您的连接。')
      return Promise.reject(error)
    }
  }
)

// 封装 GET 请求
const get = <T>(
  url: string,
  params?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, { params })
}

// 封装 POST 请求
const post = <T>(
  url: string,
  data?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, data)
}

// 封装 PUT 请求
const put = <T>(
  url: string,
  data?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  return axiosInstance.put<T>(url, data)
}

// 封装 DELETE 请求
const del = <T>(
  url: string,
  params?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  return axiosInstance.delete<T>(url, { params })
}

// 导出所有方法
export { get, post, put, del }
