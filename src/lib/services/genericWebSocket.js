// // config
// import { WEBSOCKET } from "./config";
//  import * as SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';


// const SOCKET = new SockJS(WEBSOCKET);
// const STOMPCLIENT = Stomp.over(SOCKET);

// export const openConnection = () => {
//     STOMPCLIENT.connect({}, (frame) => {
//         console.log('connected:', frame);
//         STOMPCLIENT.subscribe("/lobby/35", (res) => {
//             console.log(JSON.parse('res', res.body))
//         })
//     })
// }

// /* export const closeConnection = () => {
//     socket.close('disconnected to server')
// } */

// export const wsMessage = () => {
//     STOMPCLIENT.onmessage = event => {
//         // listen to data sent from the websocket server
//         const message = JSON.parse(event.data);
//         console.log('qui', message)
//     }
// }
// export const sendDataToWs = () => {

//     STOMPCLIENT.send("/app/room/35/15")
// }

