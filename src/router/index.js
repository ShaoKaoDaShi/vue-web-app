import Vue from 'vue';
import VueRouter from 'vue-router';
import BarPage from '../views/BarPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/bar',
    name: 'bar',
    component: BarPage,
  },
  {
    path: '/foo',
    name: 'foo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FooPage.vue'),
  },
];

export default routes;
