import axios from 'axios';

import { succeshandler , errorhandler } from './helper'


const keytok = "token";

const loginSer = (Credential)=>{
    return axios.post("https://mymeetingsapp.herokuapp.com/api/auth/login",
    Credential,
    {
        Headers: {
            "Content/type" : 'application/json'
        }
    })
    .then(succeshandler)
    .then(data=>  data)
    .catch(errorhandler)

}
const gettoken=()=>{
    return localStorage.getItem(keytok);

}

export {
    loginSer,
    gettoken
};