<template>
  <section-header
    :text="$t('list.header')"
  />
  <content-wrapper>
    <list-header @search="$emit('search', $event)" />
    <div
      v-if="isLoading"
      class="relative h-[50vh] w-full"
    >
      <spinner class="absolute top-1/2 left-1/2" />
    </div>
    <div v-else>
      <list-table
        v-if="rows.length > 0"
        :rows="rows"
        @remove="$emit('remove', $event)"
      />
      <div
        v-else
        class="mt-4 text-custom-gray-500"
        v-text="$t('list.noResult')"
      />
    </div>
  </content-wrapper>
  <pagination />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { User } from '@/interfaces'

import SectionHeader from '@atoms/SectionHeader'
import Spinner from '@atoms/Spinner'
import ContentWrapper from '@atoms/ContentWrapper'
import ListHeader from '@molecules/ListHeader'
import Pagination from '@molecules/Pagination'
import ListTable from '@organisms/ListTable'

export default defineComponent({
  name: 'OrganismList',
  components: {
    SectionHeader,
    ContentWrapper,
    ListHeader,
    ListTable,
    Pagination,
    Spinner
  },
  props: {
    rows: {
      type: Array as PropType<User[]>,
      required: true
    },
    isLoading: Boolean
  },
  emits: ['remove', 'search']
})
</script>
