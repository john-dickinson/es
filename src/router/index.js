import Vue from 'vue';
import Router from 'vue-router';
import Menu from '@/components/Menu';
import Work from '@/components/Work';
import Training from '@/components/Training';
import Implementation from '@/components/Implementation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/training',
      name: 'Training',
      component: Training,
    },
    {
      path: '/deployment',
      name: 'Deployment',
      component: Work,
    },
    {
      path: '/implementation',
      name: 'Implementation',
      component: Implementation,
    },
  ],
});
