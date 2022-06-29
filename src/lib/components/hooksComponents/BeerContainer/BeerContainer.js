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
        return [...new Array(scoreIsDecimal.cleanScore > 3 ? 3 : scoreIsDecimal.cleanScore).keys()].map(index => <Image
            style={{ height: '100%', width: '30%', marginLeft: "-5%" }}
            key={index}
            source={beerIcon} />);
    }

    const generateSecondtSeriesOfBeer = () => {
        console.log('seconda')
        return [...new Array(scoreIsDecimal.cleanScore - 3 > 3 ? 3 : scoreIsDecimal.cleanScore - 3).keys()].map(index => <Image
            style={{ height: '100%', width: '30%', marginLeft: "-5%" }}
            key={index}
            source={beerIcon} />);
    }
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <View style={{
                height: '100%', width: '100%', marginLeft: "5%", marginTop: "-5%"
            }}>{/* beer container */}
                <View style={{ flexDirection: 'row', height: '50%', width: '100%', justifyContent: "center" }}>{/* 1st beer container */}
                    {generateFirstSeriesOfBeer()}
                </View>
                {scoreIsDecimal.cleanScore > 4 &&
                    <View style={{ flexDirection: 'row', height: '50%', width: '100%', marginTop: "-20%", justifyContent: "center" }}>{/* 2st beer container */}
                        {generateSecondtSeriesOfBeer()}
                    </View>
                }
                <View style={{ height: '100%', width: '100%', flexDirection: 'row' }}>
                    {scoreIsDecimal.cleanScore === 7 &&
                        <View style={{ flexDirection: 'row', height: '50%', width: '100%', marginTop: "-20%", justifyContent: "center" }}>{/* 3st beer container */}
                            <Image
                                style={{ height: '100%', width: '30%', marginTop: "-5%" }}
                                source={beerIcon} />
                        </View>
                    }
                    {scoreIsDecimal.isDecimal &&
                        <Image
                            style={scoreIsDecimal.cleanScore === 7 ? { height: '50%', width: '30%', marginTop: "-43%", marginLeft: "-90%" } : { height: '50%', width: '30%', marginTop: "-43%", marginLeft: "0" }}
                            source={shotIcon} />
                    }
                </View>

            </View>

        </View>

    )
}
