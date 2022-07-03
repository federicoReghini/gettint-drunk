import React, { useEffect, useState } from 'react';

// native components
// native components
import { View, Button } from 'react-native';

// library components
import ButtonNf from '../ButtonNf';

//playfastuser
import { playFastUser } from '../../../services/api/userapi';
import { getStorage } from '../../../utils/storage';

// ws
import { connectWS, WS } from '../../../services/genericWebSocket';


const JoinLobbyNf = ({ onStartMatch }) => {

  const [state, setState] = useState({
    lobby: null
  });

  useEffect(() => {
    connectWS();
    WS.onmessage = (e) => {
      console.log('ciao')
      console.log('e', e.data)
      if (e.data[0] === "{") {
        setState({
          lobby: JSON.parse(e.data)
        })
      }
      (async () => {

        const TOKEN = await getStorage('token');
        await playFastUser("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3RhdG8iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NjY2Mzk0NywiZXhwIjoxNjU2NjY3NTQ3fQ.AYlV3W - 4fu9K9R4wwIRPeIcGMIeBtkFhRI9 - rCRVtD8")
      })()
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
    </View>
  )
}

export default JoinLobbyNf;