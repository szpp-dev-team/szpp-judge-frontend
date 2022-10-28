<template>
  <el-config-provider>
    <el-container class="wrapper">
      <!-- header -->
      <el-header class="el-header">
        <slot name="header">
          <base-header />
        </slot>
      </el-header>

      <el-container>
        <!-- main -->
        <el-main class="el-main">
          <slot>This is a fallback content</slot>
        </el-main>

        <!-- footer-->
        <!-- <el-footer> -->
        <!-- <slot name="footer"> [ == footer component here == ] </slot> -->
        <!-- </el-footer> -->
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
.el-header {
  padding: 0;
}
</style>
