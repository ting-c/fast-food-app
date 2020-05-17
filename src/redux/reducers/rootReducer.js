import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import foodItemsReducer from './foodItemsReducer';
import menuItemsReducer from './menuItemsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  food: foodItemsReducer,
  menu: menuItemsReducer
});
  
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']  //user is handled by firebase auth
};

export default persistReducer(persistConfig, rootReducer);
