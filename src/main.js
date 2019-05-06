import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import { VueSlideoutPanel } from "vue2-slideout-panel";

Vue.component("slideout-panel", VueSlideoutPanel);
// Import Tailwindcss
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
