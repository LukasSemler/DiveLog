<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-20 w-auto" src="/diver-svgrepo-com.svg" alt="Dive Log Icon" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
            <div class="mt-1">
              <input
                v-model="state.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
              />

              <p v-if="v$.email.$invalid" class="mt-2 text-sm text-diveRed" id="email-error">
                {{ v$.email.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                v-model="state.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
              />

              <p v-if="v$.password.$invalid" class="mt-2 text-sm text-diveRed" id="email-error">
                {{ v$.password.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <hr />

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/register')"
                class="font-medium text-divelogBlue hover:text-chsDarkBlue underline hover:cursor-pointer"
              >
                Create an Account
              </a>
            </div>
          </div>

          <div>
            <button
              @click="login"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-divelogBlue hover:bg-divelogDarkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-divelogBlue"
            >
              Sign in
            </button>

            <!-- <button
              :disabled="checkError"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-chs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-divelogBlue"
            >
              Sign in
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { diveStore } from '../Store/Store';
const store = diveStore();

const router = useRouter();
let showError = ref(false);
let errorCode = ref(false);
let showOTP = ref(false);
let code = ref('');
let userVonDB = ref(null);
let rememberMe = ref(false);

// Inputs
let state = reactive({
  email: '',
  password: '',
});
// Rules for vuelidate
const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});
const v$ = useValidate(rules, state);

async function login(e) {
  console.log('LOGIN');
  e.preventDefault();
  try {
    v$.value.$validate();
    if (!v$.value.$error) {
      //TODO
      //! Login mit Server bauen
      store.setAktivenUser({
        u_id: 3,
        vorname: 'Lukas',
        nachname: 'Semler',
        email: 'lukas.semler@gmail.com',
        passwort: 'LukasPW',
        strasse: 'Venusweg',
        hnr: '11',
        plz: '1140',
        stadt: 'Wien',
      });
      console.log(store.aktiverUser);

      router.push('/home');
    } else {
      console.log('Fehler');
    }
    e.preventDefault();
  } catch (error) {
    e.preventDefault();
    console.log(error.message);
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 5000);
  } finally {
    e.preventDefault();
  }
}

const checkError = computed(() => {
  return v$.value.$invalid == true ? true : false;
});
</script>
