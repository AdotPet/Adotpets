<template>
  <div>
    <h1 class="pt-4">Gatos</h1>

    <div class="container my-2 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          v-for="pet in Pets"
          :key="pet.id"
        >
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <img alt="Placeholder" class="block h-64 w-full" :src="pet.url" />
            </a>

            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-black" href="#">{{
                  pet.id
                }}</a>
              </h1>
              <p class="text-grey-darker text-sm">{{ pet.life_span }}</p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full w-8 h-8"
                  :src="pet.url"
                />
                <p class="ml-2 text-sm">{{ pet.id }}</p>
              </a>
              <a class="no-underline text-grey-darker" href="#">
                <span class="hidden">Like</span>
                <ul class="list-reset flex mr-3">
                  <li>
                    <i class="fas fa-heart ml-3 hover:text-red-dark"></i>
                  </li>
                  <li>
                    <i class="fas fa-share ml-3 hover:text-red-dark"></i>
                  </li>
                  <li>
                    <i class="fas fa-ellipsis-h ml-3 hover:text-red-dark"></i>
                  </li>
                  <li></li>
                </ul>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Gatos",
  data() {
    return {
      Pets: []
    };
  },
  created() {
    const API_KEY = "522bf9a7-6e06-4966-a659-056c77e8a576";
    var config = {
      headers: {
        "x-api-key": API_KEY
      }
    };
    axios
      .get(
        "https://api.thedogapi.com/v1/images/search?size=small&limit=3",
        config
      )
      .then(res => (this.Pets = res.data));
  }
};
</script>
