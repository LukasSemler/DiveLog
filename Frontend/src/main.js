import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import { createPinia } from 'pinia';
import axios from 'axios';
import '@vuepic/vue-datepicker/dist/main.css';
import { registerSW } from 'virtual:pwa-register';
import 'mapbox-gl/dist/mapbox-gl.css'; //Mapbox css
import 'mapbox-gl/dist/mapbox-gl'; //Mapbox js

//Base-URL axios
if (location.origin === 'http://localhost:8080' || location.origin === 'http://localhost:5050') {
  axios.defaults.baseURL = 'http://localhost:2410';
}

const app = createApp(App);

//Pinia Store
const pinia = createPinia();
app.use(pinia);

//PWA
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

//VueRouter
app.use(router);

app.mount('#app');
