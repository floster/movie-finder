<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";

// https://www.omdbapi.com/?apikey=b2b568c7&t=tenet&plot=short

const searchTerm = ref("");
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <form class="flex items-center">
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
