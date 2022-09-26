import {GET_ADMIN, ADMIN_ERROR,GET_USERS, USERS_ERROR} from './types'
import axios from 'axios';

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/logreg/backend/login.php?email='+email+'&password='+password);
        dispatch( {
            type: GET_ADMIN,
            payload: res.data
        })

    }
    catch(e){
        dispatch( {
            type: ADMIN_ERROR,
            payload: console.log(e),
        })
    }
}


export const getUsers = () => async dispatch => {

    try{
        const res = await axios.get(`https://countriesnow.space/api/v0.1/countries/population/cities`)
        dispatch( {
            type: GET_USERS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const logout=()=> dispatch => {

    dispatch( {
        type: 'logout',
    })
    window.location.href = "/";
}
export const deleting=(index)=> dispatch => {
    dispatch( {
        type: 'deleting',
        index
    })
}


export const username=(username)=>{
    return{
        type: 'username',
        username
    }
}
export const email=(email)=>{
    return{
        type: 'email',
        email,
    }
}
export const password=(password)=>{
    return{
        type: 'password',
        password,
    }
}
export const confirmPass=(confirmPass)=>{
    return{
        type: 'confirmPass',
        confirmPass,
    }
}
export const signup=()=>{
return{
    type: 'SIGNUP',
}
}