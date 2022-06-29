import React, { useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native';
import { assignIdToIconCard } from '../../utils/iconArrayAssign';
import BeerContainer from './BeerContainer/BeerContainer';
import beerTray from './../../assets/beerTray.png'
const UserContainer = ({ username, id, cardValue }) => {
    const [state, setState] = useState({
        playerIcon: {}
    })
    useEffect(() => {
        setState({
            playerIcon: assignIdToIconCard(id)
        })
    }, [])

    return (

        <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <View style={{ marginHorizontal: 10 }}>

                <Text style={{
                    fontSize: 20, fontWeight: '700', color: 'white'
                }}>{username}</Text>
            </View>

            <View style={{ width: '50%', height: '50%', marginBottom: "5%" }}>{/* cardIcon */}

                <Image style={{ height: '100%', width: '100%' }}
                    source={state.playerIcon.regular} />
            </View>

            <View style={{ height: '40%', width: '50%', justifyContent: 'center', position: "relative", alignItems: 'center' }}>{/* Score in beers/shot */}
                <BeerContainer
                    score={cardValue} />
                <Image style={{ height: '120%', width: '120%', position: "absolute", zIndex: -1 }} source={beerTray} />

            </View>


        </View>
    )
}

export default UserContainer