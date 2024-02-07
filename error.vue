<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="grid place-items-center gap-3 h-screen">
    <div class="flex flex-col items-center gap-3">
      <h2 class="text-8xl text-slate-300">{{ error?.statusCode }}</h2>
      <p>{{ error?.statusMessage }}</p>
      <el-button type="primary" class="self-center mt-10" @click="handleError"
        >back to home</el-button
      >
      <pre>{{ error?.stack }}</pre>
    </div>
  </div>
</template>
