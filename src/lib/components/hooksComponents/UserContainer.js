import React, { useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native';
import { assignIdToIconCard } from '../../utils/iconArrayAssign';
import BeerContainer from './BeerContainer/BeerContainer';
import beerTray from './../../assets/beerTray.png'
const UserContainer = ({ username }) => {
    const [state, setState] = useState({
        playerIcon: {}
    })
    const IDTMP = 0
    useEffect(() => {
        setState({
            playerIcon: assignIdToIconCard(IDTMP)
        })
    }, [])
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={{
                    fontSize: 20, fontWeight: 700, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 10, color: 'white'
                }}>{username}</Text>
            </View>
            <View style={{ width: '50%', height: '50%', marginBottom: "5%" }}>{/* cardIcon */}

                <Image style={{ height: '100%', width: '100%' }}
                    source={state.playerIcon.regular} />
            </View>
            <View style={{ height: '40%', width: '50%', justifyContent: 'center', position: "relative", alignItems: 'center' }}>{/* Score in beers/shot */}
                <BeerContainer
                    score={7.5} />
                <Image style={{ height: '120%', width: '120%', position: "absolute", zIndex: -1 }} source={beerTray} />
                <View style={{ position: 'absolute', left: "50%", top: "50%", transform: [{ translateX: "-50%" }, { translateY: "-50%" }] }}>
                    <Text style={{ fontSize: 30, backgroundColor: "white", borderRadius: "50%", padding: 5 }}>{7.5}</Text>
                </View>
            </View>


        </View>
    )
}

export default UserContainer