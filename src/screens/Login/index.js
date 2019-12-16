import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';

const Login = (props) => {
    const {login, errorMessage} = props;
    let loginData = {
        login: '',
        password: ''
    };

    const log = () => {
        login(loginData);
    };

    const error = errorMessage.length ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {error}
            <TextInput
                placeholder={ 'Enter your login !' }
                style={{
                    height: 40,
                    width: 350,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 5,
                    margin: 5
                }}
                onChangeText={ TextInputValue => loginData.login = TextInputValue }
            />
            <TextInput
                placeholder={ 'Enter your password !' }
                style={{
                    height: 40,
                    width: 350,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 5,
                    margin: 5
                }}
                onChangeText={ TextInputValue => loginData.password = TextInputValue }
            />
            <Button
                title="LOGIN"
                style={{
                    height: 40,
                    width: 350,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    margin: 5
                }}
                onPress={log}
            />
        </View>
    );
};

export default Login;