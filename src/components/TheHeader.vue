<script setup>
defineProps({
  totalPrice: Number
})
const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/"
      ><div class="flex items-end gap-2">
        <img src="/logo.svg" alt="Candify" />
        <div>
          <h1 class="text-4xl font-bold">Candify</h1>
        </div>
      </div></RouterLink
    >

    <ul class="flex items-center gap-9 text-xl">
      <li @click="() => emit('openDrawer')" class="flex items-center cursor-pointer gap-2">
        <img src="/cart.svg" alt="Корзина" />
        <p>{{ totalPrice }} ₽</p>
      </li>
      <RouterLink to="/shop"
        ><li class="flex items-center cursor-pointer gap-2">
          <img src="/shop.svg" alt="Магазин" />
          <span>Магазин</span>
        </li></RouterLink
      >

      <RouterLink to="/favorites"
        ><li class="flex items-center cursor-pointer gap-2">
          <img src="/heart.svg" alt="Избранное" />
          <span>Избранное</span>
        </li></RouterLink
      >

      <li class="flex items-center cursor-pointer gap-2">
        <img src="/profile.svg" alt="Профиль" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
