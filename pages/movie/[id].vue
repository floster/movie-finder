<script lang="ts" setup>
const route = useRoute();

const movieID = ref<string | null>();

watchEffect(() => {
  movieID.value = route.params.id as string | null;
});

const { data, error, pending } = await useFetch(`/api/movie/${movieID.value}`, {
  watch: [movieID],
});

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}

useHead({
  title: `${data.value?.title} | MovieFinder`,
});

const noMovieData = computed(() => !data.value);
</script>

<template>
  <TheSpinner v-if="pending && !error" />
  <TheError
    v-else-if="noMovieData"
    :message="`No movie found with ID: ${movieID}`"
    backTo="/"
    backToLabel="back to home"
  />
  <TheMovie v-else :data="data!" />
</template>
