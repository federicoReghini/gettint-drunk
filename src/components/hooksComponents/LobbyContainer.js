import React from 'react'
import { View, ImageBackground } from 'react-native-web';

const bgImage = require('../../assets/bgImage.png')
export default function LobbyContainer() {
    return (
        <View>
            <ImageBackground source={bgImage} style={{ height: '100vh', width: '100vw' }} />
        </View>
    )
}
