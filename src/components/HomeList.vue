<template>
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div
      class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
      v-for="(character, index) in characters"
      :key="index"
    >
      <a href="#">
        <img class="hover:grow hover:shadow-lg" :src="character.imageUrl" />
        <div class="pt-3 flex items-center justify-between">
          <p class="">{{ character.name }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/apiService.js";
export default {
  data() {
    return {
      characters: [],
    };
  },
  created() {
    apiService
      .getCharacters()
      .then((res) => {
        this.characters = res.data;
        console.log(this.characters);
      })
      .catch((error) => {
        console.log(`The service cannot be loaded because ${error}`);
      });
  },
};
</script>
