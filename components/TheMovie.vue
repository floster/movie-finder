<script lang="ts" setup>
import type { Movie } from "~/types/omdb";

defineProps<{ data: Movie }>();
</script>

<template>
  <section class="flex flex-col md:flex-row">
    <el-image
      class="basis-3/12 rounded shadow-xl"
      :src="data?.poster"
      fit="cover"
    />
    <div class="flex flex-col grow gap-y-3 py-2 px-3">
      <el-tag class="self-start" effect="plain">{{ data?.year }}</el-tag>
      <h2 class="text-xl">{{ data?.title }}</h2>
      <p class="italic">{{ data?.director }}</p>
    </div>
  </section>
</template>

<style scoped></style>
