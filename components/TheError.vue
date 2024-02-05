<script lang="ts" setup>
import { ArrowLeft } from "@element-plus/icons-vue";

const props = defineProps<{
  message: string;
  backTo: string;
  backToLabel: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center mt-4 gap-y-4">
    <el-text size="large">{{ message }}</el-text>
    <!-- TODO: handle where to back -->
    <el-button type="primary" :icon="ArrowLeft">
      <NuxtLink :to="backTo" type="primary" :icon="ArrowLeft">{{
        backToLabel
      }}</NuxtLink>
    </el-button>
  </div>
</template>
