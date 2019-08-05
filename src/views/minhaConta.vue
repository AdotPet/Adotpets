<template>
  <div class="container mx-auto">
    <div class="flex justify-end">
      <button class="py-2 px-8 text-white bg-gray-600 shadow rounded-sm my-8">
        Verify Account
      </button>
      <button
        class="py-2 px-8 text-white bg-adotpets shadow rounded-sm my-8 ml-4"
      >
        Add Animal
      </button>
    </div>
    <div class="flex mb-4">
      <div class="w-1/5">
        <div class="container p-2">
          <ul class="flex flex-col">
            <a
              class="mx-auto bg-gray-100 min-w-full shadow py-3 my-2 text-black hover:bg-adotpets hover:text-white hover:shadow rounded"
              href="#"
            >
              <li>My animals</li></a
            >
            <a
              class="mx-auto bg-gray-100 min-w-full shadow py-3 my-2 text-black hover:bg-adotpets hover:text-white hover:shadow rounded"
              href="#"
              ><li>Change password</li></a
            >
            <router-link
              to="MinhaConta/mySettings"
              class="mx-auto bg-gray-100 min-w-full shadow py-3 my-2 text-black hover:bg-adotpets hover:text-white hover:shadow rounded"
              ><li>Settings</li></router-link
            >
            <a
              class="mx-auto bg-gray-100 min-w-full shadow py-3 my-2 text-black hover:bg-adotpets hover:text-white hover:shadow rounded"
              href="#"
              @click.prevent="loggout"
              ><li>Loggout</li></a
            >
          </ul>
        </div>
      </div>
      <div class="w-1/3 w-full ">
        <h1>Router-view</h1>
        <settings />
      </div>
    </div>
  </div>
</template>

<script>
import settings from "@/components/account/mySettings.vue";

export default {
  name: "MinhaConta",
  components: {
    settings
  },
  methods: {
    loggout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    }
  }
};
</script>
