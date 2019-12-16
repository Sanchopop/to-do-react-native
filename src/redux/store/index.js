import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

persistor.purge();

export default { store, persistor };


