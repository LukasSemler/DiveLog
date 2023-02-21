<template>
  <button
    type="button"
    class="inline-flex items-center rounded-full border border-transparent bg-divelogBlue p-2 text-white shadow-sm hover:bg-divelogDarkBlue focus:outline-none focus:ring-2 focus:ring-divelogBlue focus:ring-offset-2 m-4"
    @click="router.go(-1)"
  >
    <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
  </button>
  <h1 class="text-center text-3xl font-bold mt-4">Log Dive</h1>
  <form class="space-y-8 divide-y divide-gray-200 m-4">
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">General Information</h3>
          <p class="mt-1 text-sm text-gray-500">
            Here you can add general Information of the Dive.
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <div class="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <div class="mt-1">
              <input
                type="date"
                name="date"
                id="date"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="Country" class="block text-sm font-medium text-gray-700">Country</label>
            <div class="mt-1">
              <input
                id="country"
                name="country"
                type="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="divesite" class="block text-sm font-medium text-gray-700">Divesite</label>
            <div class="mt-1">
              <input
                id="divesite"
                name="divesite"
                type="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
            <p class="my-3 text-gray-500">or pick your current location</p>

            <div class="flex flex-row justify-center">
              <button
                type="button"
                class="mt-4 inline-flex items-center rounded-md border border-transparent bg-divelogBlue px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-divelogDarkBlue focus:outline-none focus:ring-2 focus:ring-divelogBlue focus:ring-offset-2"
              >
                Get current location
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-5">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Specific Information</h3>
          <p class="mt-1 text-sm text-gray-500">
            Here you can add specific Information of the Dive like depth and time.
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="depth" class="block text-sm font-medium text-gray-700">Max. Depth</label>
            <div class="mt-1">
              <input
                type="number"
                name="depth"
                id="depth"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="time" class="block text-sm font-medium text-gray-700">Dive Time</label>
            <div class="mt-1">
              <input
                type="number"
                name="time"
                id="time"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="airIn" class="block text-sm font-medium text-gray-700">Air In</label>
            <div class="mt-1">
              <input
                type="number"
                name="airIn"
                id="airIn"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="airOut" class="block text-sm font-medium text-gray-700">Air Our</label>
            <div class="mt-1">
              <input
                type="number"
                name="airOut"
                id="airOut"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="flex flex-row">
            <!-- <img
                class="inline-block h-10 w-10 mr-4 rounded-full self-end"
                src="/Icons/oxygen-tank-svgrepo-com.svg"
                alt=""
              /> -->
            <div class="flex flex-col w-full">
              <Combobox as="div" v-model="selectedAir">
                <ComboboxLabel class="block text-sm font-medium text-gray-700"
                  >Type of Air</ComboboxLabel
                >
                <div class="relative mt-1">
                  <ComboboxInput
                    class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-divelogBlue focus:outline-none focus:ring-1 focus:ring-divelogBlue sm:text-sm"
                    @change="queryAir = $event.target.value"
                    :display-value="(air) => air?.name"
                  />
                  <ComboboxButton
                    class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                  >
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </ComboboxButton>

                  <ComboboxOptions
                    v-if="filteredAir.length > 0"
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ComboboxOption
                      v-for="person in filteredAir"
                      :key="person.id"
                      :value="person"
                      as="template"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                          active ? 'bg-divelogBlue text-white' : 'text-gray-900',
                        ]"
                      >
                        <span :class="['block truncate', selected && 'font-semibold']">
                          {{ person.name }}
                        </span>

                        <span
                          v-if="selected"
                          :class="[
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-divelogBlue',
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </div>
              </Combobox>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="weight" class="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <div class="mt-1">
              <input
                type="number"
                name="weight"
                id="weight"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="flex flex-row">
            <!-- <img
                class="inline-block h-10 w-10 mr-4 rounded-full self-end"
                src="/Icons/wetsuit-svgrepo-com.svg"
                alt=""
              /> -->
            <div class="flex flex-col w-full">
              <Combobox as="div" v-model="selectedSuit">
                <ComboboxLabel class="block text-sm font-medium text-gray-700">Suit</ComboboxLabel>
                <div class="relative mt-1">
                  <ComboboxInput
                    class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-divelogBlue focus:outline-none focus:ring-1 focus:ring-divelogBlue sm:text-sm"
                    @change="querySuit = $event.target.value"
                    :display-value="(person) => person?.name"
                  />
                  <ComboboxButton
                    class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
                  >
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </ComboboxButton>

                  <ComboboxOptions
                    v-if="filteredSuit.length > 0"
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ComboboxOption
                      v-for="person in filteredSuit"
                      :key="person.id"
                      :value="person"
                      as="template"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                          active ? 'bg-divelogBlue text-white' : 'text-gray-900',
                        ]"
                      >
                        <span :class="['block truncate', selected && 'font-semibold']">
                          {{ person.name }}
                        </span>

                        <span
                          v-if="selected"
                          :class="[
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-divelogBlue',
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>
                </div>
              </Combobox>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Memories</h3>
          <p class="mt-1 text-sm text-gray-500">
            Here you can Upload a few Images from the dive if you want.
          </p>
        </div>
        <div class="mt-6">
          <div class="sm:col-span-6">
            <label for="cover-photo" class="block text-sm font-medium text-gray-700">Image</label>
            <div
              class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-medium text-divelogBlue focus-within:outline-none focus-within:ring-2 focus-within:ring-divelogBlue focus-within:ring-offset-2 hover:text-divelogBlue"
                  >
                    <p class="text-center">Upload a file</p>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                      multiple="true"
                    />
                  </label>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          @click="router.push(`/home`)"
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-divelogBlue focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-divelogBlue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg--divelogBlue focus:outline-none focus:ring-2 focus:ring-divelogBlue focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';

// Combobox Suit
const suits = [
  { id: 1, name: 'Without' },
  { id: 2, name: 'Shorty' },
  { id: 3, name: '3mm' },
  { id: 4, name: '5mm' },
  { id: 5, name: '7mm' },
  { id: 6, name: 'Semi-Dry' },
  { id: 7, name: 'Dry' },
];

const querySuit = ref('');
const selectedSuit = ref(null);
const filteredSuit = computed(() =>
  querySuit.value === ''
    ? suits
    : suits.filter((suit) => {
        return suit.name.toLowerCase().includes(querySuit.value.toLowerCase());
      }),
);

//_______________________________

const air = [
  { id: 1, name: 'Air' },
  { id: 2, name: 'EANx 30' },
  { id: 3, name: 'EANx 31' },
  { id: 4, name: 'EANx 32' },
  { id: 5, name: 'EANx 33' },
];

const queryAir = ref('');
const selectedAir = ref(null);
const filteredAir = computed(() =>
  queryAir.value === ''
    ? air
    : air.filter((air) => {
        return air.name.toLowerCase().includes(queryAir.value.toLowerCase());
      }),
);

const router = useRouter();
</script>
