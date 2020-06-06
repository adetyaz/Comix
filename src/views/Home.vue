<template>
  <div>
    <!--HomeList /-->
    <div v-for="(character, index) in characters" :key="index">
      <div class="container mx-auto flex items-center flex-wrap ptx-4 pb-12">
        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <img class="hover:grow hover:shadow-lg" :src="character.image" />
          <div class="pt-3 flex items-center justify-between">
            <p class="data">{{ character.name }}</p>
            <p class="data">{{ character.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeList from "@/components/HomeList.vue";
import { mapState } from "vuex";
export default {
  // components: {
  //   HomeList
  // },
  created() {
    this.$store.dispatch("fetchCharacters");
  },
  computed: {
    ...mapState(["characters"]),
    // ...mapGetters(["characters"]),
  },
};
</script>

<style lang="scss" scoped></style>
