<template>
  <div class="hello">
    <Navbar />
    <div class="fil">
      <h1 class="head">No Brokerage Property Site</h1>

      <div class="border border-primary">
        <div class="pad">
          <v-select
            :items="cities"
            v-model="search.city"
            label="City"
          ></v-select>
<!--                    <v-select @click="getlocality" :items="area" label="Locality or Landmark"></v-select> 
 -->        
           <v-text-field
            label="Locality or Landmark"
            v-model="search.locality"
            :rules="rules"
            hide-details="auto"
          ></v-text-field> 
          <v-radio-group v-model="search.property">
            <v-radio
              v-for="n in properties"
              :key="n"
              :label="`${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
          <div class="bhk">
            <v-select
              :items="room"
              v-model="search.bhk"
              label="BHK"
              outlined
            ></v-select>
          </div>
          <div
            id="date-picker-example"
            class="md-form md-outline input-with-post-icon datepicker"
          >
            <input
              placeholder="Select date"
              type="date"
              id="example"
              class="form-control"
              v-model="search.movein"
            />
          </div>
          <div class="ali">
            <v-btn medium color="success" dark @click="searching"> Search </v-btn>
          </div>
        </div>
      </div>
      <div class="post">
        <h5><span>Are you a Property Owner?</span></h5>
        <div class="my-2">
          <v-btn large color="primary" dark> Post Your Free Ad </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
import Navbar from "@/components/navbar";
export default {
  components: { Navbar },
  name: "Home",
  data() {
    return {
      cities: ["Bangalore", "Mumbai", "Delhi", "Pune", "Gurgaon"],
            cit: [{city: "Bangalore", area: ['Bellendur','hsr','Kormangla',"Marathahalli"]}, ],

      area:['Bellendur','hsr','Kormangla',"Marathahalli"],
      properties: ["Villa", "PG", "Flat"],
      room: [1, 2, 3],
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      thiscityarea: [],

      search: {
        locality: "",
        city: "",
        property: "",
        bhk: "",
        movein: "",
      },
    };
  },
  methods:{
    searching(){
      this.$router.push({name: 'list', params:{
        search : this.search
      }})},

      getlocality(){
        console.log("hi");
        for(let i of this.cit){
          console.log(i);
          if(i.city === this.search.city){
            this.thiscityarea = i.area
            break;
          }
          console.log(this.thiscityarea);
          
        }
      
    },
    computed: {
     /*  changelocality: function(){
        //console.log(this.search.city);
        for(let i in this.cit){
          if(i.city === this.search.city){
            this.thiscityarea = i.area
            break;
          }
          
        }
        console.log(this.thiscityarea);
        return this.thiscityarea
      } */
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  text-align: center;
}
.dropdown-container {
  position: relative;
}
.bhk {
  display: flex;
  align-items: center;
}
.pad {
  padding: 5%;
}
.ali {
  margin-bottom: -5px;
  display: flex;
  padding-top: 15px;
}
.r2 {
  display: flex;
  justify-content: space-between;
}
.fil {
  padding: 2% 10%;
}
h5 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h5 span {
  background: #fff;
  padding: 0 10px;
}
.post {
  margin-top: 20px;
}
.my-2 {
  text-align: center;
}
@media only screen and (max-width: 500px){
  .fil{
    margin: 2px 10px;
  }
}
</style>
