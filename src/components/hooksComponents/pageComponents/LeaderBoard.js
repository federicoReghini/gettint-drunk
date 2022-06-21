import React, { useEffect, useState } from 'react';

// native components
import { View, Text, Image, FlatList, ImageBackground } from 'react-native-web';

// styles
import { styles } from '../../../assets/styles/styleLeaderBoard';

import beer from '../../../assets/img/icon/birra.png';
import bg from '../../../assets/img/background/leaderboardbg.jpg';

const initState = {
  players: [
    {
      id: 0,
      nickname: 'Federico',
      score: 200
    },
    {
      id: 1,
      nickname: 'Nicola',
      score: 400
    },
    {
      id: 2,
      nickname: 'Luca',
      score: 100
    },
    {
      id: 3,
      nickname: 'Andrdsaea',
      score: 4300
    },
    {
      id: 4,
      nickname: 'dff',
      score: 242300
    },
    {
      id: 5,
      nickname: 'fdfsfs',
      score: 243400
    },
    {
      id: 6,
      nickname: 'fsdfsdatdt',
      score: 22200
    },
  ],
}

const id = 1

const LeaderBoard = () => {

  const [state, setState] = useState(initState);

  function callbackUseEffect() {
    //api call for get players nickname and score
  }

  function playerList(player, key) {
    return (
      <View
        key={`${key}-${player.score}`}
        style={styles.leaderBoardContainer}
      >
        <Text
          style={{
            color: player.id === id ? '#bce7c8' : '#000',
            fontSize: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: 1, height: 1 },
          }}
        >
          {
            player.id === id && <Image source={beer} style={{ width: 20, height: 20 }} />
          }
          {player.nickname}

        </Text>
        <Text>
          {player.score}
        </Text>
        {/* <View style={gstyles.flexR}> */}
        {/* </View> */}

      </View>
    )
  }

  function sortPlayer(a, b) {
    if (a.score > b.score) return -1;
    if (a.score == b.score) return 0;
    if (a.score < b.score) return 1;
  }

  useEffect(callbackUseEffect, [])

  return (
    <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
      <View style={styles.titleWrapper}>
        <Text style={styles.leader}>
          Leader
        </Text>
        <Text style={{ ...styles.leader, ...styles.board }}>
          Board
        </Text>
      </View>

      <View style={styles.tableHead}>
        <Text>Nickname</Text>
        <Text>score</Text>
      </View>
      {
        state.players.length > 0 && state.players.sort(sortPlayer).map(playerList)
      }
      {/* <FlatList  /> */}
    </ImageBackground>
  )
}

export default LeaderBoard