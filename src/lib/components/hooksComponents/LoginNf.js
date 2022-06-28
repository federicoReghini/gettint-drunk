import React, { useState } from 'react';
import PropTypes from 'prop-types';

// native components
import { View, Text, Button, TextInput, Platform, TouchableOpacity } from 'react-native';

// styles
import { styles } from '../../assets/styles/styleSignupLogin';
import { login } from '../../services/api/userapi';
import { setStorage } from '../../utils/storage';

let formData = {
    email: '',
    password: ''
}

const initState = {
    isDisable: true
}

const LoginNf = ({ onPressSubmit, onGoToRegistration }) => {

    const [state, setState] = useState(initState);

    const handleChange = (property) => (e) => {
        const newState = Object.assign({}, state);

        if ((formData.email && formData.password) !== '') {

            newState.isDisable = false;
        } else {

            newState.isDisable = true;
        }

        setState({ ...state, isDisable: newState.isDisable });

        formData[property] = e;
    }

    const handleSubmit = async () => {

        const res = await login(formData);

        await Promise.all([
            setStorage('token', res?.data?.token),
            setStorage('refreshToken', res?.data?.refreshToken),
            setStorage('user', res?.data?.id)
        ])

        Platform.OS === 'web' ? onPressSubmit() : onPressSubmit(res);
    }

    return (
        <View>

            {Platform.OS === 'web' &&
                <Text style={styles.title}>
                    Login
                </Text>
            }

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    placeholder={'Insert email'}
                    placeholderTextColor='#fff'
                />

                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    placeholder={'Insert password'}
                    placeholderTextColor='#fff'
                />

                <View>
                    <TouchableOpacity
                        onPress={onGoToRegistration}
                        style={{ margin: 20 }}
                    >
                        <Text
                            style={styles.text}
                        >
                            Registration
                        </Text>
                    </TouchableOpacity>

                </View>

                <Button
                    title={'Login'}
                    style={styles.btn}
                    disabled={state.isDisable}
                    onPress={handleSubmit}
                />
            </View>

        </View>
    )
}

LoginNf.propTypes = {
    onPressSubmit: PropTypes.func.isRequired,
    onGoToRegistration: PropTypes.func.isRequired
}

export default LoginNf;