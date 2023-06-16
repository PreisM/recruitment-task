<template>
  <section-header
    :text="$t('list.header')"
  />
  <content-wrapper>
    <list-header />
    <div
      v-if="isLoading"
      class="relative h-[50vh] w-full"
    >
      <spinner class="absolute top-1/2 left-1/2" />
    </div>
    <list-table
      v-else
      :rows="rows"
      @remove="$emit('remove', $event)"
    />
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
  emits: ['remove'],
  setup () {

    return {
    }
  }
})
</script>
