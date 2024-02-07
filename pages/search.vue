<script setup lang="ts">
const route = useRoute();

// get the search store
const search = useSearchStore();

const query = ref<string>();
const page = computed(() => search.page);

watchEffect(() => {
  query.value = route.query.q?.toString() || "";
});

const { data, error, pending } = await useFetch<Search>("/api/search", {
  key: `${search.page}_${query.value}`,
  query: { q: query, page },
  watch: [query, page],
});

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}

// set 'query' and 'resultsQty' to the search store
watchEffect(() => {
  search.setSearchQuery(query.value);
  search.setResultsQty(data.value?.qty);
});

// set 'page' to 1 is the query changes
watch(query, () => {
  search.setCurrentPage();
});

// dynamically update the title
const title = computed(() => {
  const _query = query.value ? `results for '${query.value}' ` : "";
  return `Search ${_query}| MovieFinder`;
});

useHead({
  title,
});
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <SearchForm />
    <NuxtErrorBoundary>
      <TheSpinner v-if="pending && !error" />
      <div v-else class="flex flex-col gap-y-3">
        <el-alert
          v-if="!data?.results && query !== ''"
          :title="`no movies found by '${query}'. try another search.`"
          type="info"
          show-icon
          :closable="false"
        />
        <template v-else>
          <SearchResultsHeader />
          <TheSlider>
            <SwiperSlide v-for="result in data?.results" :key="result.imdbID">
              <TheTile :data="result" />
            </SwiperSlide>
          </TheSlider>
        </template>
      </div>

      <template #error>
        {{ error }}
      </template>
    </NuxtErrorBoundary>
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
