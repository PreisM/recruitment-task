<template>
  <div
    v-if="isLoading"
    class="relative h-[50vh] w-full"
  >
    <spinner class="absolute top-1/2 left-1/2" />
  </div>
  <user-form
    v-else
    :create="!userId"
    :user="user"
    @update="updateUser"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import apiUsers from '@api/users'
import { User } from '@/interfaces'

import Spinner from '@atoms/Spinner'
import UserForm from '@organisms/UserForm'

export default defineComponent({
  name: 'UserView',
  components: {
    UserForm,
    Spinner
  },
  setup () {
    const route = useRoute()
    const userId = route.params.userId as string
    const user = ref()
    const isLoading = ref(true)

    onMounted(async () => {
      if (userId) {
        await apiUsers.getUser(userId)
          .then(({ data }) => {
            user.value = data.data
          })
          .catch(() => {
            console.log('error')
          })
      }
      isLoading.value = false
    })

    const updateUser = async (user: User) => {
      if (userId) {
        await apiUsers.updateUser(userId, user)
          .then(({ data }) => {
            console.log('Użytkownik został zaktualizowany', data)
          })
          .catch(() => {
            console.log('error')
          })
      } else {
        await apiUsers.createUser(user)
          .then(({ data }) => {
            console.log('Użytkownik został dodany', data)
          })
          .catch(() => {
            console.log('error')
          })
      }
    }

    return {
      user,
      userId,
      updateUser,
      isLoading
    }
  }
})
</script>
