<script lang="ts" setup>
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
  <el-card
    class="box-card focus-visible:border-sky-600 focus:border-purple-600"
    body-style="padding: 0"
    tabindex="0"
  >
    <el-image class="w-full h-full" :src="poster" fit="cover" />
    <div class="flex flex-col gap-y-3 py-2 px-3">
      <el-tag class="self-start">{{ label }}</el-tag>
      <h4 class="text-lg">{{ title }}</h4>
      <p class="italic">{{ director }}</p>
    </div>
  </el-card>
</template>
