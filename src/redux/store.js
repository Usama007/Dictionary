import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import favoriteSlice from './favoriteSlice'
import searchSlice from './searchSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['search']
};

const reducers = combineReducers({
    favorite: favoriteSlice,
    search: searchSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

const persistor = persistStore(store);
export { store, persistor };