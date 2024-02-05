<script lang="ts" setup>
const modules = [SwiperPagination, SwiperNavigation];
const swiper = ref(null);
const onSwiper = (Swiper: any) => {
  swiper.value = Swiper;
};
</script>

<template>
  <div class="">
    <!-- <div class="flex items-center justify-end mb-3">
      <el-button @click="swiper.slidePrev(300)"
        ><Icon name="ph:caret-left-bold"
      /></el-button>
      <el-button @click="swiper.slideNext(300)"
        ><Icon name="ph:caret-right-bold"
      /></el-button>
    </div> -->
    <Swiper
      :modules="modules"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 8 },
        768: { slidesPerView: 3, spaceBetween: 8 },
        1024: { slidesPerView: 4, spaceBetween: 8 },
        1280: { slidesPerView: 5, spaceBetween: 8 },
      }"
      :space-between="8"
      :allow-touch-move="true"
      :pagination="{ enabled: true, clickable: true, type: 'bullets' }"
      navigation
      :loop="true"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <TheTile />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination {
  @apply relative mt-4;
}

.swiper-button-next,
.swiper-button-prev {
  @apply p-1 w-12 h-12 bg-slate-950/40 rounded-md text-indigo-400;
}

.swiper-pagination-bullet-active {
  @apply bg-indigo-600;
}
</style>
