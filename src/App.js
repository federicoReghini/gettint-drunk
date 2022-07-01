import React, { useEffect } from 'react';
import { eventEmit, eventOn, getStorage, JoinLobbyNf } from './lib';
import { createLobby } from './lib/services/api/lobbyapi';
import { deleteApi } from './lib/services/genericServices';

// library

// navigation

var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws')

let id;
let token;
let lobby;
let connectionEstablished;


(async () => {
  token = await getStorage('token')
  await deleteApi('lobby', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3RhdG8iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NjY4MzU1MSwiZXhwIjoxNjU2Njg3MTUxfQ.-n2v9ONknQ94i8I1AFuJVusMxg8y6SG2AN1GqtoISNw')
  id = await getStorage('user');

})()

function App({navigation}) {


  const sendMessage = (message) => {
    WS.send(JSON.stringify(message));
  }
  useEffect(() => {
    // WS.onopen = () => {
    //   console.log("CONNECTED");
    // }
    WS.onmessage = (event) => {
      console.log('onmessage', JSON.parse(event.data));
      eventEmit('lobby', event.data)
      lobby = JSON.parse(event.data)
    }

    createLobby('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3RhdG8iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NjY4MzU1MSwiZXhwIjoxNjU2Njg3MTUxfQ.-n2v9ONknQ94i8I1AFuJVusMxg8y6SG2AN1GqtoISNw').then(response => {
      // console.log(response.data);
      lobby = response.data;

      WS.onopen = () => {
        console.log("CONNECTED");
      }

      connectionEstablished = false;
      setTimeout(() => {
        if (lobby != null && WS != null) {
          const message = {
            user_id: id,
            method: "connectLobby"
          }
          sendMessage(message);
          connectionEstablished = true;
        }
      }, 1000);
    })

  }, [WS.onmessage])

  const handleNavigation = () => {
    // navigation.navigate(routes.GAME);
  }


  return (
    <JoinLobbyNf onStartMatch={handleNavigation} id={id} />
  )
}

export default App