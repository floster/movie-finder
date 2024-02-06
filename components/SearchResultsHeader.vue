<script lang="ts" setup>
// get the search store
const search = useSearchStore();

const resultsQty = computed(() =>
  search.resultsQty > 0 ? search.resultsQty : "No"
);
</script>

<template>
  <h3 v-if="search.query">
    {{ resultsQty }} results found for <mark>{{ search.query }}</mark>
  </h3>
</template>

<style scoped></style>
