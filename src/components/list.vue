<template>
  <div>
    <Navbar />
    <div class="card text-center">
      <div class="container">
        <div class="item">
          Buildup
          <div><strong>1500 Sq ft.</strong></div>
        </div>
        <div class="item mar">
          Deposit
          <div><strong>₹ 1,50,000</strong></div>
        </div>
        <div class="item">
          Rent
          <div><strong>₹ 15,000</strong></div>
        </div>
      </div>
      <hr />

      <div class="row">
        <div class="col-md-6">
          <div>
            <img
              class="image"
              src="https://images.nobroker.in/images/8a9f82f97266527101726e45aa2f2ce4/8a9f82f97266527101726e45aa2f2ce4_80766_45402_medium.jpg"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="rest">
            <div class="row">
              <div class="col-6">
                <div class="sofa">
                  <i class="fas fa-couch">Semi-Furnished</i>
                </div>
                Furnishing
              </div>
              <div class="col-6">
                <div>
                  <i class="fa fa-birthday-cake" aria-hidden="true">10 Years</i>
                </div>
                Property Age
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="sofa">
                  <i class="fa fa-user" aria-hidden="true">All</i>
                </div>
                Preffered Tenent
              </div>
              <div class="col-6">
                <div>
                  <i class="fas fa-parking">Yes</i>
                </div>
                Parking
              </div>
              <div class="infom">
                <!-- <v-btn
              large
              color="primary"
              dark
            >
              Extra large Button
            </v-btn> -->
                <button type="button" class="btn btn-lg btn-primary">
                  Primary button
                </button>
                <button type="button" class="btn-danger fav">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div class="card-header">Featured</div>

      <div class="card-footer text-muted">2 days ago</div>
    </div>

    <div class="filters">
      <div class="filt">
        <div>
          <v-btn tile color="primary">
            <v-icon > mdi-pencil </v-icon>
            Filters
          </v-btn>
        </div>
        <div>
          <p class="name">Apartment Type</p>
          <div class="selection">
            <v-select :items="room" v-model="filter.bhk" label="BHK"></v-select>
          </div>
          <p class="name">Price</p>

          <div class="selection">
            <v-slider v-model="filter.price" thumb-label min="1000" max="100000"></v-slider>
          </div>
          <p class="name">Preffered Tenent</p>
          <div class="selection">
            <v-select :items="properties" v-model="filter.property" label="Tenent"></v-select>
          </div>

          <p class="name">Movein within</p>
          <div class="selection">
             <div
            id="date-picker-example"
            class="md-form md-outline input-with-post-icon datepicker"
          >
            <input
              placeholder="Select date"
              type="date"
              id="example"
              class="form-control"
              v-model="filter.movein"
            />
          </div>
          </div>
          <p class="name">Furnished</p>
          <div class="selection">
            <v-select :items="fursnish" v-model="filter.furnished" label=""></v-select>
          </div>
          <v-btn
              color="primary"
              fab
              small
              dark
              @click="filtering"
            >
              <i class="fas fa-edit"></i>
            </v-btn>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar";
import filter from '@/services/filter'
export default {
  name: "Listing",
  components: { Navbar },
  data(){
    return{
      fursnish: ["Full","Semi","Not"],
      properties: ["Villa", "PG", "Flats"],
      room: [1, 2, 3],
      filter:{
        bhk: '',
        price: '',
        furnished: '',
        movein: ''


      }
    }
  },

  created(){
    //console.log(this.$router.params.search.city);
  },
  methods:{
    filtering(){
      console.log("hey everybody");
      filter(this.filter)

    }
  }
};
</script>
<style scoped>
.card {
  margin: 5% 25%;
  position: relative;
}
.filters {
  position: absolute;
  top: 160px;
  left: 140px;
}
.filt {
  height: 450px;
  width: 225px;
  border: 1px solid #000;
  padding: 2%;
}
.name {
  font-size: small;
  white-space: nowrap;
}
.selection {
  margin-top: -25px;
  width: 200px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
hr {
  margin: 0px;
}
.item {
  flex: 0 32%;
  height: 50px;
}
.mar {
  border-right: 1px solid grey;
  border-left: 1px solid grey;
}
.image {
  margin: 2%;
  max-height: 180px;
  width: auto;
}
.rest {
  border: 1px solid gray;
  height: 120px;
  margin: 4% 1%;
}
/* .sofa{

} */
.fav{
  margin-left: 30px;
  padding: 5px;
  max-height: 48px;
}
.infom {
  margin-top: 27px;
  width: 60%;
  

  margin-left: 10px;
}
</style>