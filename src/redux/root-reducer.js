import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
// import { useReducer } from 'react';

export default combineReducers({
    user: userReducer
})