<template>
  <div>
    <div v-if="loading" class="container mx-auto">
      <img
        class="w-32 mx-auto mt-24 mb-12"
        src="https://loading.io/spinners/kakidog/lg.puppy-dog-ajax-spinner.gif"
        alt
      />
      <p>Buscando dados em nosso sistema...</p>
    </div>
    <div v-else>
      <Carrousel />
      <Header />
      <Destaques />
      <Dogs />
      <Cats />
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/Home/Carrousel.vue";
import Destaques from "../components/Home/Destaques.vue";
import Dogs from "../components/Home/Dogs.vue";
import Cats from "../components/Home/Cats.vue";
import Header from "../components/Home/Header.vue";

import axios from "axios";

export default {
  components: {
    Carrousel,
    Header,
    Destaques,
    Dogs,
    Cats
  },
  data: () => {
    return {
      loading: false
    };
  },
  created() {
    const API_KEY = "522bf9a7-6e06-4966-a659-056c77e8a576";
    var config = {
      headers: {
        "x-api-key": API_KEY
      }
    };
    this.loading = true;
    setTimeout(() => {
      axios
        .get(
          "https://api.thedogapi.com/v1/images/search?size=small&limit=4",
          config
        )
        .then(res => (this.Pets = res.data));
      this.loading = false;
    }, 4000);
  }
};
</script>

<style lang="scss" scoped>
#banner {
  background-image: url("");
}
</style>
