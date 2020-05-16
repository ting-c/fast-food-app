import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import persistReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist';

export const store = createStore(
  persistReducer,
  applyMiddleware(logger)
  );

export const persistor = persistStore(store);

