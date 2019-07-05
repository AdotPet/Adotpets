import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import { VueSlideoutPanel } from "vue2-slideout-panel";

Vue.component("slideout-panel", VueSlideoutPanel);

// Import Tailwindcss
import "@/assets/css/tailwind.css";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
