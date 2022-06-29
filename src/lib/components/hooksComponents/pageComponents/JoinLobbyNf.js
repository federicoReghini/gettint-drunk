import React, { useEffect, useState } from 'react';

// native components
import { View, Button } from 'react-native';
import { connectWS, WS } from '../../../services/genericWebSocket';
import ButtonNf from '../ButtonNf';
import CountDownNf from '../CountDownNf';




const hoursMinSecs = { hours: 0, minutes: 0, seconds: 10 }


const JoinLobbyNf = ({ onEndTimer, onStartMatch }) => {




  const [state, setState] = useState({
    lobby: null
  });

  useEffect(() => {
    connectWS();

    WS.onmessage = (e) => {

      if (e.data[0] === "{") {

        setState({
          lobby: JSON.parse(e.data)
        })
      }

    }
  }, [])


  const player = (player, key) => {

    return (

      <ButtonNf key={`${key}-${player?.id}`} title={`Player ${player?.username}`} />
    )
  }



  return (
    <View>

      {
        state.lobby?.user?.length > 0 && state.lobby?.user?.map(player)
      }
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginVertical: '0.5%' }}>
        <Button
          onPress={onStartMatch}
          title='Start Game' />
      </View>
      <CountDownNf onEndTimer={onEndTimer} hoursMinSecs={hoursMinSecs} />
    </View>
  )
}

export default JoinLobbyNf;