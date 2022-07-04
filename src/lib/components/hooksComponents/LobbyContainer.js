import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Dimensions, Platform, Animated, Text, TouchableOpacity } from 'react-native';
import UserContainer from './UserContainer';
import bgImage from '../../assets/bgImage.png'
import { quitLobby } from '../../services/api/lobbyapi';

//storage
import { getStorage } from '../../utils/storage';
import { eventOn } from '../../eventEmitter';

let token;


const LobbyContainer = ({ mobileToken, onAfterQuit, userId, onRequestCard, onStop, lobbyId }) => {
    console.log('lobbyid', lobbyId)
    const [state, setState] = useState({
        lobbyId: null,
        wsRes: null,
        isCurrent: false
    })

    useEffect(() => {
        (async () => {
            token = await getStorage('token')
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

    useEffect(() => {
        let current = false;
        if (state.wsRes?.hasOwnProperty('ended') === true && state.wsRes !== null) {
            console.log('primo if', 'user', userId)
            let currentUser = state.wsRes.hands.find(element => element.turn === true)
            console.log('currentUser', currentUser, 'userId', userId)
            if (currentUser?.user.id === userId) {
                console.log('secondo if', 'user', userId)
                current = true
            }
        }
        setState({
            ...state,
            isCurrent: current
        })
    }, [state.wsRes])

    const generateUser = (element, index) => {
        const handOfPlayer = state.wsRes.hands.find(hand => hand.user.username === element.username)
        return (<View key={index} style={{ width: Platform.OS === 'web' ? "calc(100% / 7)" : (Dimensions.get('window').width / 7), height: '100%' }
        }>

            <UserContainer
                animatedValue={new Animated.Value(0)}
                username={element.username}
                id={element.id}
                cardValue={handOfPlayer.cardValue}
            /* score={element.score} */
            ></UserContainer>
        </View >)
        /*   return [...new Array(7).keys()].map(index => <View key={index} style={{ width: "calc(100% / 7)", height: '100%' }}>
              <UserContainer
              ></UserContainer>
          </View>) */

    }


    const requestCard = () => {
        console.log('current', state.isCurrent)
        onRequestCard();

    }

    const stopPlay = () => {
        console.log('current', state.isCurrent)
        onStop();

    }

    const generateWinners = (player, key) => {
        return (
            <View key={key + player.id}>
                <Text>{player.username + 'Won!'}</Text>
            </View>

        )
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
                        {state.wsRes?.winners.length > 0 ? state.wsRes?.winners.map(generateWinners) : <Text>No Winner</Text>}

                    </View>}

            <View style={{
                flexDirection: 'row', bottom: "5%", justifyContent: 'center', position: 'absolute', width: '100%'
            }}>
                <View style={{ width: "10%", marginRight: "2%" }}>
                    <TouchableOpacity style={state.isCurrent === false ? { display: 'none' } : { backgroundColor: '#2196F3', padding: 10 }}
                        onPress={requestCard}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Card
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: "10%", marginRight: "2%" }}>



                    <TouchableOpacity style={state.isCurrent === false ? { display: 'none' } : { backgroundColor: '#2196F3', padding: 10 }}
                        onPress={stopPlay}

                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Stop
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: "10%" }}>

                    <TouchableOpacity style={{ backgroundColor: '#2196F3', padding: 10 }}
                        onPress={handleQuit}
                    >

                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Quit
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground >

    )
}

export default LobbyContainer