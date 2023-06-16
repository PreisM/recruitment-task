<template>
  <div class="md:flex md:justify-between">
    <div class="md:w-96 rounded flex justify-between relative">
      <input
        class="bg-custom-gray-100 px-2 py-1 placeholder:text-custom-gray-400 focus:outline-none focus:ring-0 w-full"
        :placeholder="$t('list.placeholder')"
        onkeydown="return /[a-z]/i.test(event.key)"
        @input="setSearchPhrase"
      >
      <icon
        icon="search"
        viewBox="0 0 50 50"
        class="w-4 h-4 mt-3 mx-4 absolute -translate-y-1 md:translate-y-0 top-0 right-0 text-custom-gray-400 stroke-custom-gray-400 stroke-[4]"
      />
    </div>
    <button
      class="flex bg-custom-green-500 rounded-full px-6 py-2 text-white font-semibold w-full md:w-auto mt-4 md:mt-0 justify-center md:justify-normal whitespace-nowrap"
      @click="$router.push('/add')"
    >
      <icon
        icon="plus"
        viewBox="0 0 24 24"
        class="w-4 h-4 mr-2 mt-[3px] stroke-white stroke-2"
      />
      {{ $t('list.addUser') }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Icon from '@atoms/Icon'

export default defineComponent({
  name: 'MoleculesListHeader',
  components: {
    Icon
  },
  emits: ['search'],
  setup (_, { emit }) {
    const phrase = ref('')

    const setSearchPhrase = (ev: Event) => {
      emit('search', (ev.target as HTMLInputElement).value)
    }
    return {
      phrase,
      setSearchPhrase
    }
  }
})
</script>
