<template>
  <div class="grad">
    <router-link to="/"><i class="fas fa-chevron-left back"></i></router-link>
    <div class="l">
      <div class="l1">
        <form name="form" @submit.prevent="login">
          <div class="elems">
            <h1>Login</h1>
            <div class="form-group">
              <input
                placeholder="E-mail"
                id="email"
                class="form-control"
                type="email"
                name="email"
                v-model="form.email"
                @blur="$v.form.email.$touch()"
                :class="{
                  'is-invalid': shouldAppendErrorClass($v.form.email),
                  'is-valid': shouldAppendValidClass($v.form.email),
                }"
              />
              <div v-if="$v.form.email.$error">
                <div
                  v-if="!$v.form.email.required"
                  class="error-message err-mark"
                >
                  <small>The email field is required</small>
                </div>
                <div v-if="!$v.form.email.email" class="error-message err-mark">
                  <small>Invalid email address</small>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                placeholder="Password"
                autocomplete="off"
                class="form-control"
                id="pass"
                type="password"
                name="pass"
                v-model="form.password"
                @blur="$v.form.password.$touch()"
                :class="{
                  'is-invalid': shouldAppendErrorClass($v.form.password),
                  'is-valid': shouldAppendValidClass($v.form.password),
                }"
              />
              <div v-if="$v.form.password.$error">
                <div
                  v-if="!$v.form.password.required"
                  class="error-message err-mark"
                >
                  <small>The password is required</small>
                </div>
                <div
                  v-if="!$v.form.password.minLength"
                  class="error-message err-mark"
                >
                  <small>Password MUST have at least 8 characters</small>
                </div>
              </div>
            </div>

            <router-link to="signup" class="sign"
              >Create New Account</router-link
            >

            <div class="but">
              <button class="btn btn-primary" type="submit" :disabled="$v.form.$invalid">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    shouldAppendErrorClass(field) {
      return field.$error; // field.$invalid && field.$dirty
    },
    shouldAppendValidClass(field) {
      return !field.$invalid && field.$model && field.$dirty;
    },
    login(){
      console.log("HI");
      this.$store.dispatch("login",this.form)
      .then(()=>{
        Vue.$toast.open({
              message: "Hi.. Welcome",
              duration: 1000,
              type: "info",
              position: "top-right"
            });
                  this.$router.push({name: 'home'})

      })
      .catch((err) => {
            Vue.$toast.open({
              message: err.message,
              duration: 3000,
              type: "error",
              position: "top-right"

            });
            console.log(err.message);
      });
      
    }
  },
};
</script>
<style scoped>
.back {
  font-size: 35px;
  margin: 5px;
}
.grad{
background: linear-gradient(
    45deg,
    rgba(66, 183, 245, 0.8) 0%,
    rgba(66, 245, 189, 0.4) 100%
  );
  height: 100%;
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
  width: 350px;
  font-size: smaller;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
}

.sign {
  color: white;
  font-size: x-small;
  margin-bottom: 5px;
  margin-top: -5px;
  text-decoration: none;
}
.err-mark {
  margin-top: -15px;
  text-align: center;
  margin-bottom: 5px;
}
.but {
  text-align: center;
}
</style>