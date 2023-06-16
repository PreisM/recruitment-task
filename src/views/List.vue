<template>
  <list
    :rows="userList"
    :is-loading="isLoading"
    @search="filterResult"
    @remove="removeUser"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import apiUsers from '@api/users'
import { User } from '@/interfaces'

import List from '@organisms/List'

export default defineComponent({
  name: 'ListView',
  components: {
    List
  },
  setup () {
    const usersStore = useUsersStore()
    const userList = computed({
      get () {
        return usersStore.getUsers
      },
      set (newValue) {
        usersStore.updateUsers(newValue)
      }
    })
    const page = computed(() => usersStore.getPage)
    const isLoading = ref(true)

    const getData = async () => {
      isLoading.value = true
      await apiUsers.getUsers(page.value)
        .then(({ data }) => {
          usersStore.updateUsers(data.data)
          usersStore.updateTotalPages(data.total_pages)
        })
        .catch(() => {
          console.log('error')
        })
      isLoading.value = false
    }

    onMounted(() => {
      if (userList.value.length === 0) {
        getData()
      }
      isLoading.value = false
    })

    watch(() => page.value, () => {
      getData()
    })

    const removeUser = async (id: number) => {
      await apiUsers.deleteUser(id)
        .then(() => {
          console.log('Użytkownik usunięty')
        })
        .catch(() => {
          console.log('error')
        })
    }

    const filterResult = async (phrase: string) => {
      // it should be on the backend, but i'm doing my best :)
      if (phrase && userList.value.length > 0) {
        userList.value = userList.value.filter((el: User) => el.first_name.includes(phrase) || el.last_name.includes(phrase))
      } else {
        await getData()
        userList.value = userList.value.filter((el: User) => el.first_name.includes(phrase) || el.last_name.includes(phrase))
      }
    }

    return {
      userList,
      removeUser,
      page,
      isLoading,
      filterResult
    }
  }
})
</script>
