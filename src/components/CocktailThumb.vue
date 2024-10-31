<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="container">
    <RouterLink :to="`/cocktail/${cocktail.idDrink}`">
      <div
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="pictures"
      ></div>

      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>


<style lang="sass" scoped>
@import '../assets/styles/main'

.container
  margin-bottom: 30px

.pictures
  width: 150px
  height: 150px
  margin: 0 auto
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: 100%

.name
  padding-top: 10px
  letter-spacing: 0.1em
  margin: auto
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
</style>