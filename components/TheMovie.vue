<script lang="ts" setup>
import type { Movie } from "~/types/omdb";

const router = useRouter();
const hasBackHistory = computed(() => !!router.options.history.state.back);

defineProps<{ data: Movie }>();
</script>

<template>
  <section class="flex flex-col md:flex-row">
    <el-image
      class="basis-4/12 rounded shadow-xl aspect-[2/3]"
      :src="data?.poster"
      fit="cover"
    />
    <div class="flex flex-col grow gap-y-3 py-2 px-3 mt-4 md:mt-0">
      <el-tag class="self-start" effect="plain">{{ data?.year }}</el-tag>
      <h2 class="text-xl">{{ data?.title }}</h2>
      <p class="italic">{{ data?.director }}</p>
    </div>
    <el-button
      v-if="hasBackHistory"
      @click="router.back()"
      class="max-sm:mt-4"
      type="primary"
      size="large"
      plain
    >
      Back to results
    </el-button>
  </section>
</template>
