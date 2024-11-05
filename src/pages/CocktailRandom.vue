<script setup>
import axios from 'axios'
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { COCKTAIL_RANDOM, INGREDIENT_IMG } from '@/constants'
import AppLayout from '@/components/AppLayout.vue'

const cocktail = ref(null)

const ingredients = computed(() => {
  const ingredients = []

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break
    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }
  return ingredients
})

const getCocktail = async () => {
  const data = await axios.get(COCKTAIL_RANDOM)
  cocktail.value = data?.data?.drinks[0]
}

getCocktail()
</script>

<template>
  <div v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              class="swiper"
            >
              <swiper-slide v-for="(item, key) in ingredients" :key="key">
                <img :src="`${INGREDIENT_IMG}${item}-Small.png`" />
                   <div class="name">{{ item }}</div>
              </swiper-slide>

            </swiper>
          </div>
          <div class="instruction">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.slider
  padding: 50px 0

.swiper 
  width: 600px  

.name
  padding-top: 20px 

</style>