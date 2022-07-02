// config
import { WEBSOCKET } from "./config";
import { eventEmit, eventOn } from "../eventEmitter";


export const WS = new WebSocket(WEBSOCKET);

export const connectWS = () => {
    WS.onopen = () => {
        console.log('connected')
    };
}

export const sendMessage = (message) => {
    WS.send(JSON.stringify(message));
}

export const getMessage = (idUser) => {

    WS.onmessage = (event) => {
        console.log('onmessage', JSON.parse(event.data));

        const WSDATA = JSON.parse(event.data);

        if (WSDATA.hasOwnProperty("idLobby")) {
            eventEmit('lobby', event.data)
        } else {
            const ISMATCH = eventOn('match', e => e)
            console.log('match', ISMATCH);
            if (ISMATCH == null) {
                eventEmit('match', event.data)
                setTimeout(() => {
                    requestCard(idUser);
                }, 1000);
            } else {
                eventEmit('match', event.data)
            }
        }
    }
}

export const endMatch = (idUser) => {
    console.log("check end match...");
    const message = {
       user_id: idUser,
       method: "checkEndMatch",
    }
    sendMessage(message);
 }

export const requestCard = (idUser) => {
    const message = {
       user_id: idUser,
       method: "requestCard"
    }
    sendMessage(message);
     setTimeout(() => {
       endMatch(idUser);
    }, 100);
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
/**
 * send a message to ws server with the method chose 
 * @param  {string} method methods: requestCard | stopPlaying | changeLobbyAccess | startMatch | endMatch | quitMatch
 * @param  {boolean} isLobby
 * @param  {number} userId get it from storage
 */
export const sendRequestToWs = (method, isLobby = false, userId) => {
    let pathName = ''
    switch (method) {
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
                accessType: !isLobby
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

    sendMessage(pathName);
}