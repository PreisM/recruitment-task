<template>
  <div class="text-center md:text-left pb-4">
    <div class="mt-4 divide-x border rounded inline-flex">
      <button
        class="h-8 w-8 p-2 bg-white rounded-l text-custom-green-500 disabled:text-custom-gray-400 enabled:hover:bg-custom-green-500 enabled:hover:bg-opacity-10"
        :disabled="page <= 1"
        @click="previousPage"
      >
        <icon
          icon="arrow"
          viewBox="0 0 32 32"
          class="w-4 h-4 rotate-180"
        />
      </button>
      <button
        v-for="item in total_pages"
        :key="`button${item}`"
        class="w-8 h-8 hidden md:block"
        :class="item === page ? 'bg-custom-green-500 text-white' : 'bg-white text-custom-green-500 hover:bg-custom-green-500 hover:bg-opacity-10'"
        @click="usersStore.updatePage(item)"
        v-text="item"
      />
      <button
        class="h-8 w-8 rounded-r p-2 bg-white text-custom-green-500 disabled:text-custom-gray-400 enabled:hover:bg-custom-green-500 enabled:hover:bg-opacity-10"
        :disabled="page >= total_pages"
        @click="nextPage"
      >
        <icon
          icon="arrow"
          viewBox="0 0 32 32"
          class="w-4 h-4"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import Icon from '@atoms/Icon'

export default defineComponent({
  name: 'MoleculePagination',
  components: {
    Icon
  },
  setup () {
    const usersStore = useUsersStore()
    const total_pages = computed(() => usersStore.getTotalPages)
    const page = computed(() => usersStore.getPage)

    const previousPage = () => {
      if (page.value > 1) {
        usersStore.updatePage(page.value - 1)
      }
    }

    const nextPage = () => {
      if (page.value < total_pages.value) {
        usersStore.updatePage(page.value + 1)
      }
    }

    return {
      page,
      total_pages,
      previousPage,
      nextPage,
      usersStore
    }
  }
})
</script>
