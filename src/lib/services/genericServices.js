import axios from "axios";

import { deleteLobby } from "./api/lobbyapi";
// config
import { BASEURL, TIMEOUT } from "./config";
//storage
import { getStorage, setStorage } from "../utils/storage";
import { updateAuthToken } from "./api/userapi";
const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT
})



axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log("error", error)
  switch (error.response.status) {
    case (500):
      if (error.config?.url === "lobby" && error.config?.method === "post") {//passare successivamente errore modificato
        /*  (async () => {
           const TOKEN = await getStorage('token')
           await deleteLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmdAc3RyaW5neS5pdCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjU2MzM4NDM5LCJleHAiOjE2NTYzNDIwMzl9.KIp_pmac79d7vaRl-GsWTAV0nYjtdsxGQGBFieodr0w")
         })() */
      }
      break;
    case (401):
      if (error.response.status === 401) {
        (async () => {
          const { token, refreshToken } = await updateAuthToken();
          setStorage('token', token)
          setStorage('refreshToken', refreshToken)
        })()
      }
  }


})

// axiosInstance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     const originalRequest = error.config;
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     if (error.response.status === 401 &&
//       originalRequest.url === `${BASEURL}/updateAuthToken`) {
//       return Promise.reject(error);
//     }

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true

//       //api call updateAuthToken
//       if (localStorage.getItem('refreshToken') !== null) {

//         updateAuthTokenPostApi().then(res => {
//           const { token, refreshToken } = res.data;
//           setLocalStorage('token', token);
//           setLocalStorage('refreshToken', refreshToken);
//           axios.defaults.headers.common['Authorization'] = 'Bearer' + getLocalStorage("token");
//         });
//       }
//     }

//     return Promise.reject(error);
//   });

export function responseApi(response) {
  //general function for get the response
  return response?.data;
}

export function responseApiError(error) {
  //general function in case of wrong api call
  return {
    message: error?.message,
    status: error?.status,
  };
}

export async function postApi(resource, obj, header = null) {
  return axiosInstance
    .post(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    })
    .then(responseApi())
    .catch(responseApiError());
}

export async function getApi(resource, header = null) {
  //function for get api call
  return axiosInstance
    .get(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    })
    .then(responseApi())
    .catch(responseApiError());
}

export async function putApi(resource, obj, header = null) {
  //function for put api call
  return axiosInstance
    .put(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    })
    .then(responseApi())
    .catch(responseApiError());
}

export async function deleteApi(resource, header = null) {
  return axiosInstance
    .delete(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    })
    .then(responseApi())
    .catch(responseApiError());
}
