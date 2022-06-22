import React from 'react'
import { View, ImageBackground, Button, Dimensions } from 'react-native-web';
import UserInfoContainer from './UserInfoContainer';
const bgImage = require('../../assets/bgImage.png')
export default function LobbyContainer() {
    const generateTestUser = () => {

        let arrayTmp = []
        for (let index = 0; index < 7; index++) {
            arrayTmp.push(
                <View>
                    {/* <UserInfoContainer
                    key={index}></UserInfoContainer> */}
                </View>)
        }
        return arrayTmp;
    }
    return (
        <ImageBackground source={bgImage} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', position: 'relative' }}
            resizeMode='cover'>
            <View style={{ position: 'absolute', backgroundColor: 'white', height: '33%', width: '75%', top: '43%', left: '10%' }}></View>
            {/* generateTestUser() */}
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
