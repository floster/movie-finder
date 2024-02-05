<script setup lang="ts">
const query = useRoute().query.q;
const { data } = await useFetch(`/api/search?q=${query}`);
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <SearchForm />
    <h3>{{ data?.qty }} results for <mark>sheep</mark></h3>
    <TheSlider>
      <SwiperSlide v-for="result in data?.results" :key="result.imdbID">
        <TheTile :data="result" />
      </SwiperSlide>
    </TheSlider>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  height: initial;
}
</style>
