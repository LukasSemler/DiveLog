<template>
  <button
    type="button"
    class="inline-flex items-center rounded-full border border-transparent bg-divelogBlue p-2 text-white shadow-sm hover:bg-divelogDarkBlue focus:outline-none focus:ring-2 focus:ring-divelogBlue focus:ring-offset-2 m-4"
    @click="router.go(-1)"
  >
    <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
  </button>

  <Suspense>
    <DiveDetailComp :diveID="id"></DiveDetailComp>
    <template #fallback>
      <h1>LOADING</h1>
    </template>
  </Suspense>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
import { diveStore } from '../Store/Store.js';
import DiveDetailComp from '../components/DiveDetailComp.vue';

const router = useRouter();

const id = router.currentRoute.value.params.id;
</script>
