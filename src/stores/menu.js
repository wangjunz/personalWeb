import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const clickMenu = ref(false)
  const menuIsShow=ref(true)
  return { clickMenu,menuIsShow }
})
