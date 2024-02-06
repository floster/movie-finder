<script setup lang="ts">
import { HomeFilled } from "@element-plus/icons-vue";
const router = useRouter();

const homeDisabled = computed(() => router.currentRoute.value.path === "/");
</script>

<template>
  <div class="flex items-center justify-between py-3">
    <h1 class="text-indigo-100 text-xl">MovieFinder</h1>
    <div class="flex gap-x-3">
      <el-button type="primary" size="large" plain
        ><NuxtLink to="/add_movie">add a movie</NuxtLink></el-button
      >
      <NuxtLink to="/">
        <el-button
          type="success"
          size="large"
          :icon="HomeFilled"
          :disabled="homeDisabled"
        ></el-button>
      </NuxtLink>
    </div>
  </div>
</template>
