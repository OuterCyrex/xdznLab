import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScrollYStore = defineStore('scrollY', () => {
  const scrollY = ref(0)
  function setScrollY(value: number) {
    scrollY.value = value
    console.log(scrollY.value)
  }

  return { scrollY, setScrollY }
})
