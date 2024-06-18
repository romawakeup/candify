<script setup>
import { inject } from 'vue';

const { closeDrawer } = inject('cart');

</script>


<template>
    <div class="flex items-center gap-2 mb-8">
      <svg
      @click="closeDrawer"
      class="opacity-50 cursor-pointer rotate-180 hover:opacity-100 "
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5625 1L18 7L10.5625 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2 class="text-3xl font-bold">Корзина</h2>
    </div>
</template>