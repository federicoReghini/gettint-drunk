import { getApi, postApi, deleteApi, putApi } from "../genericServices";

export async function signUp(body) {
  return await postApi('user/registration', body);
}

export async function login(body) {
  return await postApi('signin', body);
}
export async function getUsers(token) {
  return await getApi('users', token);
}

export async function getUserById(id, token) {
  return await getApi(`getuser/${id}`, token);
}

export async function deleteUser(token) {
  return await deleteApi('deleteuser', token);
}

export async function editUser(body, token) {
  return await putApi('editprofile', body, token);
}