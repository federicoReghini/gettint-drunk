import axios from "axios";
import { deleteLobby } from "./api/lobbyapi";
// config
import { BASEURL, TIMEOUT } from "./config";

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT
})

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log("error", error)
  if (error?.response.status === 500 && error?.config?.url === "lobby" && error?.config?.method === "post") {//passare successivamente errore modificato
    (async () => {
      await deleteLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOaWNvUm9iaW5AZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTYwODA1NTUsImV4cCI6MTY1NjA4NDE1NX0.HJ5Ss8LkiS8qhLv2U-ofi5WeMS0D8Fww8Z9v3jbSosQ")
    })()
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