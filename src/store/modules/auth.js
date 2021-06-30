import { loginSer } from "../../services/auth";

const keytoken = 'token';
const mail = 'email';

const auth = {
    state: {
        token: localStorage.getItem(keytoken) || '',
        email: localStorage.getItem(mail) || '' 
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        }

    },
    mutations: {
        settoken(state,token){
            state.token = token;
        },
        setemail(state,mail){
            state.email = mail;
        }
    },
    actions:{
        login({commit},Credential){
            return loginSer(Credential)
                .then(data=>{
                    const {token,email} = data;
                    localStorage.setItem(keytoken,token);
                    localStorage.setItem(mail,email);
                    commit('settoken',token);
                    commit('setemail',mail);

                })
                .catch(err=> err.message)

                
            
        },
        
                logout({commit}){
                    localStorage.removeItem(keytoken);
                    localStorage.removeItem(mail);
                    
                    commit('settoken','');
                    commit('setemail','');

                    return Promise.resolve();

                }
    }
}

export {auth}