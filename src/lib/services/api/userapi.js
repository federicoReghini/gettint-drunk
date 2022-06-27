import { getApi, postApi, deleteApi, putApi } from "../genericServices";


export async function signUp(body) {
  return await postApi('user/registration', body);
}

export async function login(body) {
  return await postApi('signin', body);
}

export async function updateAuthToken(token) {
  return await postApi('updateAuthToken', token);
}

export async function getUsers() {
  return await getApi('users');
}

export async function getUserById(id) {
  return await getApi(`getuser/${id}`);
}

export async function deleteUser(token) {
  return await deleteApi('deleteuser', token);
}

export async function editUser(body, token) {
  return await putApi('editprofile', body, token);
}