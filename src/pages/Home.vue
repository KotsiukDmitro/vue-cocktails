<script setup>
import AppLayout from '@/components/AppLayout.vue'
import CocktailThumb from '@/components/CocktailThumb.vue'
import { useMainStore } from '@/stores/main'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
mainStore.getIngredients()
const { ingredients, cocktails, ingredient } = storeToRefs(mainStore)

const getCocktails = ()=> {
  mainStore.getCocktails(mainStore.ingredient)
}

const removeIngredient = ()=> {
  mainStore.setIngredient(null)
}

</script>

<template>
  <AppLayout imgUrl="/src/assets/image/bg-main.jpg" :backFn="removeIngredient" :isButtonBackVisible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrap">
          <el-select
            v-model="mainStore.ingredient"
            filterable
            allow-create
            placeholder="choose main ingredient"
            size="large"
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="../assets/image/cocktails.png" alt="cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">Cocktails With {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.select-wrap
  padding-top: 50px

.select
  width: 250px

.text
  max-width: 520px
  text-align: center
  margin-top: 50px
  margin-bottom: 60px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.cocktails
  margin-top: 60px
  max-height: 500px
  overflow-y: auto
  display: grid
  grid-template-columns: repeat(3, minmax(0, 1fr))
  gap: 30px
</style>