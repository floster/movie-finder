<script lang="ts" setup>
const modules = [
  SwiperPagination,
  SwiperNavigation,
  SwiperMousewheel,
  SwiperKeyboard,
];
const swiper = ref(null);
const onSwiper = (Swiper: any) => {
  swiper.value = Swiper;
};
</script>

<template>
  <div class="">
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
      mousewheel
      keyboard
      :loop="true"
      @swiper="onSwiper"
    >
      <slot />
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
