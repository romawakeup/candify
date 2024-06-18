<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})

</script>

<template>
  <div
    class="relative bg-white border border-slate-300 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-2xl text-xl"
  >
    <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like2.svg' : '/like1.svg'"
      alt="Добавить"
      class="absolute top-4 left-3"
      @click="onClickFavorite"
    />

    <img :src="imageUrl" class="rounded-3xl" />
    <p class="mt-3">{{ title }}</p>

    <div class="flex justify-between mt-5 text-xl">
      <div class="flex flex-col">
        <span
          >Цена: <b>{{ price }} ₽</b></span
        >
      </div>
      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Добавить"
        class=""
      />
    </div>
  </div>
</template>
