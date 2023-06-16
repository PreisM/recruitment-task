<template>
  <div class="flex justify-between py-6 rounded-md even:bg-custom-gray-200">
    <div class="flex space-x-4 md:space-x-16 pl-2 md:pl-4">
      <avatar :path="row.avatar" />
      <span
        class="text-custom-gray-700 my-auto"
        v-text="`${row.first_name} ${row.last_name}`"
      />
    </div>
    <div
      class="mr-2 md:mr-12 flex space-x-2 my-auto"
    >
      <icon
        viewBox="0 0 32 32"
        icon="edit"
        class="h-6 w-6 text-custom-gray-300 cursor-pointer hover:text-gray-500"
        @click="$emit('edit', row.id)"
      />
      <icon
        viewBox="0 0 32 32"
        icon="trash"
        class="h-6 w-6 pt-0.5 text-custom-gray-300 cursor-pointer hover:text-gray-500"
        @click="$emit('delete', row)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Avatar from '@atoms/Avatar'
import Icon from '@atoms/Icon'

export default defineComponent({
  name: 'MoleculesListHeader',
  components: {
    Avatar,
    Icon
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  emits: ['edit', 'delete']
})
</script>
