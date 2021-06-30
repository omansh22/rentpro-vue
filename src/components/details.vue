<template>
  <div>
    <Navbar />

    <div class="main">
      <div class="card">
                <div class="card-header head"><strong>{{response[0].type +" BHK " + response[0].property + " in " + response[0].area +" "+ response[0].city +" " +"For Rent" }}</strong></div>

        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in response[0].imageurl"
            :key="i"
            :src="item"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>

        <hr />
        <h3 class="head2">Overview</h3>
        <hr/>
        <div class="row">
          <div class="col-6">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-success"
                ><div class="sofa">
                  <div class="icon">
                    <i class="fas fa-couch"></i>
                  </div>
                  <div class="other">
                    <div>
                      <strong>{{ response[0].furnished }}</strong>
                    </div>
                    <div>Furnishing</div>
                  </div>
                </div></a
              >
              <a href="#" class="list-group-item list-group-item-info"
                ><div class="sofa">
                  <div class="icon">
                    <i class="fas fa-birthday-cake"></i>
                  </div>
                  <div class="other">
                    <div><strong>{{response[0].age}}</strong></div>
                    <div>Property Age</div>
                  </div>
                </div></a
              >
              <a href="#" class="list-group-item list-group-item-warning">
                <div class="sofa">
                <div class="icon">
                  <i class="fas fa-user"></i>
                </div>
                <div class="other">
                  <div><strong class="line">{{response[0].tenent}}</strong></div>
                  <div>Preffered Tenent</div>
                </div>
            </div>
              </a>
              <a href="#" class="list-group-item list-group-item-danger"
                ><div class="sofa">
                  <div class="icon">
                    <i class="fas fa-parking"></i>
                  </div>
                  <div class="other">
                    <div><strong>{{response[0].parking}}</strong></div>
                    <div>Parking</div>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div class="col-6">
            <div class="list-group">
              <a  class="list-group-item list-group-item-success"
                ><div class="sofa row">
                  <div class="icon col-4">
                    <i class="fas fa-couch"></i>
                  </div>
                  <div class="col-8">
                    <div>{{response[0].dates.post.substr(0, 10)}}</div>
                    <div>Posted on</div>
                  </div>
                </div></a
              >
              <a href="#" class="list-group-item list-group-item-info"
                ><div class="sofa">
                <div class="icon">
                  <i class="fas fa-toilet"></i>
                </div>
                <div class="other">
                  <div><strong class="line">{{response[0].washroom}}</strong></div>
                  <div>No. of Washroom</div>
                </div>
            </div></a
              >
              <a href="#" class="list-group-item list-group-item-warning"
                ><div class="sofa">
                <div class="icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="other">
                  <div><strong class="line">{{response[0].gated}}</strong></div>
                  <div>Gated Security</div>
                </div>
            </div></a
              >
              <a href="#" class="list-group-item list-group-item-danger"
                ><div class="sofa">
                <div class="icon">
                  <i class="fas fa-water"></i>
                </div>
                <div class="other">
                  <div><strong class="line">{{response[0].water}}</strong></div>
                  <div>Water Supply</div>
                </div>
            </div></a
              >
            </div>
          </div>
        </div>
        <div class="map">
        <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
     <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
        </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar";
import { getbyid } from "@/services/getbyid";
export default {
  name: "Details",
  data() {
    return {
      response: [],
      center: { lat: 12.7312, lng: 77.7078 },
            markers: [{
              position: { lat: 12.7312, lng: 77.7078 }
            }],


    };
  },
  components: { Navbar },
  created() {
    const id = this.$route.params.id;
    getbyid(id).then((res) => {
      this.response = res;
      console.log(this.response);
    });
  },
};
</script>
<style scoped>
.main {
  margin: 2% 25%;
}
.sofa {
  display: flex;
  align-items: center;
}
.other {
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
}
.icon {
  font-size: 25px;
  padding: 5px;
  height: 50px;
  width: 50px;
  color: grey;
}
.head{
  font-size: 35px;
}
.head2{
  padding: 5px;
}
.map {
  padding: 12px
}
@media only screen and (max-width: 400px){
  .main{
    margin: 0;
  }
}
@media only screen and (max-width: 600px){
  .main{
    margin: 1% 2%;
  }
}

@media only screen and (max-width: 800px) {
  .main{
    margin: 1% 5%;
  }
}
</style>