import axios from 'axios';

import { succeshandler , errorhandler } from './helper'


const keytok = "token";

const loginSer = (Credential)=>{
    return axios.post("http://localhost:3000/auth/login",
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