<script setup>
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number
})
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-3">
    <img :src="imageUrl" :alt="title" class="rounded-xl w-24 h-20" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} ₽</b>

        <img
          @click="emit('onClickRemove')"
          src="/delete.svg"
          alt="Удалить"
          class="opacity-50 hover:opacity-100 cursor-pointer trasition"
        />
      </div>
    </div>
  </div>
</template>
