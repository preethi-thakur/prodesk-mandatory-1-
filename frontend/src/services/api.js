import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'An error occurred'

    return Promise.reject(new Error(errorMessage))
  }
)

export const cupcakeApi = {
  getAll: () => api.get('/cupcakes'),
  getById: (id) => api.get(`/cupcakes/${id}`),
  create: (data) => api.post('/cupcakes', data),
  update: (id, data) => api.put(`/cupcakes/${id}`, data),
  delete: (id) => api.delete(`/cupcakes/${id}`),
}

export const getData = (response) => response?.data?.data
export const getMessage = (response) => response?.data?.message

export default api