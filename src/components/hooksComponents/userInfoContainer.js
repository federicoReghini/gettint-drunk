import React, { useEffect } from 'react'
import { Image, View, Text } from 'react-native-web';
import { assignIdToIconCard } from '../../utils/iconArrayAssign';
import BeerContainer from './BeerContainer/BeerContainer';
export default function userInfoContainer() {
    let playerIcon = {}
    const idTmp = 0
    useEffect(() => {
        playerIcon = assignIdToIconCard(0)
    }, [])
    return (
        <View>
            <View>{/* cardIcon */}
                <Image
                    source={playerIcon?.regular} />
            </View>
            <View>{/* Score in beers/shot */}
                <BeerContainer
                    score={7.5} />
            </View>
            <View>
                <Text>{7.5}</Text>
                <Text>Nickname</Text>
            </View>
        </View>
    )
}
