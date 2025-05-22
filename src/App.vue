<template>
  <div class="app-container h-full">
    <el-container class="layout-container">
      <el-header class="layout-header">
        <HeaderBar />
      </el-header>
      <el-main class="layout-main" ref="mainContainer">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
</script>

<style scoped lang="scss">
.h-full {
  height: 100%;
}
.layout-main {
  padding: 0;
  margin: 0;
}
</style>
