import { createRouter, createWebHashHistory } from 'vue-router';
import LoginRegisterView from '../views/LoginRegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import LoginComp from '../components/LoginComp.vue';
import RegisterComp from '../components/RegisterComp.vue';
import HomeView from '../views/HomeView.vue';
import AddDiveView from '../views/AddDiveView.vue';
import diveDetail from '../views/DiveDetailView.vue';
import { diveStore } from '../Store/Store.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login_RegisterView',
      component: LoginRegisterView,
      children: [
        { path: '', component: LoginComp },
        { path: 'register', component: RegisterComp },
      ],
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const store = diveStore();
        if (store.aktiverUser) {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/addDive',
      name: 'Add Dive',
      component: AddDiveView,
    },
    {
      path: '/diveDetail/:id',
      params: true,
      name: 'DiveDetail',
      component: diveDetail,
      beforeEnter: (to, from, next) => {
        const store = diveStore();
        if (store.aktiverUser) {
          next();
        } else {
          next('/');
        }
      },
    },
    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
