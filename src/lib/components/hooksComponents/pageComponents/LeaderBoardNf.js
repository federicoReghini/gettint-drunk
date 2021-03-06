import React, { useEffect, useState } from 'react';

// native components
import { View, Text, Image, ImageBackground, Pressable, Platform, ScrollView } from 'react-native';

// styles
import { styles } from '../../../assets/styles/styleLeaderBoard';

import beer from '../../../assets/img/icon/birra.png';
import ship from '../../../assets/img/icon/futuramaship.png';
import bg from '../../../assets/img/background/leaderboardbg.jpg';
import { getUsers } from '../../../services/api/userapi';
import { getStorage } from '../../../utils/storage';

const initState = {
  players: []
}

let id;

const LeaderBoardNf = ({ onClickNavigate }) => {

  const [state, setState] = useState(initState);

  function callbackUseEffect() {
    //api call for get players nickname and score
    (async () => {

      const res = await getUsers();

      id = await getStorage('user')

      setState({
        ...state,
        players: res?.data
      })
    })()
  }

  function playerList(player, key) {
    return (
      <View
        key={`${key}-${player.score}`}
      >
        <View
          style={styles.leaderBoardContainer}

        >
          <View

            style={styles.leaderRow}
          >
            <Text
              style={{
                color: player.id === id ? '#B72B29' : '#ffbf43',
                fontSize: 20,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 1, height: 1 },
                textAlign: 'center',
              }}
            >
              {
                player.id === id && <Image source={beer} style={{ width: 20, height: 20 }} />
              }
              {player.username}

            </Text>

          </View>
          <View style={styles.leaderRow}>
            <Text style={{
              color: player.id === id ? '#B72B29' : '#fff',
              fontSize: 20,
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: 1, height: 1 },
              textAlign: 'center',
            }}>
              {player.score}
            </Text>
          </View>
        </View>
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
    <ImageBackground
      source={bg}
      style={{ width: '100%', height: Platform.OS === 'web' ? '100vh' : '100%', flex: Platform.OS === 'web' ? 0 : 1 }}
    >

      <Pressable
        onPress={onClickNavigate}
      >
        <Image source={ship} style={styles.imgShip} />
      </Pressable>

      {
        Platform.OS === 'web' ?
          <View style={{ backgroundColor: 'rgba(255, 246, 143, .6)', paddingVertical: 20, marginTop: 40 }}>

            <View style={styles.titleWrapper}>
              <Text style={styles.leader}>
                Leader
              </Text>
              <Text style={{ ...styles.leader, ...styles.board }}>
                Board
              </Text>
            </View>

            <View style={styles.tableHead}>
              <Text style={styles.nickname}>Nickname</Text>
              <Text style={{ ...styles.nickname, ...styles.score }}>score</Text>
            </View>
            {
              state.players.length > 0 && state.players.sort(sortPlayer).map(playerList)
            }
          </View>
          :
          <ScrollView style={{ backgroundColor: 'rgba(255, 246, 143, .6)', paddingVertical: 20, marginTop: 40 }}>

            <View style={styles.titleWrapper}>
              <Text style={styles.leader}>
                Leader
              </Text>
              <Text style={{ ...styles.leader, ...styles.board }}>
                Board
              </Text>
            </View>

            <View style={styles.tableHead}>
              <Text style={styles.nickname}>Nickname</Text>
              <Text style={{ ...styles.nickname, ...styles.score }}>score</Text>
            </View>
            {
              state.players.length > 0 && state.players.sort(sortPlayer).map(playerList)
            }
          </ScrollView>
      }
    </ImageBackground>
  )
}

export default LeaderBoardNf;