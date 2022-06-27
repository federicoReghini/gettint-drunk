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
import { openConnection, wsMessage, sendDataToWs } from '../../services/genericWebSocket';
const LobbyContainer = () => {

    const [state, setState] = useState({
        lobbyId: null
    })

    useEffect(() => {
        (async () => {
            const TOKEN = await getStorage('token')
            const LOBBYID = await createLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmdAc3RyaW5neS5pdCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjU2MzQxNzIyLCJleHAiOjE2NTYzNDUzMjJ9.mfD5uFjr8S57-y3YeFVRAWfcL6Nc_9gw_Ai1fgUqPnE")
            setState({
                ...state,
                lobbyId: LOBBYID
            })
        })()
        console.log(state.lobbyId)
        openConnection();
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
                <Button
                    title='testWB'
                    onPress={async () => {
                        /* const QUIT = await quitLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmdAc3RyaW5neS5pdCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjU2MzQxNzIyLCJleHAiOjE2NTYzNDUzMjJ9.mfD5uFjr8S57-y3YeFVRAWfcL6Nc_9gw_Ai1fgUqPnE")
                        console.log('quit', QUIT);
 */
                        sendDataToWs();
                    }}></Button>
                {generateTestUser()}
            </View>

            {/*  <View style={{
                flexDirection: 'row', bottom: 50, justifyContent: 'center'
            }}>
                <Button
                    title={'pesca una carta'}></Button>
                <Button
                    title={'Stop'}></Button>
            </View> */}
        </ImageBackground >

    )
}

export default LobbyContainer