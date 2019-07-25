<template>
  <div class="container ml-12">
    <h1 class="my-6">Meus Animals</h1>

    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        v-for="pet in animals"
        :key="pet.id"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
      >
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg hover:bg-indigo-lightest">
          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <router-link :to="'/Description/' + pet.id">
                {{
                pet.name
                }}
              </router-link>
            </h1>
            <p class="text-grey-darker text-sm">{{ pet.life_span }}</p>
          </header>

          <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a class="flex items-center no-underline hover:underline text-black" href="#">
              <img class="block rounded-full w-8 h-8" :src="picture" />
              <div v-for="(picture, index) in animals" :key="picture[index].pictures[0].url">
                <p class="ml-2 text-sm">{{ picture.url }}</p>
              </div>
            </a>
            <a class="no-underline text-grey-darker" href="#">
              <span class="hidden">Like</span>
              <ul class="list-reset flex mr-3">
                <li>
                  <button @click="heart()">
                    <i class="fa fa-heart ml-3 text-bg-indigo hover:text-red-dark"></i>
                  </button>
                </li>
                <li>
                  <i class="fa fa-share ml-3 text-bg-indigo hover:text-red-dark"></i>
                </li>
                <li>
                  <i class="fa fa-ellipsis-h ml-3 text-bg-indigo hover:text-red-dark"></i>
                </li>
              </ul>
            </a>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "https://adotpets.herokuapp.com/users/me";

export default {
  name: "MinhaConta",
  data: () => ({
    user: {},
    animals: {},
    animal: {}
  }),
  mounted() {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => {
        this.user = res.data;
        console.log(res.data);

        this.animals = res.data.animals;
        console.log(this.animals);
        console.log(res.data.animals.pictures[0].pictures[0].url);
      });
  }
};
</script>
