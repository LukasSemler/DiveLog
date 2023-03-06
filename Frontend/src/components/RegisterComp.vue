<template>
  <div
    aria-live="assertive"
    class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-40"
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showError"
          class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Error</p>
                <p class="mt-1 text-sm text-gray-500">
                  Es gibt bereits einen User mit dieser Email-Adresse, bitte verwenden Sie eine
                  andere
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button
                  @click="showError = false"
                  class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!-- ----------------------------------------------------------------------------------------------- -->

  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="/diver-svgrepo-com.svg" alt="Dive Log Icon" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <div>
            <div>
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Firstname</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.vorname"
                      type="text"
                      id="first-name"
                      name="first-name"
                      autocomplete="given-name"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
                    />

                    <p
                      v-if="v$.vorname.$invalid"
                      class="mt-2 text-sm text-diveRed"
                      id="email-error"
                    >
                      {{ v$.vorname.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>

                <div>
                  <label for="last-name" class="block text-sm font-medium text-gray-700"
                    >Lastname</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.nachname"
                      type="text"
                      id="last-name"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
                    />

                    <p
                      v-if="v$.nachname.$invalid"
                      class="mt-2 text-sm text-diveRed"
                      id="email-error"
                    >
                      {{ v$.nachname.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="company" class="block text-sm font-medium text-gray-700">Email</label>
                  <div class="mt-1">
                    <input
                      v-model="state.email"
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
                    />

                    <p v-if="v$.email.$invalid" class="mt-2 text-sm text-diveRed" id="email-error">
                      {{ v$.email.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="password" class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.password"
                      type="password"
                      name="password"
                      id="password"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
                    />

                    <p
                      v-if="v$.password.$invalid"
                      class="mt-2 text-sm text-diveRed"
                      id="email-error"
                    >
                      {{ v$.password.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="phone" class="block text-sm font-medium text-gray-700"
                    >Repeat Password</label
                  >
                  <div class="mt-1">
                    <input
                      v-model="state.c_password"
                      type="password"
                      name="c_password"
                      id="c_password"
                      class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-divelogBlue focus:border-divelogBlue sm:text-sm"
                    />

                    <p
                      v-if="v$.c_password.$invalid"
                      class="mt-2 text-sm text-diveRed"
                      id="email-error"
                    >
                      {{ v$.c_password.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/')"
                class="font-medium text-divelogBlue hover:text-diveDarkBlue underline hover:cursor-pointer"
              >
                To Login
              </a>
            </div>
          </div>

          <div>
            <button
              @click="getCode"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-divelogBlue hover:bg-diveDarkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-divelogBlue"
            >
              Register
            </button>

            <!-- <button
              v-else
              :disabled="checkError"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-divelogBlue"
            >
              Registrieren
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { reactive, computed, ref } from 'vue';

import useValidate from '@vuelidate/core';
import { required, email, numeric, minLength, sameAs } from '@vuelidate/validators';
import axios from 'axios';

const router = useRouter();
let showError = ref(false);
let showVerifikation = ref(false);

let image = ref(null);
let imageSchicken = ref(null);
let datentyp = ref(null);

let code = ref('');

// Variablen for input erstellen
const state = reactive({
  vorname: '',
  nachname: '',
  email: '',
  strasse_hnr: '',
  stadt: '',
  plz: '',
  password: '',
  c_password: '',
});

const state2 = reactive({
  char1: '',
  char2: '',
  char3: '',
  char4: '',
  char5: '',
  char6: '',
});

let otpString = 'aaaaaa';

// Rules for vuelidate
const rules = computed(() => {
  return {
    vorname: {
      required,
    },
    nachname: {
      required,
    },
    email: {
      required,
      email,
    },
    strasse_hnr: {
      required,
    },
    stadt: {
      required,
    },
    plz: {
      required,
      numeric,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    c_password: {
      required,
      minLength: minLength(6),
      sameAs: sameAs(state.password),
    },
  };
});

const rules2 = computed(() => {
  return {
    char1: {
      required,
    },
    char2: {
      required,
    },
    char3: {
      required,
    },
    char4: {
      required,
    },
    char5: {
      required,
    },
    char6: {
      required,
    },
  };
});

const v$ = useValidate(rules, state);
// const vOTP = useValidate(rules2, state2);

//Bild hochladen
function onFileChanged(event) {
  {
    // Reference to the DOM input element
    let input = event.target;
    imageSchicken.value = event.target.files[0];
    const name = imageSchicken.value.name;
    if (name.includes('.jpg')) {
      datentyp.value = 'jpg';
    } else if (name.includes('.png')) {
      datentyp.value = 'png';
    } else if (name.includes('.jpeg')) {
      datentyp.value = 'jpeg';
    }
    // Ensure that you have a file before attempting to read it
    if (input.files && input.files[0]) {
      // create a new FileReader to read this image and convert to base64 format
      let reader = new FileReader();
      // Define a callback function to run, when FileReader finishes its job
      reader.onload = (e) => {
        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
        // Read image as base64 and set to imageData
        image.value = e.target.result;
      };
      // Start the reader job - read file as a data url (base64 format)
      reader.readAsDataURL(input.files[0]);
    }
  }
}

async function sendImage() {
  let formData = new FormData();
  formData.append('image', imageSchicken.value);
  formData.append('titel', state.email);
  formData.append('datentyp', datentyp.value);
  const res = await axios.post(`/sendThumbnail`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  if (res.status != 200) showError.value = true;
  setTimeout(() => {
    showError.value = false;
  }, 5000);
}

async function sendData() {
  // Register erledigen
  const res = await axios.post('/sendDataRegister', {
    vorname: state.vorname,
    nachname: state.nachname,
    email: state.email,
    strasse_hnr: state.strasse_hnr,
    stadt: state.stadt,
    plz: state.plz,
    password: state.password,
    link_thumbnail: `http://localhost:2410/images/${state.email}.${datentyp.value}`,
  });
  if (res.status == 200) {
    felderClearen();
    router.push('/');
  }
}

async function register() {
  try {
    if (code.value == otpString) {
      await sendImage();
      await sendData();
    } else alert('Code stimmt nicht überein');
  } catch (error) {
    console.log(error);
  }
}

async function getCode(e) {
  e.preventDefault();
  try {
    v$.value.$validate();

    if (!v$.value.$error) {
      console.log('sucess');
      // Register erledigen
      const { data } = await axios.post('/sendCodeRegister', {
        vorname: state.vorname,
        nachname: state.nachname,
        email: state.email,
      });

      code.value = data;
      console.log('Code: ', code.value);

      // OTP anzeigen
      showVerifikation.value = true;
      OTPInput();
    } else console.log('Nicht alle Felder ausgefüllt');

    e.preventDefault();
  } catch (error) {
    e.preventDefault();

    console.log(error.message);

    showError.value = true;

    setTimeout(() => {
      showError.value = false;
    }, 5000);

    felderClearen();
  } finally {
    e.preventDefault();
  }
}

//? ----------------------------------------------------------------

// const checkError = computed(() => {
//   return v$.value.$invalid == true ? true : false;
// });

// const checkErrorOTP = computed(() => {
//   return vOTP.value.$invalid == true ? true : false; s
// });

function felderClearen() {
  state.vorname = '';
  state.nachname = '';
  state.email = '';
  state.strasse_hnr = '';
  state.stadt = '';
  state.plz = '';
  state.telefon = '';
  state.password = '';
  state.c_password = '';
}
</script>
