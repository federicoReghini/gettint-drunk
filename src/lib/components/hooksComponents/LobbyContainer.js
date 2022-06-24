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
            const lobby = await postApi("/lobby",{},"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaWFvQGNpYW8uaXQiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1NTk5NTU0NiwiZXhwIjoxNjU1OTk5MTQ2fQ.UnSWIm1iQUHmX-27-3N4a83iOAxLXwUM0QWkefszjGM")
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