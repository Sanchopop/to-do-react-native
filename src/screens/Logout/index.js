import React from 'react';
import {Button, View} from 'react-native';

const Logout = (props) => {
    const {logout} = props;

    const log = () => {
        logout();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="LOGOUT"
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

export default Logout;