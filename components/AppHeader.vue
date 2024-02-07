<script setup lang="ts">
import { HomeFilled, CirclePlus } from "@element-plus/icons-vue";
const router = useRouter();
</script>

<template>
  <div class="flex items-center justify-between py-3">
    <h1 class="flex items-center gap-x-1 text-indigo-100 text-xl">
      <el-image
        src="/apple-touch-icon.png"
        alt="MovieFinder logo"
        class="w-10 h-10"
      />
      <span class="max-sm:hidden">MovieFinder</span>
    </h1>
    <div class="flex gap-x-3">
      <NuxtLink to="/add_movie" title="add your movie">
        <el-button type="primary" size="large" plain :icon="CirclePlus">
        </el-button
      ></NuxtLink>
      <NuxtLink to="/" title="go home">
        <el-button type="success" size="large" :icon="HomeFilled"></el-button>
      </NuxtLink>
    </div>
  </div>
</template>
