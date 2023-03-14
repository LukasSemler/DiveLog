<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import { diveStore } from './Store/Store.js';
import { onlineTest } from '@/utils/onlineTest.js';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { openDB } from 'idb';
import axios from 'axios';

let update = ref(false);
let isOnline = ref(true);
let db = null;

const store = diveStore();

const synchronize = async () => {
  const all = await db.getAll('dives');
  await all.forEach((el) => {
    console.log(el);
    if (el.new) {
      delete el.new;
      delete el.d_ID;
      axios.post(`http://localhost:3000/addDive/${store.aktiverUser.u_id}`, el);
    }
  });
};

const openDataBase = async () => {
  db = await openDB('divesDB', 1, {
    upgrade(db) {
      const store = db.createObjectStore('dives', { keyPath: 'd_ID' });
    },
  });
};

onMounted(async () => {
  if (!window.indexedDB) alert('IndexedDB is not available!');
  if (localStorage.getItem(store.$id)) {
    store.$state = JSON.parse(localStorage.getItem(store.$id));
  }

  isOnline.value = await onlineTest();
  window.addEventListener('online', () => {
    isOnline.value = true;
    synchronize();
  });
  window.addEventListener('offline', () => {
    isOnline.value = false;
    navigator.vibrate(200);
  });
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) {
    console.log('registration failed!');
    return;
  }
  registration.addEventListener('updatefound', () => (update.value = true));
  if (registration.waiting) update.value = true;
  if (!window.indexedDB) alert('IndexedDB is not available!');
  if (!db) await openDataBase();
  if (isOnline.value == true) await synchronize();
});

// Neueste Version vom SW holen
const onRestart = async () => {
  isOnline.value = await onlineTest();
  window.addEventListener('online', () => (isOnline.value = true));
  window.addEventListener('offline', () => (isOnline.value = false));
  const registration = await navigator.serviceWorker.getRegistration();
  if (registration) registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
  window.location.reload();
};
</script>

<template>
  <div
    class="flex items-center gap-x-6 bg-divelogBlue py-2.5 px-6 sm:px-3.5 sm:before:flex-1"
    v-if="!isOnline"
  >
    <p class="text-sm leading-6 text-white">
      <a>Du bist offline 😢</a>
    </p>
  </div>
  <div></div>
  <TransitionRoot as="template" :show="update">
    <Dialog as="div" class="relative z-10" @close="update = true">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100"
                >
                  <CloudDownloadIcon class="h-6 w-6 text-divelogBlue" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"
                    >Ein Update ist verfügbar</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Es gibt eine neuere Version der App, bitte klicken Sie auf den Button weiter
                      unten um die neueste Version der App herunterzuladen
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-divelogBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-divelogDarkBlue sm:text-sm"
                  @click="onRestart"
                >
                  Update App
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
