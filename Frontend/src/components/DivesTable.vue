<template>
  <div class="m-4">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Your stats:</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Total Dives</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ dives.length }}
        </dd>
      </div>
      <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Total Divetime</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ totalDiveTime }}min
        </dd>
      </div>
    </dl>
  </div>
  <br />
  <hr />
  <h1 class="text-center text-3xl font-bold my-4">All your Dives</h1>
  <div id="map" style="height: 300px"></div>
  <br />
  <hr />
  <br />

  <div class="px-4 sm:px-6 lg:px-8 m-4">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Dives</h1>
        <p class="mt-2 text-sm text-gray-700">Here you can see a list of all your dives.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          @click="router.push('/addDive')"
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-divelogBlue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Dive
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    NR.
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(dive, diveIdx) in dives"
                  :key="diveIdx"
                  :class="diveIdx % 2 === 0 ? undefined : 'bg-gray-50'"
                  @click="showDetail(dive)"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >
                    {{ dive.nr }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                    {{ dive.title }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                    {{ new Date(dive.date).getDate() }}.{{ new Date(dive.date).getMonth() + 1 }}.{{
                      new Date(dive.date).getFullYear()
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, toRaw } from 'vue';
import axios from 'axios';
import { diveStore } from '../Store/Store.js';
import { useRouter } from 'vue-router';
import mapbox from 'mapbox-gl';
import { onlineTest } from '@/utils/onlineTest.js';
import { openDB } from 'idb';

//MAP
let map = ref(null);
let mapAccessToken = ref(
  'pk.eyJ1IjoibHVrYXNzZW1sZXIiLCJhIjoiY2xlZTM3MzlyMDVuODN0b2NueWQ1OHNpZyJ9.NboOeOXWIhK0vucp7B9A5w',
);
let mapStyle = 'mapbox://styles/lukassemler/clbaoba0t007t14nt6n0qujvl';

const router = useRouter();
const store = diveStore();
let dives = ref([]);
const isOnline = ref(true);
let db = null;

const getDives = async () => {
  if (!isOnline.value) {
    let data = await db.getAll('dives');
    dives.value = data;
    return;
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/dives/${store.aktiverUser.u_id}`);
    console.log(data);
    dives.value = data;
    await db.clear('dives');
    dives.value.forEach((e) => {
      db.put('dives', toRaw(e));
    });
  } catch (error) {
    console.error(error);
    isOnline.value = false;
    getDives();
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
  await getDives();
  map.value = new mapbox.Map({
    container: 'map',
    style: mapStyle,
    accessToken: mapAccessToken.value,
    center: [14, 50],
    zoom: 1,
  });
  for (const iterator of dives.value) {
    const coords = JSON.parse(iterator.coords);

    new mapbox.Marker({ anchor: 'center', color: '#03C7FC' })
      .setLngLat([coords[0], coords[1]])
      .addTo(map.value);
  }
});

const totalDiveTime = computed(() => {
  let totalDiveTime = 0;
  dives.value.forEach((dive) => {
    totalDiveTime += dive.diveTime;
  });
  return totalDiveTime;
});

function showDetail(dive) {
  console.log(dive.d_ID);
  router.push(`/diveDetail/${dive.d_ID}`);
}
</script>
