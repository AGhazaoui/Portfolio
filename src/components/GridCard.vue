<script setup lang="ts">
defineProps<{ cols?: number }>()
</script>

<template>
  <div
    class="rounded-lg shadow-xl bg-gradient-to-b from-neutralLight to-snow ring-snow ring-8 ring-opacity-75 gap-4 p-6 flex flex-wrap justify-center w-auto"
  >
    <slot />
  </div>
</template>
