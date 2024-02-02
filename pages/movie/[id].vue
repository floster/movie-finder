<script lang="ts" setup>
import { ArrowLeft } from "@element-plus/icons-vue";

type Props = {
  poster?: string;
  title?: string;
  director?: string;
  label?: string;
};

withDefaults(defineProps<Props>(), {
  poster: "https://image.tmdb.org/t/p/w342/dhVYlfMNc2bfXPB83LLL00I4l9n.jpg",
  title: "Shaun the Sheep Movie",
  director: "Mark Burton",
  label: "2015",
});
</script>

<template>
  <section class="flex flex-col md:flex-row">
    <el-image class="basis-3/12" :src="poster" fit="cover" />
    <div class="flex flex-col grow gap-y-3 py-2 px-3">
      <el-tag class="self-start" effect="plain">{{ label }}</el-tag>
      <h2 class="text-xl">{{ title }}</h2>
      <p class="italic">{{ director }}</p>
    </div>
    <el-button type="primary" :icon="ArrowLeft" class="mt-8 md:mt-0"
      >back to results</el-button
    >
  </section>
</template>

<style scoped></style>
