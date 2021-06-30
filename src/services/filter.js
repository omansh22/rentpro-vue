import axios from 'axios';
//import { gettoken } from './auth';
const keytok = "token";

export const filter= (request)=>{
    const {bhk, movein, furnished, price, property} = request;
    const reqi={
    "bhk": bhk ,
    "movein": movein ,
    "furnished": furnished ,
    "price": price,
    "property": property  
} 
    console.log(reqi);
  return  axios.post("http://localhost:3000/rent/filter", reqi
  ,{
     headers: {
        'Authorization': localStorage.getItem(keytok).toString(),
     }
    })
    .then(res => res.data)
    .catch(err => err.message)
}

