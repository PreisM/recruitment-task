<template>
  <img
    :src="path"
    class="rounded-full"
    :class="size === 'sm' ? 'h-12 w-12' : ''"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomAvatar',
  props: {
    path: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: (v: string) => ['sm', 'xl'].includes(v),
      default: 'sm'
    }
  }
})
</script>
