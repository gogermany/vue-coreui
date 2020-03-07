import "core-js/stable";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use(CoreuiVue);

new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
