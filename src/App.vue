<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>-->
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-indigo p-4 shadow">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <router-link to="/">
          <svg
            width="85"
            height="30"
            viewBox="0 0 85 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="85" height="30" fill="url(#pattern0)"></rect>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  xlink:href="#image0"
                  transform="translate(0 -0.000841751) scale(0.010101 0.0286195)"
                ></use>
              </pattern>
              <image
                id="image0"
                width="99"
                height="35"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAjCAYAAAH3ZIRvAAAACXBIWXMAAAsSAAALEgHS3X78AAAJP0lEQVRogcVaOXMURxR+uztcstHxA4zhB1DWOnFgXKAUXGUIbRIR2ZAAm9hESBE4WUSCyYQDnEpUAanWBQROPLIhR+AfwHLrXtfX17zpedPTu1rsr0rHzPT13ut3dpNDOz1GHO30BbXTcel7zTUg6hLRQWo1a9ROe68m3qlPoy9GCO9ezT/q2ee66TyuOhigw3dv9qgGtvPZt7vp9nqi/q+7aTGDARr/9vGa6qBmIkKH2bPff1FDuzq1mh2zxB6jaAKN7dJytJYyIaOz0KZm/sHP5TIGXL35R+/cnk16vFVXDLimGutRlu7vX1MNr6zucsT/9G63+vvlq70EFkzakfHy+Os9riE6OYac+VLRgw4TjOguOo9mz4d80qwgn3KZOHAutdPe17u26Nl2TdEC9kNufhuBpRMyq7PGs9RqzuD5QL1HT8be55pZ+dqJDsz92eNt7GZJvEEvUqs5x8Y5il9jteIEwD/j79W3UfP8fLumJsa7l72aW0Dd63dNIvllrzZlV33i9V5HwSfdffj/jNd89uXFz9WutRRyfo6rHUC0TK1mt4SN2FIXiGiOWs2LwvdJo3Mr1Gqu2NdW8KLA3GTt9CQRLWCfYus5oROdoVbzVmCMArtuKUFn4Cq1AP4fSbbUBNhlZo/P8/Hwjv9YJHY21nYmt6p22oMgH2zW1eAPNxrqL/BVsk0P0LbUIKj+F/zdJQJUABD4pX0bTvDcTNnvOTuhCZir5ybQK2pKE0EGGODS3g31F/KR4MydhlKHhH1vmomWqZ3yfrdGX4xMcx4DkI8ZrJP7ILCOCz5VVPmsazVzeoCBnaLp71MiSblJQkJjq+NsMEoY8AB5VBk3H7C4E8EWWqlfBNtoTASUPmYti9RqnrIPnJAZ54Ri4HNKWxS1YaA+9/avuk/g7pOxVWU3SZtC9c5gyvlljxBrf+0YVpOIa4hZS5TY+CIZMqeQmU0Ff7M/3GyoDc+RWwgMGt/D7bQHLfT7+GBjTCW5L3pbwOKdjCDvG6vOIIK7TUQFMAsWMNund2/SLx+tu++cWGi6MucMfh8OuFq4XA5rHJdMMDQwbrIJQQS8p91efNFwz1fe5wktAxaMH0sQghfEVh4gzU5C7fSgQMQpajUXc28qFBActMDCuY5wQHK+d4glyAAe/boX6yjTuCL0XTB6EYdIE8kBtxfZf9bFPPrnkE8EMW/VFJQ59bxWGDqKxl6f74PbOjQdAspi4EkT4Nngu2MW2xHby2NIhmPRWDtpF/C+nLhOzLxlhOR1ph8CsjFAwHmmfx2ztxcreva9Dhv9Sj5CQvU2iHOqcohO0R6duBPtNzQhk0eIIaVJclW2D0fW7ZEN9ZWXh2LD5CKIVpCUO34dbi1+RhWDyUCWrgiASYUnRpQPxwgzCxOMd/iL56oFw1/YVAMMAQPs89UR56fUWiQiOibfmTW5j4Qlj4AZS4APLPim541zz+00lytZcA8O4rnDRFWCryULR8rt9pkIEQd1wI+PvOdCKNIvYreTrITkrJAC9r2EG2tJ4RnRK9tW05HrEOEHhtOGq8UCTTlgRnMxk42BiNVM+Ba4t564sNt8v+xvXZ64+vCdqg0KY02shIKSwwJhceD2ub2bSikRJFqrxPMG7P3b64nINIkQISpYtJIYlAARL3v5hEfBKCYiU3wfi4y8OCEs0crQap5CWWFB6Lui4qqs8FSuEyYs4Qn6o9HVPAEM+Hb8dRZin9D/B0MRm6PnigAaKp1OxMQIUWMey4E5rmNLWS5JtUYf9/ev+tvierBDHoUYLAm3jwBiIRb1+j5BgrNK2RiFMJt9q9x4somVt1gIZU4xBv0Hlx7qfs5rcNIVq7SjWxLaZGAFgB/fZdV4Wz22pX3+nvWtLHBVgZ/CiGFDYOE7Dd7ixojeTrpotpMtwSeMGaczSHpbhlBSxJ1YJ1jKl8fwvb+Y8Av98vlKRBpbRcRnZhGxBYSuIfiOKUXGE10FXaU5bwLGfrZ+15jl2crUuHzuGXOaNN4HLyxWjIv63fCkdA07189qLJtssn/B6LBufgAGhNA1pbZ+ah/D5gkZ83GR80USxo6LnSXIFe2DMIdz/msE9SxBVUBUhZokip9kklupustP3hmyw77wegrCQOyBJHzMxCA4enMVBPP9NEtC7q433Bo9OL5Iwpj2DwuHiLBAdPVtSdIEMNhmXBLA7AONXrCKjdTS3ghg6Kqz/JDmMmGAyaFwHZuj7BuVbwrFF0kY4+aawx3jZavNi/YxC5G2vHiKRM4nPC3rVJa2WuDA53BjO8gIkrPE8LooL4yYQ6IqlKxhqpheaOb3V1HRREyYklJVIeNYSTQezJirdhyKjzADIUaVmAmLJWqn5eenBn9v1ejIDpKyXECfx2T8sNktjzIgSvg1QhhHhbGhiU6rYI6ujmw45kOtUeUtO5+CoHS9hYLJ8rdviieGnumaV849ALR9vFkX/VIVpFNJhmVZGDqUO9939jQ4nAAl34BnOEt7fQTPsN3Y6Sh83d1oqHaoD6EN2qIdzBZ2IhiINvYSDQeCApQzzclnzBFz4eQ0pn1ACBrqlNVC2+z0PxQAh5vzU79CYgAtAdPA/NtriRMKGCwB2oJ8/8Zq4upYviAsILRBUCUUbAB7blMBVX/QRlRHUE//J0GQiWgUeHjIAS2AX4AjhykKRVZkhIfICpVW/ECThChGwWrWoMC40Eg7PtaKOmOEIJbNPR/lQ+3qYkLZ6uRNR1XhCpYMxPrqaowyO+sN+nlkQzlja2aO7NpSIeUgsHcwwRxoCmqYvgkziD/3FQBTVGmO9BzXpcgtEU8ZJZQdqQ4HOEB0ZQ7sLH65BImed5A3EOzNTuFmjEXoeKAMt0zgUkSfFwSSitJ+BoSt3uXCoQHa1k6bZXlGma0fBIeT7TKzNDVg7erZQLcyBCSGEYsRkcS0dxjqL2BnJRQwAnG+4LsebDaCPgIJn/U1NtIqw/OtQpzfNYdngxURhwh7/fkUtdO0z4Lc8OtX2h9N+CUZ2OF76w1lrsBo2PobiJTWig4ZPodM2QLtrVbB9P3wdref+A3thtYwIF2UXfrAUVUn+iipvzJLLLqmWhp/eBOu2g5NoPmthVvu5izZ5B3T5h7toCXsZZOZ/zXQwY4ts+j1QDBIRKMSMw/6ptGQbPsHARH9CzyYpQFNYzG9AAAAAElFTkSuQmCC"
              ></image>
            </defs>
          </svg>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            to="doar"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Quero doar</router-link>
          <router-link
            to="adotar"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Quero adotar</router-link>
          <router-link
            to="favoritos"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Favoritos</router-link>
          <router-link
            to="chat"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Mensagens</router-link>
          <router-link
            to="busca"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Busca</router-link>
          <router-link
            to="minhaConta"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Minha conta</router-link>
          <router-link
            to="dicas"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Dicas</router-link>
          <router-link
            to="sobreNos"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark no-underline bg-white rounded shadow p-2 hover:bg-blue-lighter hover:text-white mr-4"
          >Sobre nós</router-link>
        </div>
        <div>
          <router-link
            to="login"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 no-underline"
          >Entrar</router-link>
        </div>
      </div>
    </nav>

    <!-- Seção sem reload -->

    <router-view/>

    <!-- Fim da Seção sem reload -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
