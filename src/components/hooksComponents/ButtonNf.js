import React from 'react';
import PropTypes from 'prop-types';

// native components
import { Pressable, Text } from 'react-native-web';
import { styles } from '../../assets/styles/styleButtonNf';

/**
 * Button Custom with 3 props
 * @param  {string} title
 * @param  {func} onPress
 * @param  {boolean} isDisabled
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