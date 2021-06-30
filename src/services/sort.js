import axios from 'axios';

 export const decreasing=(fil)=>{
   console.log(fil);
    return axios.post("http://localhost:3000/rent/sort/dec",fil,{
        Headers:{
            "Content/type" : "application/json"
        }
    })
    .then(res=>res.data)
    .catch(err=> console.log(err))
}
export const increasing=(fil)=>{
    console.log(fil);
     return axios.post("http://localhost:3000/rent/sort/inc",fil,{
         Headers:{
             "Content/type" : "application/json"
         }
     })
     .then(res=>res.data)
     .catch(err=> console.log(err))
 }
