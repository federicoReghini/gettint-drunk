import React from 'react';
import PropTypes from 'prop-types';

// native components
import { Button, Pressable, Text } from 'react-native-web';
import { styles } from '../../assets/styles/styleButtonNf';

/**
 * @param  {string} {title
 * @param  {Function} callback
 * @param  {boolean} isDisabled}
 */
const ButtonNf = ({ title, onPress, isDisabled }) => {
  return (
    <>
      <Pressable
        disabled={isDisabled}
        accessibilityRole="button"
        onPress={onPress}
        style={styles.btn}
      >
        <Text style={styles.btnText}>
          {title}
        </Text>
      </Pressable>
    </>
  )
}

ButtonNf.defaultProps = {
  title: 'btnName',
  isDisabled: false
}

ButtonNf.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func
}

export default ButtonNf