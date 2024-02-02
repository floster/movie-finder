<script lang="ts" setup></script>

<template>
  <div class="common-layout font-sans text-indigo-950">
    <el-container class="min-h-screen">
      <el-header height="max-content" class="bg-indigo-900"
        ><AppHeader
      /></el-header>
      <el-main class="bg-indigo-50">
        <slot />
      </el-main>
      <el-footer height="max-content" class="bg-indigo-200"
        ><AppFooter
      /></el-footer>
    </el-container>
  </div>
</template>
