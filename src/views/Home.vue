<template>
  <div>
    <Carrousel/>
    <Destaques/>
    <Dogs/>
    <Cats/>
  </div>
</template>

<script>
import Carrousel from "../components/Home/Carrousel.vue";
import Destaques from "../components/Home/Destaques.vue";
import Dogs from "../components/Home/Dogs.vue";
import Cats from "../components/Home/Cats.vue";

export default {
  components: {
    Carrousel,
    Destaques,
    Dogs,
    Cats
  }
};
</script>

<style lang="scss" scoped>
#banner {
  background-image: url("");
}
</style>
