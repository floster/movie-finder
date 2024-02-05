<script lang="ts" setup>
import { ArrowLeft } from "@element-plus/icons-vue";

const movieID = useRoute().params.id;

const { data } = await useFetch(`/api/movie/${movieID}`);

const noMovieData = computed(() => !data.value?.response);
</script>

<template>
  <NuxtErrorBoundary>
    <TheError
      v-if="noMovieData"
      message="No movie found"
      backTo="/"
      backToLabel="back to results/home"
    />
    <TheMovie v-else :data="data!" />

    <template #error="{ error }">
      <TheError
        message="An error occurred while fetching the movie"
        backTo="/"
        backToLabel="back to results/home"
      />
    </template>
  </NuxtErrorBoundary>
</template>
