<template>
  <div class="mt-8">
    <div class="flex justify-between pt-10 pb-5 rounded-t-md shadow-sm">
      <div class="flex space-x-4 md:space-x-16 pl-2 md:pl-4">
        <div class="w-12" />
        <div
          class="whitespace-nowrap font-semibold text-custom-gray-700"
          v-text="$t('list.fullName')"
        />
      </div>
      <div
        class="mr-2 md:mr-12 font-semibold text-custom-gray-700 w-[56px]"
        v-text="$t('list.action')"
      />
    </div>
    <list-row
      v-for="row in rows"
      :key="row.id"
      :row="row"
      @edit="$router.push(`/user/${$event}`)"
      @delete="showModal"
    />
  </div>
  <modal-delete
    :show="!isModalHidden"
    :removed-user="removedUser"
    @remove="remove"
    @close="closeModal"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { User } from '@/interfaces'

import ModalDelete from '@atoms/ModalDelete'
import ListRow from '@molecules/ListRow'

export default defineComponent({
  name: 'OrganismsListTable',
  components: {
    ListRow,
    ModalDelete
  },
  props: {
    rows: {
      type: Array as PropType<User[]>,
      required: true
    }
  },
  emits: ['remove'],
  setup (_, { emit }) {
    const isModalHidden = ref(true)
    const removedUser = ref()

    const showModal = (user: User) => {
      isModalHidden.value = false
      removedUser.value = user
    }
    const closeModal = () => {
      isModalHidden.value = true
    }
    const remove = () => {
      emit('remove', removedUser.value.id)
      closeModal()
    }

    return {
      isModalHidden,
      showModal,
      closeModal,
      removedUser,
      remove
    }
  }
})
</script>
