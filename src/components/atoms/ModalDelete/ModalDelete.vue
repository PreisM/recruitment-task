<template>
  <transition
    enter-from-class="transition opacity-0"
    enter-active-class="transition duration-200 ease-linear"
    enter-to-class="transition opacity-100"
    leave-from-class="transition opacity-100"
    leave-active-class="transition duration-200 ease-linear"
    leave-to-class="transition opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-0"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
      <div class="bg-white max-w-3xl shadow rounded absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-500">
        <div class="py-6 px-12 text-custom-gray-700">
          <span
            class="text-xl font-semibold"
            v-text="$t('list.modalRemove', { user: 'dupa' })"
          />
          <div class="mt-8 mx-auto space-x-4 text-center">
            <button
              class="bg-red-500 rounded-full text-white px-4 py-2 font-semibold"
              @click="$emit('remove')"
              v-text="$t('list.confirm')"
            />
            <button
              class="rounded-full border text-custom-gray-700 px-4 py-2 font-semibold"
              @click="$emit('close')"
              v-text="$t('list.decline')"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomModalDelete',
  props: {
    show: Boolean
  },
  emits: ['remove', 'close']
})
</script>
