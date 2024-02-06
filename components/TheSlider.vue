<script lang="ts" setup>
import type Swiper from "swiper";
const modules = [
  SwiperPagination,
  SwiperNavigation,
  SwiperMousewheel,
  SwiperFreeMode,
];
const swiper = ref(null) as Ref<Swiper | null>;
const onSwiper = (Swiper: Swiper) => {
  swiper.value = Swiper;
};
</script>

<template>
  <div class="relative">
    <div class="swiper-pagination"></div>
    <Swiper
      :modules="modules"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }"
      :space-between="8"
      :allow-touch-move="true"
      :pagination="{
        enabled: true,
        clickable: true,
        type: 'progressbar',
        el: '.swiper-pagination',
      }"
      mousewheel
      navigation
      @swiper="onSwiper"
    >
      <slot />
    </Swiper>
  </div>
</template>

<style>
.swiper {
  @apply py-3;
}
.swiper-pagination {
  /* @apply flex gap-x-1 -top-10 mx-auto left-0 right-0; */
}

.swiper-button-next,
.swiper-button-prev {
  --swiper-navigation-size: 36px;

  @apply p-2 w-12 h-12 bg-black/20 rounded-md text-indigo-500;
}

.swiper-pagination-bullet-active {
  @apply bg-indigo-600;
}
</style>
