import { defineStore } from 'pinia';

//Die Funktion läuft intern bei allen actions ab um den State im localstorage zu speichern
function SaveState(abmelden) {
  const store = diveStore();

  //   State speichern
  if (store.aktiverUser != null) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  } else if (abmelden) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  }
}

//MainStore
export const diveStore = defineStore('diveLog', {
  //State
  state: () => ({
    aktiverUser: {},
  }),
  //Getter
  getters: {},
  //Actions
  actions: {
    setAktivenUser(user) {
      this.aktiverUser = user;

      SaveState();
    },
  },
});
