import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native-web';

const CountDownTimer = ({ hoursMinSecs, players }) => {

  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const callbackUseEffect = () => {
    if (players.length === 7) {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    }
  }

  useEffect(callbackUseEffect);

  const tick = () => {

      if (hrs === 0 && mins === 0 && secs === 0)
        reset()
      else if (mins === 0 && secs === 0) {
        setTime([hrs - 1, 59, 59]);
      } else if (secs === 0) {
        setTime([hrs, mins - 1, 59]);
      } else {
        setTime([hrs, mins, secs - 1]);
      }
  };

  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);



  return (
    <View>
      <Text>
        {`${hrs.toString().padStart(2, '0')}:${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
      </Text>
    </View>
  );
}

export default CountDownTimer;