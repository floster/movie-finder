<script lang="ts" setup></script>

<template>
  <div class="common-layout font-sans">
    <el-container class="min-h-screen">
      <el-header height="max-content" class="bg-indigo-900"
        ><AppHeader
      /></el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer height="max-content" class="bg-indigo-200"
        ><AppFooter
      /></el-footer>
    </el-container>
  </div>
</template>
