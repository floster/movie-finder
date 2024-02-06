<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";

const router = useRouter();
const search = useSearchStore();

const searchTerm = ref(search.query);

const clearTermHandler = () => {
  searchTerm.value = "";
  search.resetSearch();

  router.push({ path: "/search" });
};

// just make redirect to the search page
// with the search term as query param
const onSubmit = () => {
  if (!searchTerm.value) return;
  router.push({ path: "/search", query: { q: searchTerm.value } });
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <form class="flex items-center" @submit.prevent="onSubmit">
      <el-input
        v-model="searchTerm"
        placeholder="search by movie title"
        size="large"
        clearable
        autofocus
        @clear="clearTermHandler"
      >
      </el-input>
      <el-button
        :icon="Search"
        type="primary"
        size="large"
        native-type="submit"
      ></el-button>
    </form>
  </div>
</template>
