<template>
  <div class="dolly-wrapper" ref="scrollContainer">
    <div class="background" ref="backgroundEl"></div>
    <div class="dolly-content">
      <img ref="logoImg" alt="logo-image" src="@/assets/white.png" class="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  minScale?: number
  maxScale?: number
  maxScroll?: number
}>(),{
  minScale: 0.6,
  maxScale: 1.0,
  maxScroll: 400,
})

const logoImg = ref<HTMLElement | null>(null)
const backgroundEl = ref<HTMLElement | null>(null)

const {minScale,maxScale, maxScroll} = props

function onScroll() {
  const scrollY = window.scrollY
  let logoScale = maxScale - (scrollY / maxScroll) * (maxScale - minScale)
  logoScale = Math.min(maxScale, Math.max(minScale, logoScale))

  let bgScale = 1 + (scrollY / maxScroll) * 0.5
  bgScale = Math.min(1.5, Math.max(1, bgScale))

  if (logoImg.value) {
    logoImg.value.style.transform = `scale(${logoScale})`
  }

  if (backgroundEl.value) {
    backgroundEl.value.style.transform = `scale(${bgScale})`
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped lang="scss">
.dolly-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: transform 0.2s ease-out;
  will-change: transform;
}

.dolly-content {
  height: 450px;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  z-index: 1;
}

.logo {
  height: 600px;
  transition: transform 0.2s ease-out;
  will-change: transform;
}
</style>

