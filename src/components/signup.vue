<template>
    <div class="grad">
            <router-link to="/"><i class="fas fa-chevron-left back"></i></router-link>
         <div class="l">
    <div class="l1">
      <form>
        <div >
          <div class="elems">
            <h1>Signup</h1>
            <input
              v-model="form.name"
              placeholder="Name"
              type="text"
              name="name"
              @blur="$v.form.name.$touch()"
              :class="{
                'is-invalid': shouldAppendErrorClass($v.form.password),
                'is-valid': shouldAppendValidClass($v.form.password),
              }"
            />

            <input
              v-model="form.email"
              placeholder="E-mail"
              type="email"
              name="email"
              @blur="$v.form.email.$touch()"
              :class="{
                'is-invalid': shouldAppendErrorClass($v.form.password),
                'is-valid': shouldAppendValidClass($v.form.password),
              }"
            />

            <input
              v-model="form.password"
              placeholder="Password"
              type="password"
              name="pass"
              @blur="$v.form.password.$touch()"
              :class="{
                'is-invalid': shouldAppendErrorClass($v.form.password),
                'is-valid': shouldAppendValidClass($v.form.password),
              }"
            />

            <router-link to="login" class="sign"
              >Already have Account</router-link
            >
            <button class="btn btn-primary" type="submit">Signup</button>
          </div>
        </div>
      </form>
    </div>
  </div>
        </div>
</template>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'Signup',
    
    data(){
        return{
            form:{
               name: "",
               email: "",
               password: "" 
            }
        }
    },
    validations:{
        form:{
            name: {
                required
            },
            email:{
                required,
                email
            },
            password:{
                required,
                minLength: minLength(8)
            }
        }
    },
    methods: {
        shouldAppendErrorClass(field) {
      return field.$error; // field.$invalid && field.$dirty
    },
    shouldAppendValidClass(field) {
      return !field.$invalid && field.$model && field.$dirty;
    }
    }
    
}
</script>
<style scoped>
.grad{
background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  height: 100%;
}
.back{
    font-size: 25px;
    padding: 5px;
}

.l {
  margin: 10% 15%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
}

.l1 {
  display: flex;
  background-color: #6ad7e8;
  height: 20em;
  width: 25em;
  justify-content: space-around;
  border-radius: 8px;
  align-items: center;
}
.elems {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  align-items: center;
}

input {
  margin-bottom: 1em;
  width: 100%;
  font-size: smaller;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: white;
}

.sign {
  color: white;
  font-size: x-small;
  margin-bottom: 5px;
  margin-top: -5px;
  text-decoration: none;
}
</style>