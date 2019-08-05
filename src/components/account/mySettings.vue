<template>
  <div class="md:flex bg-white rounded-lg p-6 bg-pink-200 mx-4">
    <img
      class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      :src="baseurl + user.picture.url"
      :alt="user.username"
    />
    <div class="text-center md:text-left">
      <h2 class="text-lg">{{ user.username }}</h2>
      <div class="text-purple-500">
        {{ user.confirmed ? "Conta verificada" : "Conta não verificada" }}
      </div>
      <div class="text-gray-600">{{ user.email }}</div>
      <div class="text-gray-600">Membro desde: {{ user.created_at }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MySettings",

  data: () => {
    return {
      user: {},
      animals: {},
      animalsPictures: {},
      baseurl: "https://adotpets.herokuapp.com"
    };
  },
  created() {
    const LOGIN_URL = "https://adotpets.herokuapp.com/users/me";
    axios
      .get(LOGIN_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(result => {
        this.user = result.data;
        this.animals = result.data.animals;
      });
  }
};
</script>

<style lang="sass" scoped></style>
