<script lang="ts" setup>
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";

// get the search store
const search = useSearchStore();
</script>

<template>
  <div v-if="search.resultsQty > 0" class="flex items-center gap-x-3">
    <el-button
      type="default"
      :icon="ArrowLeftBold"
      :disabled="search.page === 1"
      @click="search.getPrevSearchPage"
    ></el-button>
    <span class="text-slate-400 text-sm"
      ><strong>{{ search.page }}</strong> of {{ search.pagesQty }}</span
    >
    <el-button
      type="default"
      :icon="ArrowRightBold"
      :disabled="search.page >= search.pagesQty"
      @click="search.getNextSearchPage"
    ></el-button>
  </div>
</template>
