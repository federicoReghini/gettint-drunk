// // config
// import { WEBSOCKET } from "./config";
// import * as SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';
// import { eventEmit } from "../eventEmitter";


// const SOCKET = new SockJS(WEBSOCKET);
// const STOMPCLIENT = Stomp.over(SOCKET);

// export const openConnection = () => {
//     STOMPCLIENT.connect({}, (frame) => {
//         console.log('connected:', frame);
//         STOMPCLIENT.subscribe("/lobby/35", (res) => {
//             eventEmit("handleSocketResponse", res.body)
//             console.log(JSON.parse('res', res.body))
//         })
//     })
// }

// export const wsMessage = () => {
//     STOMPCLIENT.onmessage = event => {
//         // listen to data sent from the websocket server
//         const message = JSON.parse(event.data);
//         console.log('qui', message)
//     }
// }
// export const sendDataToWs = (name, { lobbyId, userId, maxUser, accessType }) => {
//     let pathName = ''
//     switch (name) {
//         case "requestCard":
//             pathName = `/app/room/${lobbyId}/request_card/${userId}`
//             break;
//         case "stopPlaying":
//             pathName = `/app/room/${lobbyId}/stop_playing/${userId}`
//             break;
//         case "changeMaxPlayer":
//             pathName = `/app/room/${lobbyId}/resize/${maxUser}/${userId}`
//             break;
//         case "changeLobbyAccess":
//             pathName = `/app/room/${lobbyId}/access/${!accessType}/${userId}`
//             break;
//         case "startMatch":
//             pathName = `/app/room/${lobbyId}/start/${userId}`
//             break;
//         case "endMatch":
//             pathName = `/app/room/${lobbyId}/check_end_match`
//             break;
//         case "quitMatch":
//             pathName = `/app/room/${lobbyId}/quit_match/${userId}`
//             break;
//         case "checkEndMatch":
//             pathName = `/app/room/${lobbyId}/check_end_match`
//             break;
//     }
//     STOMPCLIENT.send(pathName);

// }

