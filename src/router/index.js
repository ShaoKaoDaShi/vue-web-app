import routes from './route'
import VueRouter from "vue-router";
import Nprogress from '@/components/Nprogress';
const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "/vue/" : "/",
  mode: "history",
  routes,
});

router.beforeEach((to, from , next) => {
  Nprogress.start();
  next()
});

router.afterEach(() => {
  Nprogress.done();
});
router.onError(() => {
  Nprogress.done();
});

export default router;