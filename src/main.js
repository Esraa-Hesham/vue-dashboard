import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel from "v-owl-carousel";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  carousel,
  render: (h) => h(App),
}).$mount("#app");
