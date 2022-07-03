import React, { useEffect, useState } from 'react'
import { Image, View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { assignIdToIconCard } from '../../utils/iconArrayAssign';
import BeerContainer from './BeerContainer/BeerContainer';
import beerTray from './../../assets/beerTray.png'
import piramidBeer from '../../assets/img/icon/piramidBeer.png'


let frontInterpolate;
let backInterpolate;
let backOpacity;

const UserContainer = ({ username, id, cardValue, animatedValue }) => {
    frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    })

    backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })

    backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
    })

    const frontAnimatedStyle = {
        transform: [
            { rotateY: frontInterpolate }
        ]
    }

    const backAnimatedStyle = {
        transform: [
            { rotateY: backInterpolate }
        ],
        opacity: backOpacity
    }

    const [state, setState] = useState({
        isFirstTime: true,
        playerIcon: {}
    })
    useEffect(() => {
        if (state.isFirstTime === true) {
            setState({
                isFirstTime: false,
                playerIcon: assignIdToIconCard(id),
            })
        }
        if (cardValue > 7.5) {
            Animated.timing(animatedValue, {
                toValue: 180,
                duration: 800,
                useNativeDriver: true
            }).start();

        }

    }, [cardValue])

    return (

        <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
            <View style={{ marginHorizontal: 10 }}>

                <Text style={{
                    fontSize: 20, fontWeight: '700', color: 'white'
                }}>{username}</Text>
            </View>

            <View style={{ width: '50%', height: '50%', marginBottom: "5%" }}>{/* cardIcon */}

                <Animated.Image style={[styles.maxHMaxW, styles.flip, frontAnimatedStyle]}
                    resizeMode='cover'
                    source={state.playerIcon.regular} />
                <Animated.Image style={[backAnimatedStyle, styles.flip, styles.maxHMaxW, styles.abs]}
                    source={state.playerIcon.flipped} />

            </View>

            <View style={{ height: '40%', width: '50%', justifyContent: 'center', position: "relative", alignItems: 'center' }}>{/* Score in beers/shot */}
                {cardValue < 7.5 ? <BeerContainer
                    score={parseInt(cardValue)} /> :
                    <Image style={{ height: '140%', width: '200%', marginTop: '-50%', marginLeft: '10%', justifyContent: 'center', position: "relative", alignItems: 'center' }}
                        source={piramidBeer} />}

                <Image style={{ height: '120%', width: '120%', position: "absolute", zIndex: -1 }} source={beerTray} />

            </View>
        </View>
    )
}

export default UserContainer;

const styles = StyleSheet.create({
    maxHMaxW: {
        height: '100%',
        width: '100%'
    },
    flip: {
        backfaceVisibility: 'hidden',
    },
    abs: {
        position: 'absolute',
        top: 0,
        left: 0
    }

})