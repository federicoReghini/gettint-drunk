import React from 'react'
import { Image, View } from 'react-native-web';
const beerIcon = require('../../../assets/img/icon/birra.png')
const shotIcon = require('../../../assets/img/icon/shot.png')

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
                    style={{ height: 30, width: 40 }}
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
                    key={index}
                    source={beerIcon} />
            )
        }
        return arrayContainer;
    }
    return (
        <View style={{ height: 30, width: 40 }}>
            <View>{/* beer container */}
                <View>{/* 1st beer container */}
                    {generateFirstSeriesOfBeer()}
                </View>
                {scoreIsDecimal.cleanScore > 4 &&
                    <View>{/* 2st beer container */}
                        {generateSecondtSeriesOfBeer()}
                    </View>
                }
            </View>
            {scoreIsDecimal.isDecimal &&
                <View>
                    <Image
                        style={{ height: 30, width: 40 }}
                        source={shotIcon} />
                </View>
            }
        </View>
    )
}
