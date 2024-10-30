<script setup>

const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="container">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>
        <div class="main">           
            <el-button class="btn">Get random cocktail</el-button>
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
        
</style>