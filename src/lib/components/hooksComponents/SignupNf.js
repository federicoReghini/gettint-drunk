import React, { useState } from 'react';
import PropTypes from 'prop-types';

// native components
import { Text, View, Button, TextInput, Platform } from 'react-native';

// validation
import { checkMail, checkPassword } from '../../utils/validation';

// styles
import { styles } from '../../assets/styles/styleSignupLogin';
import { login, signUp } from '../../services/api/userapi';
import { setStorage } from '../../utils/storage';

const initState = {
    isDisable: true
}

const formData = {
    username: '',
    email: '',
    password: '',
}
let confirmPsw = '';

const SignupNf = ({ onPressSubmit }) => {

    const [state, setState] = useState(initState);

    const handleChange = (property) => (e) => {
        const newState = Object.assign({}, state);

        if (formData.password === confirmPsw && checkMail(formData.email) && checkPassword(formData.password)) {

            newState.isDisable = false;
        } else {

            newState.isDisable = true;
        }

        setState({ ...state, isDisable: newState.isDisable });

        if (property === 'confirmPassword') {
            return confirmPsw = e;
        }
        formData[property] = e;

    }

    const handleSubmit = async () => {
        try {
            await signUp(formData);

            const res = await login({
                email: formData.email,
                password: formData.password
            });

            await Promise.all([

                setStorage('token', res?.data?.token),
                setStorage('refreshToken', res?.data?.refreshToken),
                setStorage('user', res?.data?.id)
            ])


            Platform.OS === 'web' ? onPressSubmit() : onPressSubmit(res);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Sign up
            </Text>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('username')}
                    placeholder={'Insert username'}
                    placeholderTextColor='#fff'
                />
                
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    placeholder={'Insert password'}
                    placeholderTextColor='#fff'
                />
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    placeholder={'Insert confirm password'}
                    placeholderTextColor='#fff'
                />
                
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    placeholder={'Insert email'}
                    placeholderTextColor='#fff'
                />


                <Button
                    title={'Sign up'}
                    style={styles.btn}
                    disabled={state.isDisable}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

SignupNf.propTypes = {
    onPressSubmit: PropTypes.func.isRequired,
}

export default SignupNf;