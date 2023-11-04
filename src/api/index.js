import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
    // 'Content-Type': 'multipart/form-data'
  },
})

export const makeGetRequest = async (subURL, params) => {
  const res = await api.get(subURL, { params })
  return res
}

export const makePostRequest = async (subURL, data) => {
  api.defaults.headers = {
    "Content-Type": "application/json",
  }
  const res = await api.post(subURL, data)
  return res
}

export const makePutRequest = async (subURL, data) => {
  api.defaults.headers = {
    "Content-Type": "application/json",
  }
  const res = await api.put(subURL, data)
  return res
}

export const makeDeleteRequest = async (subURL) => {
  api.defaults.headers = {
    "Content-Type": "application/json",
  }
  const res = await api.delete(subURL)
  return res
}

export const uploadFiles = async (subURL, data) => {
  api.defaults.headers = {
    "Content-Type": "multipart/form-data",
  }

  const res = await api.post(subURL, data)
  return res
}
