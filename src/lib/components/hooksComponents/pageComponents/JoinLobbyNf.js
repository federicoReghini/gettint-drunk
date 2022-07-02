import React, { useEffect, useState } from 'react';

// native components
// native components
import { View, Button } from 'react-native';

// library components
import ButtonNf from '../ButtonNf';

//playfastuser
// import { playFastUser } from '../../../services/api/userapi';
// import { getStorage } from '../../../utils/storage';

// // ws
// import { connectWS, WS } from '../../../services/genericWebSocket';
// import { StompSocketState } from '@stomp/stompjs';
import { eventOn } from '../../../eventEmitter';
var WS = new WebSocket('ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws')



const JoinLobbyNf = ({ onStartMatch, id }) => {


  console.log('id', id);

  const [state, setState] = useState({
    lobby: []
  });

  useEffect(() => {
    eventOn('lobby', (e) => {
      console.log('event',e);
      setState({
        ...state,
        lobby: JSON.parse(e)
      })
    })

  },[WS.onmessage])

  const player = (player, key) => {

    return (

      <ButtonNf key={`${key}-${player?.id}`} title={`Player ${player?.username}`} />
    )
  }

  return (
    <View>

     {state.lobby?.users?.map(player)}
    

      {
        (state.lobby?.users?.length >= 2 && state.lobby?.users[0].id === id) &&
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginVertical: '0.5%' }}>
          <Button
            onPress={onStartMatch}
            title='Start Game' />
        </View>
      }
    </View>
  )
}

export default JoinLobbyNf;