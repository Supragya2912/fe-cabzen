import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import {thunk} from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, userReducer)


const store = configureStore({
    reducer : persistedReducer,
    // middleware: [thunk]
});
const persistor = persistStore(store);

export {store, persistor};