<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const emit = defineEmits(['createOrder'])

defineProps({
  totalPrice: Number,
  buttonDisabled: Boolean
})
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-10">
    <DrawerHead />

    <div v-if="!totalPrice" class="flex h-full items-center">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте товары, чтобы сделать заказ."
        image-url="/empty-box.svg"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col mb-6 my-6">
        <div class="flex gap-2">
          <span>Итого</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} ₽</b>
        </div>
        <button
          :disabled="buttonDisabled"
          @click="() => emit('createOrder')"
          class="transition bg-green-500 w-full rounded-xl py-3 disabled:bg-slate-300 text-white hover:bg-green-600 active:bg-green-700 cursor-pointer mt-6"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
