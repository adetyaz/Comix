<template>
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <img class="hover:grow hover:shadow-lg" :src="image" />
      <div class="pt-3 flex items-center justify-between">
        <p class="data">{{ character }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
    image: String
  }
};
</script>

<style scoped>
.data {
  color: black;
}
</style>