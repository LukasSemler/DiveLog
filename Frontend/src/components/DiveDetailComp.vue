<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Dive Info</h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Dive Number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.nr }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Title</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ diveDetail.title }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Date</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ new Date(diveDetail.date).getDate() }}.{{
              new Date(diveDetail.date).getMonth() + 1
            }}.{{ new Date(diveDetail.date).getFullYear() }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Country</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.location }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Dive Site</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.divesite }}
          </dd>
        </div>
      </dl>
      <!-- <div :style="`height: ${mapHeight}`" id="map"></div> -->
    </div>
  </div>
  <br />
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Dive Details</h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Max. Depth</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ diveDetail.depth }}m</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Divetime</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.diveTime }}min
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Air In</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.airIn }}Bar
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Air Out</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.airOut }}Bar
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Wetsuit</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.suit }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Weight</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ diveDetail.weight }}kg
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <h1 class="text-center text-xl my-4">View you Dive on the Map</h1>
  <div id="karte" style="height: 300px"></div>
  <br />
  <hr />
  <br />
  <h1 class="text-center text-xl font-bold my-3">The best Image from your Dive</h1>
  <img :src="diveDetail.image" alt="" />
</template>

<script setup>
import axios from 'axios';
import mapbox from 'mapbox-gl';
import { diveStore } from '../Store/Store.js';
import { ref, onMounted, toRaw , onUpdated} from 'vue';
import { onlineTest } from '@/utils/onlineTest.js';
import { openDB } from 'idb';

const props = defineProps({
  diveID: String,
});

const store = diveStore();

const isOnline = ref(true);
let db = null;
const diveDetail = ref();

//MAP
let map = ref(null);
let mapAccessToken = ref(
  'pk.eyJ1IjoibHVrYXNzZW1sZXIiLCJhIjoiY2xlZTM3MzlyMDVuODN0b2NueWQ1OHNpZyJ9.NboOeOXWIhK0vucp7B9A5w',
);
let mapStyle = 'mapbox://styles/lukassemler/clbaoba0t007t14nt6n0qujvl';
let mapHeight = ref('0px');

const getDiveDetail = async () => {
  if (!isOnline.value) {
    let data = await db.get('dives',parseInt(props.diveID));
    diveDetail.value = data;
    return;
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/getdiveinfo/${store.aktiverUser.u_id}/${props.diveID}`);
    diveDetail.value = data[0];
  } catch (error) {
    console.error(error);
    isOnline.value = false;
    getDiveDetail();
  }
};

const openDataBase = async () => {
  db = await openDB('divesDB', 1, {
    upgrade(db) {
      const store = db.createObjectStore('dives', { keyPath: 'd_ID' });
    },
  });
};


onMounted(async () => {
  isOnline.value = await onlineTest();
  window.addEventListener('online', () => {
    isOnline.value = true;
  });
  window.addEventListener('offline', () => {
    isOnline.value = false;
    navigator.vibrate(200);
  });
  await openDataBase();
  await getDiveDetail();
  const coordinaten = JSON.parse(diveDetail.value.coords);
  mapHeight.value = '300px';

  mapbox.accessToken = mapAccessToken.value;
  map.value = await new mapbox.Map({
    container: 'karte', // container ID
    style: mapStyle, // style URL
    center: [coordinaten[0], coordinaten[1]],
    zoom: 4, // starting zoom
  });

  new mapbox.Marker({
    anchor: 'center',
    color: '#03C7FC',
  })
    .setLngLat([coordinaten[0], coordinaten[1]])
    .addTo(map.value);
});

onUpdated(async () => {
   await getDiveDetail();
})
</script>
