import React from 'react'
import { View, ImageBackground, Button, Dimensions, Platform } from 'react-native';
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

const LobbyContainer = () => {

    const [state, setState] = useState({
        lobbyId: null,
        wsRes: null
    })

    useEffect(() => {
        (async () => {
            const TOKEN = await getStorage('token')
            const LOBBYID = await createLobby(TOKEN)
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

    const generateUser = (element, index) => {

        return (<View key={index} style={{ width: Platform.OS === 'web' ? "calc(100% / 7)" : "30%", height: '100%' }
        }>
            <UserContainer
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
                    <Button
                        title={'Card'} />
                </View>
                <View style={{ width: "10%" }}>
                    <Button
                        title={'Stop'} />
                </View>
            </View>

        </ImageBackground >

    )
}

export default LobbyContainer