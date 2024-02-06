<script lang="ts" setup>
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
      backToLabel="back to home"
    />
    <TheMovie v-else :data="data!" />

    <template #error="{ error }">
      <TheError
        message="An error occurred while fetching the movie"
        backTo="/"
        backToLabel="back to home"
      />
    </template>
  </NuxtErrorBoundary>
</template>
