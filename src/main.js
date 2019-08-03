import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App";
import router from "./routes/index";

// Import Tailwindcss
import "@/assets/css/tailwind.css";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: ApolloClient
});

import store from "./store";
import { ApolloClient } from "apollo-boost";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
