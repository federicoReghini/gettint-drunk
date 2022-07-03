import React, { useEffect, useState } from 'react';

// native components
// native components
import { View, Button } from 'react-native';

// library components
import ButtonNf from '../ButtonNf';

import { eventOn } from '../../../eventEmitter';

const JoinLobbyNf = ({ onStartMatch, id }) => {

  const [state, setState] = useState({
    lobby: []
  });

  useEffect(() => {
    eventOn('lobby', (e) => {
      console.log('event', JSON.parse(e));
      setState({
        ...state,
        lobby: JSON.parse(e)
      })
    })

  },[])

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