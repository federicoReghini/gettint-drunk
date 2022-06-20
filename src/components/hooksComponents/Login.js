import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Dimensions } from 'react-native-web';

const formData = {
    email: '',
    password: ''
}

const initState = {
    isDisable: true
}

const Login = () => {

    const [state, setState] = useState(initState);

    const handleChange = (property) => (e) => {
        const newState = Object.assign({}, state);

        if ((formData.email && formData.password) !== '') {

            newState.isDisable = false;
        } else {

            newState.isDisable = true;
        }

        setState({ ...state, isDisable: newState.isDisable });

        formData[property] = e.target.value;
    }

    const handleSubmit = () => {
        // api post
        console.log(formData);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Login
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.textInput}
                    onChange={handleChange('email')}
                    placeholder={'Insert email'}
                />

                <TextInput
                style={styles.textInput}
                    secureTextEntry
                    onChange={handleChange('password')}
                    placeholder={'Insert password'}
                />
            </View>

            <Button
                title={'Login'}
                style={styles.submit}
                disabled={state.isDisable}
                onPress={handleSubmit}
            />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        margin: 20
    },
    inputContainer:{
        marginBottom: 20,
    },
    submit: {
        width: '80%'
    },
    textInput:{
        margin: 10
    }
})