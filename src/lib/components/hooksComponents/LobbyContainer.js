import React from 'react'
import { View, ImageBackground, Button, Dimensions } from 'react-native';
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
        /*  eventOn("handleSocketResponse", (obj) => {
             setState({
                 ...state,
                 wsRes: obj
             })
         }) */
        (async () => {
            const TOKEN = await getStorage('token')
            const LOBBYID = await createLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmdAc3RyaW5neS5pdCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjU2MzQxNzIyLCJleHAiOjE2NTYzNDUzMjJ9.mfD5uFjr8S57-y3YeFVRAWfcL6Nc_9gw_Ai1fgUqPnE")
            setState({
                ...state,
                lobbyId: LOBBYID
            })
        })()
        console.log(state.lobbyId)
    }, [])

    const generateTestUser = () => {
        return [...new Array(7).keys()].map(index => <View key={index} style={{ width: "calc(100% / 7)", height: '100%' }}>
            <UserContainer
            ></UserContainer>
        </View>)

    }
    return (
        <ImageBackground source={bgImage} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', position: 'relative' }}
            resizeMode='cover'>

            <View style={{ position: 'absolute', height: '33%', width: '85%', top: '43%', left: '7%', flexDirection: 'row' }}>
                {generateTestUser()}
            </View>
            {state.wsRes !== null && state.wsRes?.hasOwnProperty === false ?
                <View style={{
                    flexDirection: 'row', top: 0, justifyContent: 'center', postion: 'absolute'
                }}>

                    <Button
                        title={'pesca una carta'}></Button>
                    <Button
                        title={'Stop'}></Button>

                </View>
                :
                <View style={{
                    flexDirection: 'row', top: 0, justifyContent: 'center', postion: 'absolute'
                }}>

                    <Button
                        title={'Start Game'}></Button>

                </View>
            }
        </ImageBackground >

    )
}

export default LobbyContainer