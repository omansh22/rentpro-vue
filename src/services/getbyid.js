import axios from 'axios';

export const getbyid=(id)=>{
    return axios.get(`http://localhost:3000/rent/${id}`,{
        Headers:{
            "Content/type" : "application/json"
        }
    })
    .then(res=>res.data)
    .catch(err=> console.log(err))

}


