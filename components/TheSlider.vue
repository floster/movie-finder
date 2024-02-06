<script lang="ts" setup>
import type Swiper from "swiper";
const modules = [SwiperPagination, SwiperNavigation, SwiperKeyboard];
const swiper = ref(null) as Ref<Swiper | null>;
const onSwiper = (Swiper: Swiper) => {
  swiper.value = Swiper;
};
</script>

<template>
  <div class="">
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
      :pagination="{ enabled: true, clickable: true, type: 'bullets' }"
      navigation
      keyboard
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
  --swiper-navigation-size: 36px;

  @apply p-2 w-12 h-12 bg-black/20 rounded-md text-indigo-500;
}

.swiper-pagination-bullet-active {
  @apply bg-indigo-600;
}
</style>
