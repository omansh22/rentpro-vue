import Vue from 'vue';
import Router from 'vue-router';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification'
import Vuex from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps'
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-toast-notification/dist/theme-default.css';


Vue.use(Vuelidate);
Vue.use(Router);
Vue.use(VueToast);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC8nCSH1MI5DMS1cDhA4yB2RjGlxkmxgnE',
      libraries: 'places',
    }
  });

