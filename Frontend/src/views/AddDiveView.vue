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
          </div>
          
          <div class="sm:col-span-6">
            <label for="street-address" class="block text-sm font-medium text-gray-700"
              >Street address</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <div class="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700"
              >State / Province</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium text-gray-700"
              >ZIP / Postal code</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-divelogBlue focus:ring-divelogBlue sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p class="mt-1 text-sm text-gray-500">Here can you Log a new Dive you made.</p>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div>
            <div class="flex flex-row">
              <img
                class="inline-block h-10 w-10 mr-4 rounded-full self-end"
                src="/Icons/wetsuit-svgrepo-com.svg"
                alt=""
              />
              <div class="flex flex-col w-full">
                <Combobox as="div" v-model="selectedSuit">
                  <ComboboxLabel class="block text-sm font-medium text-gray-700"
                    >Suit</ComboboxLabel
                  >
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

          <div class="sm:col-span-6">
            <label for="cover-photo" class="block text-sm font-medium text-gray-700"
              >Cover photo</label
            >
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
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p class="mt-1 text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what else you want to
            hear about.
          </p>
        </div>
        <div class="mt-6">
          <fieldset>
            <legend class="sr-only">By Email</legend>
            <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
            <div class="mt-4 space-y-4">
              <div class="relative flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">Comments</label>
                  <p class="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="offers" class="font-medium text-gray-700">Offers</label>
                  <p class="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
            <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                />
                <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700"
                  >Everything</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                />
                <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700"
                  >Same as email</label
                >
              </div>
              <div class="flex items-center">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-divelogBlue focus:ring-divelogBlue"
                />
                <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700"
                  >No push notifications</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
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

const Suits = [
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
    ? Suits
    : Suits.filter((person) => {
        return person.name.toLowerCase().includes(querySuit.value.toLowerCase());
      }),
);

const router = useRouter();
</script>
