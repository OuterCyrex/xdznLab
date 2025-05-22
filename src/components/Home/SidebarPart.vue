<template>
  <div class="sidebar-container">
    <div class="sidebar-title">{{title}}</div>
    <div v-for="item of props.items" :key="item.index">
        <div
          @click="() =>{item.handleClick(); active = item.index}"
          :class="active === item.index ? 'sidebar-button-active sidebar-button' : 'sidebar-button'"
        >
          {{ item.title }}
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { SidebarItemData } from '@/types/sidebar.ts'
import { ref } from 'vue'

const props = defineProps<{
  items: Array<SidebarItemData>
  defaultActive?: number
  title?: string
}>()

const active = ref<number>(props.defaultActive ? props.defaultActive : 0)
</script>

<style scoped lang="scss">
.sidebar-button {
  cursor: pointer;
  border-left: 1.5px solid #b8b8b8;
  justify-content: start;
  width: 220px;
  font-size: 16px;
  padding: 18px;
}
.sidebar-button-active {
  cursor: pointer;
  border-left: 3px solid #b1fbff;
  color: #31dde8;

  background-color: rgba(233, 253, 255, 0.4);
  font-weight: bold;
}

.sidebar-title {
  font-size: 20px;
  margin: 20px 8px;
  font-weight: bold;
  color: #979797;
}
</style>
