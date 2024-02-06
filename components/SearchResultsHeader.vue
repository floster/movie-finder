<script lang="ts" setup>
// get the search store
const search = useSearchStore();

const resultsQty = computed(() =>
  search.resultsQty > 0 ? search.resultsQty : "No"
);
</script>

<template>
  <header
    v-if="search.query"
    class="flex gap-4 flex-col md:flex-row items-end md:items-center md:justify-between"
  >
    <h3 class="text-slate-400 text-sm">
      <strong>{{ resultsQty }}</strong> results found for
      <mark>{{ search.query }}</mark>
    </h3>
    <SearchResultsControls />
  </header>
</template>
