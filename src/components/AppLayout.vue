<script setup>
import { useRoute, useRouter } from 'vue-router';
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue';
import { ROUTES_PATHS } from '@/constants'


const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFn: {
    type: Function,
  },
  isButtonBackVisible: {
    type: Boolean,
    default: true,
  },
})

const route = useRoute()
const router = useRouter()

const routeName = computed(()=> route.name)

const goForCocktailRandom = ()=> {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM)
  if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
   router.go()
  }
}

const goBack = () => {
  props.backFn ? props.backFn() :  router.go(-1)
}

</script>

<template>
  <div class="container">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isButtonBackVisible"
          type="primary"
          :icon="Back"
          circle
          class="btn-back"
          @click="goBack"
        />
        <el-button @click="goForCocktailRandom" class="btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.container
    display: flex
    min-height: 100vh
    background-color: $background

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 40px

.btn
    position: absolute
    top: 40px
    right: 40px
    background-color: $accent
    border: none
    outline: none
    color: $text
    font-family: 'Raleway', 'Arial', sans-serif
    font-size: 16px

    &:hover,
    &:active
        background-color: darken($accent, 15%)

.btns
    display: flex
    justify-content: space-between
    align-items: center

.btn-back
    background-color: transparent
    border-color: #fff

    &:hover
        border-color: $accent
</style>