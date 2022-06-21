import React from 'react';
import PropTypes from 'prop-types';

// native components
import { Switch, Text } from 'react-native-web';

/**
 * switch custom
 * @param  {boolean} isOn
 * @param  {function} onValueChange
 */
const SwitchNf = ({ isOn, onValueChange }) => {

  return (
    <>
      <Switch
        onValueChange={onValueChange}
        activeThumbColor='#fff'
        activeTrackColor='#ffbf43'
        thumbColor='#FAFAFA'
        trackColor='#939393'
        value={isOn}
      />
      {isOn ? <Text>Pubblic</Text> : <Text>Private</Text>}
    </>
  )
}

SwitchNf.defaultProps = {
  isOn: false,
}

SwitchNf.propTypes = {
  isOn: PropTypes.bool,
  onValueChange: PropTypes.func
}

export default SwitchNf;