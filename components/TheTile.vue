<script lang="ts" setup>
import type { SearchResult } from "~/types/omdb";

defineProps<{ data: SearchResult }>();
</script>

<template>
  <NuxtLink
    :to="`movie/${data.imdbID}`"
    class="flex w-full focus-visible:border-purple-600 shadow-lg hover:shadow-purple-300"
  >
    <el-card class="box-card w-full" body-style="padding: 0" tabindex="0">
      <el-image
        class="w-full h-full aspect-[2/3]"
        :src="data.poster"
        fit="cover"
      />
      <div class="flex flex-col gap-y-3 py-2 px-3">
        <el-tag class="self-start">{{ data.year }}</el-tag>
        <h4 class="text-base">{{ data.title }}</h4>
      </div>
    </el-card></NuxtLink
  >
</template>
