import { defineStore } from 'pinia'
import { User } from '@/interfaces'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as unknown as User[],
    page: 1,
    total_pages: 1
  }),
  getters: {
    getUsers (state) {
      return state.users
    },
    getPage (state) {
      return state.page
    },
    getTotalPages (state) {
      return state.total_pages
    }
  },
  actions: {
    async updateUsers (val: User[]) {
      this.users = val
    },
    async updatePage (val: number) {
      this.page = val
    },
    async updateTotalPages (val: number) {
      this.total_pages = val
    }
  }
})