import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {encryptTransform} from 'redux-persist-transform-encrypt'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const encryptor = encryptTransform({
  secretKey: '0MB24h35z%!G',
  onError: (err) => {
    console.error(err);
  },
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  transforms: [encryptor],
  blacklist: [],
  whitelist: [],
};

const pReducer = persistReducer(persistConfig, rootReducers);

const configureStore = (initialState) => {
  return createStore(
    pReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export const store = configureStore();
export const persistor = persistStore(store);

export default store;
