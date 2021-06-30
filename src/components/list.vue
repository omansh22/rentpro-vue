<template>
  <div>
    <Navbar />
    <div class="card ext">
      <div class="sort">
        <i @click="dec" class="far fa-arrow-alt-circle-down"></i>
        <v-btn class="ma-2" outlined color="primary"> Sort </v-btn
        ><i @click="inc" class="far fa-arrow-alt-circle-up"></i>
      </div>
    </div>
    <div v-if="loading" class="card">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <!--       && !(!!filter.furnished)
 -->
    </div>
    <div>
      <div
        v-if="this.$route.params.search.city === '' && !response.length>0"
        class="card text-center"
      >
        <v-alert dense type="error">
          Please Apply Proper <strong>Search</strong> of Info
        </v-alert>
      </div>
    </div>
     <div>
      <div
        v-if=" response.length <= 0"
        class="card text-center"
      >
        <v-alert dense type="error">
          Please Apply Proper <strong>Filter</strong> of Info
        </v-alert>
      </div>
    </div>

    <div v-if="!loading">
      <div v-for="elem in response" :key="elem._id" class="card text-center">
        <div class="container">
          <div class="item">
            Buildup
            <div>
              <strong>{{ elem.builtup }} Sq ft.</strong>
            </div>
          </div>
          <div class="item mar">
            Deposit
            <div>
              <strong>₹ {{ elem.price.deposit }}</strong>
            </div>
          </div>
          <div class="item">
            Rent
            <div>
              <strong>₹ {{ elem.price.rent }} </strong>
            </div>
          </div>
        </div>
        <hr />
        <div class="card-header">
          <strong>{{
            elem.type +
            " BHK " +
            elem.property +
            " in " +
            elem.area +
            " " +
            elem.city +
            " " +
            "For Rent"
          }}</strong>
        </div>
        <hr />

        <div class="row">
          <div class="col-md-6">
            <div>
              <img class="image" :src="elem.imageurl[0]" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="rest">
              <div class="row">
                <div class="col-6">
                  <div class="sofa">
                    <div class="icon">
                      <i class="fas fa-couch"></i>
                    </div>
                    <div class="other">
                      <div>
                        <strong>{{ elem.furnished }}</strong>
                      </div>
                      <div>Furnishing</div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="sofa">
                    <div class="icon">
                      <i class="fas fa-birthday-cake"></i>
                    </div>
                    <div class="other">
                      <div>
                        <strong>{{ elem.age }} years</strong>
                      </div>
                      <div>Property Age</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div class="sofa">
                    <div class="icon">
                      <i class="fas fa-parking"></i>
                    </div>
                    <div class="other">
                      <div>
                        <strong>{{ elem.parking }}</strong>
                      </div>
                      <div>Parking</div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="sofa">
                    <div class="icon">
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="other">
                      <div>
                        <strong class="line">{{ elem.tenent }}</strong>
                      </div>
                      <div>Preffered Tenent</div>
                    </div>
                  </div>
                </div>
                <!-- <div class="infom"> -->
                <!-- <v-btn
              large
              color="primary"
              dark
            >
              Extra large Button
            </v-btn> -->
                <!-- <button type="button" class="btn btn-lg btn-primary">
                  Primary button
                </button> -->
                <!-- <button type="button" class="btn-danger fav">
                  <i class="fas fa-heart"></i>
                </button> -->
              </div>
            </div>
            <router-link :to="'/rent/' + elem._id">
              <v-btn large color="primary" dark>
                <span class="deco">View more Details </span>
              </v-btn>
            </router-link>
          </div>
        </div>
        <div></div>

        <div class="card-footer text-muted">
          {{ getdays(elem.dates.post) }} days ago
        </div>
      </div>
    </div>

    <div class="filters">
      <div class="filt">
        <div class="but">
          <v-btn tile color="primary">
            <v-icon> mdi-pencil </v-icon>
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
            <v-slider
              v-model="filter.price"
              thumb-label
              min="1000"
              max="100000"
            ></v-slider>
          </div>
          <p class="name">Preffered Tenent</p>
          <div class="selection">
            <v-select
              :items="properties"
              v-model="filter.property"
              label="Tenent"
            ></v-select>
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
                class="form-control m1"
                v-model="filter.movein"
              />
            </div>
          </div>
          <p class="name">Furnished</p>
          <div class="selection">
            <v-select
              :items="fursnish"
              v-model="filter.furnished"
              label=""
            ></v-select>
          </div>
          <v-btn color="primary" fab small dark @click="filtering">
            <i class="fas fa-edit"></i>
          </v-btn>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar";
import { filter } from "@/services/filter";
import { searchSer } from "@/services/search";
import  {decreasing,increasing}  from "@/services/sort";
export default {
  name: "Listing",
  components: { Navbar },
  data() {
    return {
      loading: true,
      fursnish: ["Full", "Semi", "Not"],
      properties: ["Villa", "PG", "Flat"],
      room: [1, 2, 3],
      filter: {
        bhk: "",
        price: "",
        furnished: "",
        movein: "",
        property: "",
      },
      search: {},
      response: [],
    };
  },

  created() {
    this.search = this.$route.params.search;
    console.log(this.$route.params.search);

    searchSer(this.search).then((res) => {
      console.log(res);
      this.response = res;
      this.loading = false;
      console.log(this.response);
    });
    //this.loading = false;
  },
  methods: {
    filtering() {
      this.loading = true;
      console.log("hey everybody");
      filter(this.filter).then((res) => {
        this.response = res;
        this.loading = false;
        console.log(this.response);
      });
    },
    dec() {
      decreasing(this.filter).then((resp) => {
        //console.log(resp);
        this.response = resp;
      })}
      ,
      inc() {
        increasing(this.filter).then((resp)=>{
          this.response = resp;
          //console.log(resp);
        })
      }
    ,
    getdays(x) {
      var d1 = new Date();
      var d2 = new Date(x);
      return Math.round((d1 - d2) / (1000 * 3600 * 24));
    },
  },
};
</script>
<style scoped>
.card {
  margin: 1.25% 25%;
  position: relative;
  text-decoration: none;
}
router-link {
  text-decoration: none;
}
.filters {
  position: absolute;
  top: 160px;
  left: 150px;
}
.filt {
  height: 500px;
  width: 240px;
  border: 1px solid #000;
  padding: 2%;
}
.name {
  font-size: small;
  white-space: nowrap;
}
.selection {
  margin-top: -20px;
  width: 200px;
}
.m1 {
  margin-top: 36px;
  margin-bottom: 15px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.deco {
  text-decoration: none;
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
.but {
  margin-bottom: 10px;
}
.image {
  max-height: 200px;
  object-fit: cover;
  width: 100%;
}
.rest {
  border: 1px solid gray;
  margin: 10px;
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

.fav {
  margin-left: 30px;
  padding: 5px;
  max-height: 48px;
}
.infom {
  margin-top: 27px;
  width: 60%;
  margin-left: 10px;
}

.ext {
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: right;
}
@media only screen and (max-width: 600px) {
  .filters {
    display: none;
  }
  .card {
    margin: 4%;
  }
}
@media only screen and (max-width: 1026px) {
  .card {
    margin: 2% 10%;
  }
}
</style>