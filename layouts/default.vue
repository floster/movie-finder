<script lang="ts" setup></script>

<template>
  <div class="common-layout font-sans text-indigo-950">
    <el-container class="min-h-screen">
      <el-header height="max-content" class="bg-indigo-900"
        ><AppHeader class="max-w-5xl mx-auto"
      /></el-header>
      <el-main class="bg-indigo-50">
        <div class="max-w-5xl mx-auto md:py-6">
          <slot />
        </div>
      </el-main>
      <el-footer height="max-content" class="bg-indigo-200"
        ><AppFooter class="max-w-5xl mx-auto"
      /></el-footer>
    </el-container>
  </div>
</template>
