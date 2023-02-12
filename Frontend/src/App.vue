<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { diveStore } from './Store/Store.js';

const store = diveStore();

onMounted(() => {
  if (localStorage.getItem(store.$id)) {
    store.$state = JSON.parse(localStorage.getItem(store.$id));
  }
});
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
