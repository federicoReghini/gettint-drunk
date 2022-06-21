import React, { useEffect, useState } from 'react'
import { Image, View, Text, Button } from 'react-native-web';
import { assignIdToIconCard } from '../../utils/iconArrayAssign';
import BeerContainer from './BeerContainer/BeerContainer';
const UserInfoContainer = () => {
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
        <View>
            <View>{/* cardIcon */}

                <Image style={{ height: 50, width: 30 }}
                    source={state.playerIcon.regular} />
            </View>
            <View>{/* Score in beers/shot */}
                <BeerContainer
                    score={7.5} />
            </View>
            <View>
                <Text>{7.5}</Text>
                <Text>Nickname</Text>
            </View>
            <View>
                <Button
                    title={'pesca una carta'}></Button>
                <Button
                    title={'Stop'}></Button>
            </View>
        </View>
    )
}

export default UserInfoContainer