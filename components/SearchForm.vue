<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";

const router = useRouter();
const search = useSearchStore();

const searchTerm = ref(search.query);

// just make redirect to the search page
// with the search term as query param
const onSubmit = () => {
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
      >
      </el-input>
      <el-button
        :icon="Search"
        :disabled="searchTerm === ''"
        type="primary"
        size="large"
        native-type="submit"
      ></el-button>
    </form>
  </div>
</template>
