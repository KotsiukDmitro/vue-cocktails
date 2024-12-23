
import { defineStore } from 'pinia'
import axios from 'axios'
import {INGREDIENTS_URL, COCKTAILS_BY_INGR_URL} from '../constants'


export const useMainStore = defineStore('main', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: []
  }),

  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)      
      this.ingredients = data?.data?.drinks
    },

    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`)           
      this.cocktails = data?.data?.drinks       
    },

    setIngredient(value) {
      this.ingredient = value
    }
  }
})
