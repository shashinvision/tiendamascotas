import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from "portal-vue";
import router from "./router";
import store from "./store";

/*
 * Author: Felipe Mancilla.
 * LastUpdate: 08/11/2021
 * Vue, Router y Vuex lo instalo con VueCLI
 * bootstrap-vue y bootstrap son instalados por npm directo para poder instalar IconsPlugin
 */

Vue.use(PortalVue);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
