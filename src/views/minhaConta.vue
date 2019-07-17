<template>
  <div class="about text-indigo-darkest bg-indigo-lightest py-4">
    <h1 class="mb-4">Página MinhaConta</h1>
    <h2>Bem vindo do volta, {{user.name}}</h2>
    <h3>Seu atual email: {{user.email}}</h3>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://localhost:3000/api/users/current";

export default {
  name: "MinhaConta",
  data: () => ({
    user: {}
  }),
  mounted() {
    axios
      .get(API_URL, {
        headers: {
          Autorization: localStorage.token
        }
      })
      .then(res => {
        this.user = res.data;
      });
  }
};
</script>
