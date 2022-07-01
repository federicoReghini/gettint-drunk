// config
import { WEBSOCKET } from "./config";
import { eventEmit } from "../eventEmitter";


export const WS = new WebSocket(WEBSOCKET);

export const connectWS = () => {
    WS.onopen = () => {
        console.log('connected to server')
    };
}


export const sendDataToWs = (name, { lobby, userId }) => {
    let pathName = ''
    switch (name) {
        case "requestCard":
            pathName = {
                user_id: userId,
                method: "requestCard"
            }
            break;
        case "stopPlaying":
            pathName = {
                user_id: userId,
                method: "stopPlaying"
            }
            break;
        case "changeLobbyAccess":
            pathName = {
                user_id: userId,
                method: "changeLobbyAccess",
                accessType: !lobby
            }
            break;
        case "startMatch":
            pathName = {
                user_id: userId,
                method: "startMatch"
            }
            break;
        case "endMatch":
            pathName = {
                user_id: userId,
                method: "endMatch"
            }
            break;
        case "quitMatch":
            pathName = {
                user_id: userId,
                method: "quitMatch"
            }
            break;

    }
    WS.sendMessage(pathName);

}

