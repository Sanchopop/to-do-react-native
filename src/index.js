import React from 'react';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';
import AppContainer from './containers/App/index';
import {PersistGate} from 'redux-persist/integration/react'

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
};

export default Root;
