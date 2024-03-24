<script setup lang="ts">
import GlitchedWriter from 'vue-glitched-writer'

defineProps<{ text: string[] }>()
</script>

<template>
  <GlitchedWriter :text="text" preset="Hello world" :queue="{ loop: true, interval: 1000 }" />
</template>
