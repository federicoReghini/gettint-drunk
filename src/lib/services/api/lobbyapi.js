import { postApi, deleteApi, putApi } from "../genericServices";


const RESOURCE = 'lobby';

export async function createLobby(token) {
  return await postApi(RESOURCE, {}, token);
}

export async function deleteLobby(token) {
  await deleteApi(RESOURCE, token);
}

export async function editLobby(id, body, token) {
  return await putApi(`${RESOURCE}/${id}`, body, token);
}