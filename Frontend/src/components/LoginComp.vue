<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-20 w-auto"
        src="/diver-svgrepo-com.svg"
        alt="Coming Home Safe"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email-Adresse
            </label>
            <div class="mt-1">
              <input
                v-model="state.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-chsBlue focus:border-chsBlue sm:text-sm"
              />

              <p v-if="v$.email.$invalid" class="mt-2 text-sm text-chsRed" id="email-error">
                {{ v$.email.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Passwort </label>
            <div class="mt-1">
              <input
                v-model="state.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-chsBlue focus:border-chsBlue sm:text-sm"
              />

              <p v-if="v$.password.$invalid" class="mt-2 text-sm text-chsRed" id="email-error">
                {{ v$.password.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <hr />

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/register')"
                class="font-medium text-chsBlue hover:text-chsDarkBlue underline hover:cursor-pointer"
              >
                Erstellen Sie ein Konto
              </a>
            </div>
          </div>

          <div>
            <button
              v-if="!checkError"
              @click="login"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-chsBlue hover:bg-chsDarkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chsBlue"
            >
              Sign in
            </button>

            <button
              :disabled="checkError"
              v-else
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-chsDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chsBlue"
            >
              Sign in
            </button>
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
import { PiniaStore } from '../Store/Store';
const store = PiniaStore();

const router = useRouter();
let showError = ref(false);
let errorCode = ref(false);
let showOTP = ref(false);
let code = ref('');
let userVonDB = ref(null);
let rememberMe = ref(false);
const otp = ref(null);
let otpString = 'aaaaaa';
const input = reactive({ char1: '', char2: '', char3: '', char4: '', char5: '' });
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
onMounted(() => {
  try {
    const value = JSON.parse(localStorage.getItem('reload'));
    if (value) {
      localStorage.removeItem('reload');
      window.location.reload();
    }
    let rememberMeLS = JSON.parse(localStorage.getItem('rememberMe'));
    if (rememberMeLS) {
      state.email = rememberMeLS.email;
      state.password = rememberMeLS.passwort;
      rememberMe.value = true;
    }
  } catch (error) {
    console.log(error);
  }
});
async function login(e) {
  e.preventDefault();
  try {
    v$.value.$validate();
    if (!v$.value.$error) {
      const res = await axios.post('/login', {
        email: state.email,
        password: state.password,
      });
      console.log(res.data);
      userVonDB.value = res.data.foundUser;
      if (res.status == 200 && res.data.code == 'kein Admin') {
        // store.aktiverUser = res.data.foundUser;
        store.setAktivenUser(userVonDB.value);
        //Kunde mit ServiceWorker verbinden + übergabe ob DEV true oder false ist
        await store.connectToServiceWorker(devmode.value);
        //Kunden im LS speichern wenn er das will
        if (rememberMe.value) {
          localStorage.setItem('rememberMe', JSON.stringify(userVonDB.value));
        }
        if (localStorage.getItem('rememberMe') && !rememberMe.value)
          localStorage.removeItem('rememberMe');
        router.push('/usermap');
      } else {
        code.value = res.data.code;
        console.log('Code: ', code.value);
        showOTP.value = true;
        //TODO KOMMT WIEDER WEG
        otpString = code.value;
        OTPInput();
      }
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
