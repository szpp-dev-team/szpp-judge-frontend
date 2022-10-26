<template>
  <el-config-provider>
    <el-container class="wrapper">
      <!-- main -->
      <el-main class="el-main">
        <slot></slot>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
