import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import realIdReducer from './reducer/realIdReducer';
import share from './reducer/careToShareReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = combineReducers({
    user: authReducer,
    realIdUser: realIdReducer,
    care: share

});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
    return createStore(persistedReducer);
}

export default configureStore;