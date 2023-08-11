import "./public-path";
import "./request/index";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import router from "./router/index";
const pinia = createPinia();
Vue.config.productionTip = false;
Vue.use(VueRouter).use(ElementUI).use(pinia).use(PiniaVuePlugin);
let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    router,
    pinia,
    render: (h) => h(App),
    superProps: props,
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);

  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
