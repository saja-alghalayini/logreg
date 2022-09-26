import login from "./login";
import registerReducer from "./reg";
import fetch from './fetch'
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    login: login,
    register:registerReducer,
    users: fetch
});

export default AllReducers;