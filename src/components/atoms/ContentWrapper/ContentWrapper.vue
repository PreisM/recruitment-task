<template>
  <div class="px-4 py-6 bg-white shadow rounded-md">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomContentWrapper'
})
</script>
