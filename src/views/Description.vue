<template>
  <div>{{ animals.name }}</div>
</template>

<script>
import axios from "axios";

const API_URL = "https://adotpets.herokuapp.com/animals/:id";

export default {
  name: "Description",
  data: () => ({
    user: {},
    animals: {},
    picture: ""
  }),
  mounted() {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          accept: "application/json"
        }
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>
