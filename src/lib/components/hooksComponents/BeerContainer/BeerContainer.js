import React from 'react'
import { Image, View } from 'react-native';
import beerIcon from '../../../assets/img/icon/birra.png'
import shotIcon from '../../../assets/img/icon/shot.png'


export default function BeerContainer(props) {

    let scoreIsDecimal = {
        cleanScore: props.score % 1 === 0 ? props.score : props.score - 0.5,
        isDecimal: props.score % 1 === 0 ? false : true
    }

    const generateFirstSeriesOfBeer = () => {
        console.log('prima serie')
        let arrayContainer = []
        for (let index = 0; index < (scoreIsDecimal.cleanScore > 4 ? 4 : scoreIsDecimal.cleanScore); index++) {
            arrayContainer.push(
                <Image
                    style={{ height: '70%', width: '70%' }}
                    key={index}
                    source={beerIcon} />
            )
        }
        return arrayContainer;
    }

    const generateSecondtSeriesOfBeer = () => {
        console.log('seconda')
        let arrayContainer = []
        for (let index = 5; index <= scoreIsDecimal.cleanScore; index++) {
            arrayContainer.push(
                <Image
                    style={{ height: '70%', width: '70%', marginTop: "-180%", marginLeft: '15%' }}
                    key={index}
                    source={beerIcon} />
            )
        }
        return arrayContainer;
    }
    return (
        <View style={{ height: '100%', width: '100%', flexDirection: 'row', marginLeft: -70, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                height: '100%', width: '100%'
            }}>{/* beer container */}
                <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>{/* 1st beer container */}
                    {generateFirstSeriesOfBeer()}
                </View>
                {scoreIsDecimal.cleanScore > 4 &&
                    <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>{/* 2st beer container */}
                        {generateSecondtSeriesOfBeer()}
                    </View>
                }
            </View>
            {scoreIsDecimal.isDecimal &&
                <View style={{
                    height: '100%', width: '100%'
                }}>
                    <Image
                        style={{ height: '65%', width: '65%', marginLeft: '165%' }}
                        source={shotIcon} />
                </View>
            }
        </View>
    )
}
