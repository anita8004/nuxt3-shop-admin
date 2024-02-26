<script lang="ts" setup>
  const isCollapse = ref(false)
</script>

<template>
<div class="un-login-layout flex h-screen text-white bg-slate-900">
  <el-menu
    class="el-menu-vertical"
    default-active="1"
    :collapse="isCollapse"
  >
    <el-menu-item index="0">
      <template #title>
        <el-icon><Icon name="fluent:building-shop-20-regular" /></el-icon>
        <span>Shop Admin</span>
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <template #title>
        <el-icon><Icon name="material-symbols:dashboard" /></el-icon>
        <span>Dashboard</span>
      </template>
    </el-menu-item>
  </el-menu>
  <main>
    <slot />
  </main>
</div>
</template>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

main {
  width: calc(100% - 200px)
}
</style>
