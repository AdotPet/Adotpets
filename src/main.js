import Vue from "vue";
import App from "./App";
import router from "./routes/index";

// Import Tailwindcss
import "@/assets/css/tailwind.css";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
