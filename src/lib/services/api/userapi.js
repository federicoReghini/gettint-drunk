import { getApi, postApi, deleteApi, putApi } from "../genericServices";


export async function signUp(body) {
  await postApi('user/registration', body);
}

export async function login(body) {
  await postApi('signin', body);
}
export async function getUsers(token) {
  await getApi('users', token);
}

export async function getUserById(id, token) {
  await getApi(`getuser/${id}`, token);
}

export async function deleteUser(token) {
  await deleteApi('deleteuser', token);
}

export async function editUser(body, token) {
  await putApi('editprofile', body, token);
}