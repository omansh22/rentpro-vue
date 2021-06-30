import axios from 'axios';

const keytok = 'token';

export const searchSer = (req)=>{
    return axios.post('http://localhost:3000/rent/search',req,{
        headers: {
           'Authorization': localStorage.getItem(keytok).toString(),
        }
       })
       .then(res=>{
           //console.log(res.data)
       return res.data   
    }
       )
       .catch(err=>console.log(err.message))
}