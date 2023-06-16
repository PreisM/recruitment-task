<template>
  <section-header
    :text="create ? $t('user.create.header') : $t('user.update.header')"
  />
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-4">
    <content-wrapper class="lg:col-span-2 flex flex-col justify-between">
      <form class="md:flex justify-between space-y-4 md:space-y-0 md:space-x-4">
        <form-text
          id="firstName"
          v-model="first_name"
          :label="$t('user.firstName')"
          :placeholder="$t('user.placeholder.firstName')"
        />
        <form-text
          id="lastName"
          v-model="last_name"
          :label="$t('user.lastName')"
          :placeholder="$t('user.placeholder.lastName')"
        />
      </form>
      <div class="mt-12">
        <button
          class="rounded bg-custom-green-500 text-white px-4 py-2"
          @click="save"
          v-text="create ? $t('user.create.btn') : $t('user.update.btn')"
        />
      </div>
    </content-wrapper>
    <content-wrapper>
      <div class="space-y-12">
        <avatar
          :path="avatar"
          size="xl"
          class="mx-auto"
        />
        <button
          class="w-full border rounded hover:bg-custom-gray-200 py-2 text-sm text-custom-gray-700 flex whitespace-nowrap text-center items-center justify-center"
        >
          <icon
            icon="camera"
            viewBox="0 0 32 32"
            class="w-4 h-4 block mr-2"
          />
          {{ $t('user.changePhoto') }}
        </button>
      </div>
    </content-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { User } from '@/interfaces'

import SectionHeader from '@atoms/SectionHeader'
import ContentWrapper from '@atoms/ContentWrapper'
import FormText from '@atoms/FormText'
import Avatar from '@atoms/Avatar'
import Icon from '@atoms/Icon'

export default defineComponent({
  name: 'OrganismUserForm',
  components: {
    SectionHeader,
    ContentWrapper,
    FormText,
    Avatar,
    Icon
  },
  props: {
    user: {
      type: Object as PropType<User>,
      default: () => ({})
    },
    create: Boolean
  },
  emits: ['update'],
  setup (props, { emit }) {
    const first_name = ref(props.user.first_name ?? '')
    const last_name = ref(props.user.last_name ?? '')
    const avatar = ref(props.user.avatar ?? 'https://static.thenounproject.com/png/5034901-200.png')

    const save = () => {
      emit('update', { first_name, last_name })
    }

    return {
      first_name,
      last_name,
      avatar,
      save
    }
  }
})
</script>
