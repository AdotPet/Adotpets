import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Doar from "../views/Doar.vue";
import Adotar from "../views/Adotar.vue";
import Favoritos from "../views/Favoritos.vue";
import Mensagens from "../views/Mensagens.vue";
import Busca from "../views/Busca.vue";
import minhaConta from "../views/minhaConta.vue";
import Dicas from "../views/Dicas.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Description from "../views/Description";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!localStorage.token) {
    next();
    return;
  }
  next("/MinhaConta");
};

const ifAuthenticated = (to, from, next) => {
  if (localStorage.token) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
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
      path: "/MinhaConta",
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      component: minhaConta,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/dicas",
      name: "dicas",
      component: Dicas
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/Description/",
      name: "description",
      component: Description
    },
    {
      path: "/sobreNos",
      name: "sobreNos",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/sobreNos.vue")
    }
  ]
});
