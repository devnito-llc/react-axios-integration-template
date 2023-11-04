import { makeGetRequest, makePostRequest, makePutRequest } from "../api"

export const getUserDetails = async () => {
  try {
    const resp = await makeGetRequest("/me")
    console.log("request successfull : ", resp)
    return resp
  } catch (error) {
    console.log("request errro: ", error)
  }
}

export const getBankDetails = async () => {
  try {
    const resp = await makeGetRequest("/get-bank-details")
    console.log("request successfull : ", resp)
    return resp
  } catch (error) {
    console.log("request errro: ", error)
  }
}

export const getRefreshToken = async () => {
  try {
    const resp = await makeGetRequest("/refresh")
    console.log("request successfull : ", resp)
    return resp
  } catch (error) {
    console.log("request errro: ", error)
  }
}

// POST
export const loginUser = async (data) => {
  try {
    const resp = await makePostRequest("/login", data)
    console.log("request successfull : ", resp)
    return resp
  } catch (error) {
    console.log("request errro: ", error)
    return error
  }
}

// Edit
export const editBankDetails = async (id, data) => {
  try {
    const resp = await makePutRequest(`/edit-bank-details/${id}`, data)
    console.log("request successfull : ", resp)
    return resp
  } catch (error) {
    console.log("request errro: ", error)
  }
}
