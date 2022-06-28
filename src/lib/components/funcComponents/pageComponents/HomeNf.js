import React from 'react';
import PropTypes from 'prop-types';

// native components
import { View } from 'react-native';
// import { styles } from '../../../assets/styles/genericStyles';
import ButtonNf from '../../hooksComponents/ButtonNf';
import { playFastUser } from '../../../services/api/userapi';
import { getStorage } from '../../../utils/storage';

/**
 * home page components for seven and half game
 * @param  {function} onQuickMatch
 * @param  {function} onCreateLobby
 * @param  {function} onLeaderBoard
 */
const HomeNf = ({ onQuickMatch, onCreateLobby, onLeaderBoard }) => {

  const insertUserInLobby = async () => {

    const TOKEN = await getStorage('token');

    await playFastUser(TOKEN)

    onQuickMatch();
  }


  return (
    <View>
      <ButtonNf
        title={'Quick match'}
        onPress={insertUserInLobby}
      />

      <ButtonNf
        title={'create lobby'}
        onPress={onCreateLobby}
      />

      <ButtonNf
        title={'Leader board'}
        onPress={onLeaderBoard}
      />
    </View>
  )
}

HomeNf.propTypes = {
  onQuickMatch: PropTypes.func.isRequired,
  onCreateLobby: PropTypes.func.isRequired,
  onLeaderBoard: PropTypes.func.isRequired
}

export default HomeNf;