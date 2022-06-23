import React from 'react'
import { View, ImageBackground, Button, Dimensions } from 'react-native';
import UserContainer from './UserContainer';
import bgImage from '../../assets/bgImage.png'
import { useEffect, useState } from 'react';
import { postApi } from '../../services/genericServices';
const LobbyContainer = () => {

    const [state,setState] = useState({
        lobbyId : null
    })
    useEffect(()=>{
        (async()=>{
            const lobby = await postApi("/lobby",{},"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaWFvQGNpYW8uaXQiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NTk5NDI2MiwiZXhwIjoxNjU1OTk3ODYyfQ.y-LMOpSJr2LZ2K2Y1mE9bmCuVjMT9wvpLt1fsuG2FfU")
            setState({
                ...state,
                lobbyId: lobby
            }) 
        })()
        console.log("lobby",state.lobbyId)
    },[])
    const generateTestUser = () => {
        let arrayTmp = []
        for (let index = 0; index < 7; index++) {
            arrayTmp.push(
                <View style={{ width: "calc(100% / 7)", height: '100%' }}>
                    <UserContainer
                        key={index}></UserContainer>
                </View>)
        }
        return arrayTmp;
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