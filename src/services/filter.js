import axios from 'axios';
import { gettoken } from './auth';

export const filter= (request)=>{
  return  axios.post("http://localhost:3000/rent/filter",request,{
     headers: {
         'Authorization': `${gettoken()}`
     }
    })
    .then(res => console.log(res.data))
    .catch(err => err.message)
}

