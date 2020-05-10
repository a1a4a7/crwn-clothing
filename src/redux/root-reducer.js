import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// import { useReducer } from 'react';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})