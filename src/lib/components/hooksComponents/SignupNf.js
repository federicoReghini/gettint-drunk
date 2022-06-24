import React, { useState } from 'react';

// native components
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

// validation
import { checkMail, checkPassword } from '../../utils/validation';

// styles
import { styles } from '../../assets/styles/styleSignupLogin';
import { signUp } from '../../services/api/userapi';

const initState = {
    isDisable: true
}

const formData = {
    username: '',
    email: '',
    password: '',
}
let confirmPsw = '';

const SignupNf = ({ onPressSubmit, onGoToRegistration }) => {

    const [state, setState] = useState(initState);

    const handleChange = (property) => (e) => {
        const newState = Object.assign({}, state);

        if (formData.password === confirmPsw && checkMail(formData.email)) {

            newState.isDisable = false;
        } else {

            newState.isDisable = true;
        }

        setState({ ...state, isDisable: newState.isDisable });

        if (property === 'confirmPassword') {
            return confirmPsw = e.target.value;
        }
        formData[property] = e.target.value;

    }

    const handleSubmit = () => {
        signUp(formData);
        onPressSubmit();
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Sign up
            </Text>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    onChange={handleChange('username')}
                    placeholder={'Insert username'}
                />
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
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    onChange={handleChange('confirmPassword')}
                    placeholder={'Insert confirm password'}
                />

                <View>
                    <TouchableOpacity
                        onPress={onGoToRegistration}
                        style={{margin: 20}}
                    >
                        <Text
                            style={styles.text}
                        >
                            Registration
                        </Text>
                    </TouchableOpacity>

                </View>

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

export default SignupNf;