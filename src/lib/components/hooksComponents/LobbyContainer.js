import React, { useRef, useEffect, useState } from 'react'
import { View, ImageBackground, Button, Dimensions, Platform, Animated, Text } from 'react-native';
import UserContainer from './UserContainer';
import bgImage from '../../assets/bgImage.png'
import { getApi, postApi } from '../../services/genericServices';
import { createLobby, quitLobby } from '../../services/api/lobbyapi';
import { getUserById } from '../../services/api/userapi';
//storage
import { getStorage } from '../../utils/storage';
// import { connectWS, WS } from '../../services/genericWebSocket';
import { eventOn } from '../../eventEmitter';

let token;


const LobbyContainer = ({ mobileToken, onAfterQuit, userId, onRequestCard, onStop, lobbyId }) => {

    const [state, setState] = useState({
        lobbyId: null,
        wsRes: null,
        isCurrent: null
    })

    const prevCurrent = useRef();

    useEffect(() => {
        (async () => {
            token = await getStorage('token')
            // connectWS();

            // WS.onmessage = (e) => {
            //     console.log(JSON.parse(e.data));
            //     setState({
            //         ...state,
            //         wsRes: JSON.parse(e.data)
            //     })
            // }
        })()
        eventOn('match', e => {
            console.log('match', JSON.parse(e));
            setState({
                ...state,
                wsRes: JSON.parse(e),
                lobbyId: lobbyId

            })
        })
    }, [])

    const handleQuit = async () => {

        if (Platform.OS === ('android' || 'ios')) {

            await quitLobby(mobileToken);
            onAfterQuit();
        } else {

            await quitLobby(token);
            onAfterQuit();
        }
    }

    (() => {
        let current = false
        prevCurrent.current = current;

        console.log(prevCurrent.current);

        if (state.wsRes?.hasOwnProperty('ended') === true && state.wsRes !== null) {
            let currentUser = state.wsRes.users.find(element => element.turn === true)
            if (currentUser?.id === userId) {
                current = true
            }
        }

        if (current !== prevCurrent.current) {
            console.log('setto state in LobbyCOntainer');
            setState({
                ...state,
                isCurrent: current
            })
        }
    })()

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
            onRequestCard();
        }
    }

    const stopPlay = () => {
        if (state.isCurrent === true) {
            onStop();
        }
    }
    return (
        <ImageBackground source={bgImage} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: Platform.OS === 'web' ? '100vh' : '100%', width: Platform.OS === 'web' ? '100vw' : '100%', position: 'relative' }}
            resizeMode='cover'>

            {
                state.wsRes?.ended === false ?
                    <View style={{ position: 'absolute', height: '33%', width: '85%', top: '43%', left: '7%', flexDirection: 'row' }}>
                        {state.wsRes?.users?.map(generateUser)}
                    </View>
                    : <View>
                        {state.wsRes?.winners.length > 0 ? <Text>Map Winned</Text> : <Text>No Winner</Text>}

                    </View>}

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



                    <Button style={state.isCurrent === false ? { backgroundColor: "d9eaf7" } : {}}
                        onPress={stopPlay}
                        title={'Stop'}
                    />
                </View>

                <View style={{ width: "10%" }}>

                    <Button
                        title={'Quit'}
                        onPress={handleQuit}
                    />
                </View>
            </View>

        </ImageBackground >

    )
}

export default LobbyContainer