<script setup lang="ts">
const route = useRoute();

const title = computed(() => {
  const _query = route.query.q ? `results for '${route.query.q}' ` : "";
  return `Search ${_query}| MovieFinder`;
});

useHead({
  title,
});

// get the search store
const search = useSearchStore();

// watch the route query 'q' for changes
// and perform new search when it changes
watch(
  () => route.query.q,
  async (value) => {
    search.setSearch(value as string);
    await search.search();
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <SearchForm />
    <TheSpinner v-if="search.searchInProgress" />
    <div v-else class="flex flex-col gap-y-3">
      <SearchResultsHeader v-if="!search.searchInProgress" />
      <TheSlider v-if="search.hasResults">
        <SwiperSlide v-for="result in search.results" :key="result.imdbID">
          <TheTile :data="result" />
        </SwiperSlide>
      </TheSlider>
    </div>
  </div>
</template>

<style>
/* make slide stretches full height */
.swiper-slide {
  display: flex;
  height: initial;
}

.swiper-slide .el-button {
  height: 100%;
}
</style>
