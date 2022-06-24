import React from 'react'
import { View, ImageBackground, Button, Dimensions } from 'react-native';
import UserContainer from './UserContainer';
import bgImage from '../../assets/bgImage.png'
import { useEffect, useState } from 'react';
import { getApi, postApi } from '../../services/genericServices';
import { createLobby } from '../../services/api/lobbyapi';
import { getUserById } from '../../services/api/userapi';
const LobbyContainer = () => {

    const [state,setState] = useState({
        lobbyId: null
    })

    useEffect(()=>{
       (async()=>{
        
         const LOBBYID = await createLobby("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmdAc3RyaW5nLml0Iiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NTYwODE2NzgsImV4cCI6MTY1NjA4NTI3OH0.0jCUJ5XYeb3uuXe11owQMvTymVrh_sCH8aG_mmtQ5F0") 
        setState({
            ...state,
            lobbyId: LOBBYID
        }) 
       })()
       console.log(state.lobbyId)
    },[])
    
    const generateTestUser = () => {
        return [...new Array(7).keys()].map(index => <View  key={index} style={{ width: "calc(100% / 7)", height: '100%' }}>
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