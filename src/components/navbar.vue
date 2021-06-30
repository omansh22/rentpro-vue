<template>
<div>
	<header class="header">
		<h1 class="logo"><a href="#">RentPro</a></h1>
      <ul class="main-nav">
          <li><a @click="home">Home</a></li>
          <li v-if="$store.getters.isAuthenticated" > <a>Hello, <i class="fa fa-user icon" aria-hidden="true"></i>
 <span class="mail" >{{$store.state.auth.email}}</span></a></li>
          <li v-if="$store.getters.isAuthenticated" @click="logout"><a >Logout</a></li>
		 <li v-if="!$store.getters.isAuthenticated"><a @click="redirect" > Login </a></li>

		  
          <li><a href="#">Contact</a></li>
		  
      </ul>
	</header> 
    </div>
</template>
<script>
export default {
    name: "Navbar",
	data(){
		return{
			mail : ''
		}
	},
     methods: {
		 logout(){
			 this.$store.dispatch('logout')
			 .then(()=> this.$router.push({name: 'login'}))
			 .catch(err=>{
				 console.log(err.message);
			 })
		 },
		 redirect(){
			 this.$router.push({name: 'login'})
		 },
		 home(){
			 this.$router.push({name: 'Home'})
		 }
	 }
	 ,created(){
       this.mail = this.$store.state.auth.email;
	   console.log(this.mail);
	 }

    
}
</script>


<style scoped>

body {
	font-family: 'Montserrat', sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.icon{
	padding: 0 3px;
}
.mail{
	text-transform: lowercase;
}
h2,
h3,
a {
	color: #34495e;
}

a {
	text-decoration: none;
}



.logo {
	margin: 0;
	font-size: 1.45em;
}

.main-nav {
	margin-top: 5px;

}
.logo a,
.main-nav a {
	padding: 10px 15px;
	text-transform: uppercase;
	text-align: center;
	display: block;
}

.main-nav a {
	color: #34495e;
	font-size: .99em;
}

.main-nav a:hover {
	color: #718daa;
}



.header {
	padding-top: .5em;
	padding-bottom: .5em;
	border: 1px solid #a2a2a2;
	background-color: #f4f4f4;
	-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}

@media (min-width: 769px) {
	.header,
	.main-nav {
		display: flex;
	}
	.header {
		flex-direction: column;
		align-items: center;
    	
	}

}

@media (min-width: 1025px) {
	.header {
		flex-direction: row;
		justify-content: space-between;
	}

} 
 

</style>