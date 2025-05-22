<template>
  <div class="home-container" ref="homeContainer">
    <SwiperImage/>
    <el-row>
      <el-col class="d-flex-center">
          <SidebarPart :items="items" :default-active="1" />
          <IntroPart />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import SwiperImage from "@/components/Home/SwiperImage.vue";
import IntroPart from '@/components/Home/IntroPart.vue'
import SidebarPart from '@/components/Home/SidebarPart.vue'
import { SidebarItem } from '@/types/sidebar.ts'

const items = [
  new SidebarItem(1, '团队介绍').clickToAnchor("#team-introduction"),
  new SidebarItem(2, '奖项展示').clickToAnchor("#team-price"),
]
</script>

<style scoped lang="scss">
.d-flex-center {
  display: flex;
  justify-content: center;
}
.intro-part {
  width: 100%;
}
</style>
