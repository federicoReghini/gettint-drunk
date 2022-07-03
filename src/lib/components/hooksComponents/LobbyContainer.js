import React from 'react'
import { View, ImageBackground, Button, Dimensions, Platform, Animated } from 'react-native';
import UserContainer from './UserContainer';
import bgImage from '../../assets/bgImage.png'
import { useEffect, useState } from 'react';
import { getApi, postApi } from '../../services/genericServices';
import { createLobby, quitLobby } from '../../services/api/lobbyapi';
import { getUserById } from '../../services/api/userapi';
//storage
import { getStorage } from '../../utils/storage';
import { connectWS, WS } from '../../services/genericWebSocket';
import { eventOn } from '../../eventEmitter';

let token;


const LobbyContainer = ({ mobileToken, onAfterQuit, userId, game }) => {

    const [state, setState] = useState({
        lobbyId: null,
        wsRes: null,
        isCurrent: null
    })

    useEffect(() => {
        (async () => {
            token = await getStorage('token')
            const LOBBYID = await createLobby(token)
            setState({
                ...state,
                lobbyId: LOBBYID
            })
        })()
        connectWS();
        WS.onmessage = (e) => {

            if (e.data[0] === "{") {

                setState({
                    ...state,
                    wsRes: JSON.parse(e.data)
                })
            }


        }
    }, [])


    /*   (() => {
          let current = false
          if (game?.hasOwnProperty('lobby') === false) {
              let currentUser = game.find(element => element.turn === true)
              if (currentUser.id === userId) {
                  current = true
              }
          }
          setState({
              ...state,
              isCurrent: current
          })
      })() */

    /*   const handleQuit = async () => {
  
          Platform.OS === 'web' ?
              (await quitLobby(token), onAfterQuit())
              :
              (await quitLobby(mobileToken), onAfterQuit())
      } */

    const generateUser = (element, index) => {

        return (<View key={index} style={{ width: Platform.OS === 'web' ? "calc(100% / 7)" : (Dimensions.get('window').width / 7), height: '100%' }
        }>

            <UserContainer
                animatedValue={new Animated.Value(0)}
                username={element.username}
                id={element.id}
                cardValue={element.cardValue}
            /* score={element.score} */
            ></UserContainer>
        </View >)
        /*   return [...new Array(7).keys()].map(index => <View key={index} style={{ width: "calc(100% / 7)", height: '100%' }}>
              <UserContainer
              ></UserContainer>
          </View>) */

    }

    const requestCard = () => {
        if (state.isCurrent === true) {
            //do stuff
        }
    }

    const stopPlay = () => {
        if (state.isCurrent === true) {
            //do stuff
        }
    }
    return (
        <ImageBackground source={bgImage} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: Platform.OS === 'web' ? '100vh' : '100%', width: Platform.OS === 'web' ? '100vw' : '100%', position: 'relative' }}
            resizeMode='cover'>

            <View style={{ position: 'absolute', height: '33%', width: '85%', top: '43%', left: '7%', flexDirection: 'row' }}>
                {state.wsRes?.user?.map(generateUser)}
            </View>

            <View style={{
                flexDirection: 'row', bottom: "5%", justifyContent: 'center', position: 'absolute', width: '100%'
            }}>

                <View style={{ width: "10%", marginRight: "2%" }}>

                    <Button style={state.isCurrent === false ? { backgroundColor: "d9eaf7" } : {}}
                        title={'Card'}
                        onPress={requestCard}
                    />
                </View>
                <View style={{ width: "10%", marginRight: "2%" }}>



                    <Button tyle={state.isCurrent === false ? { backgroundColor: "d9eaf7" } : {}}
                        onPress={stopPlay}
                        title={'Stop'}
                    />
                </View>

                <View style={{ width: "10%" }}>

                    <Button
                        title={'Quit'}
                    /*  onPress={handleQuit} */
                    />
                </View>
            </View>

        </ImageBackground >

    )
}

export default LobbyContainer