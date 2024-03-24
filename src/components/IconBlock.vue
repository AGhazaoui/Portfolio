<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <div
    :class="`${size ? `h-[${size}px] w-[${size}px]` : 'h-12 w-12 sm:h-24 sm:w-24'} rounded-lg bg-snow flex text-black justify-center items-center shadow-xl ring ring-snow transition delay-70 ease-in-out hover:ring-primaryLight hover:scale-110 ring-opacity-[50%] ring-[4px] cursor-pointer p-3`"
  >
    <slot />
  </div>
</template>
