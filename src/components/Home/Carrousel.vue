<template>
  <div class="flex mb-4 justify-center">
    <div
      id="banner"
      class="flex justify-center items-center w-full bg-indigo-dark bg-no-repeat h-32 font-bold bg-cover"
    >
      <ul class="list-reset text-white">
        <li>
          <h1>Adotpets</h1>
        </li>
        <li>
          <h3>Plataforma de adoção de animais sem fins lucrativos</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrousel"
};
</script>

<style scoped>
#banner {
  background-image: url("http://www.harfordshelter.org/wp-content/uploads/2015/02/Adopt-a-Dog.jpg");
}
</style>

