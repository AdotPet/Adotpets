import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Doar from "./views/Doar.vue";
import Adotar from "./views/Adotar.vue";
import Favoritos from "./views/Favoritos.vue";
import Mensagens from "./views/Mensagens.vue";
import Busca from "./views/Busca.vue";
import minhaConta from "./views/minhaConta.vue";
import Dicas from "./views/Dicas.vue";
import sobreNos from "./views/sobreNos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/doar",
      name: "doar",
      component: Doar
    },
    {
      path: "/adotar",
      name: "adotar",
      component: Adotar
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: Favoritos
    },
    {
      path: "/chat",
      name: "mensagens",
      component: Mensagens
    },
    {
      path: "/busca",
      name: "busca",
      component: Busca
    },
    {
      path: "/minhaConta",
      name: "minhaConta",
      component: minhaConta
    },
    {
      path: "/dicas",
      name: "dicas",
      component: Dicas
    },
    {
      path: "/sobreNos",
      name: "sobreNos",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/sobreNos.vue")
    }
  ]
});
