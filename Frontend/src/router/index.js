import { createRouter, createWebHashHistory } from 'vue-router';
import LoginRegisterView from '../views/LoginRegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import LoginComp from '../components/LoginComp.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login_RegisterView',
      component: LoginRegisterView,
      children: [
        { path: '', component: LoginComp },
        // { path: 'register', component: Comp_Register },
      ],
    },
    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
