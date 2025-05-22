<template>
  <div class="header-container">
    <el-menu
        class="header-menu"
        mode="horizontal"
        default-active="1"
        :ellipsis="false"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">题目</el-menu-item>
      <el-menu-item index="3">比赛</el-menu-item>
      <el-menu-item index="4">讨论</el-menu-item>
      <el-space />
      <el-space />
      <div class="search-bar j-position">
        <el-input
            style="width: 240px"
            placeholder="搜索..."
            :suffix-icon="Search"
        />
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.header-menu {
  justify-content: center;
}
.search-bar {
  left: 12px;
}
.j-position {
  position: relative;
  top: 14px;
}
</style>
