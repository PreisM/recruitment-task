import axios from 'axios'
import { User } from '@/interfaces'

axios.defaults.baseURL = import.meta.env.VITE_API_SERVER

export class ApiUsers {
  public getUsers (page: number) {
    return axios.get(`/users?page=${page}`)
  }

  public getUser (userId: string) {
    return axios.get(`/users/${userId}`)
  }

  public updateUser (userId: string, user: User) {
    return axios.patch(`/users/${userId}`, user)
  }

  public createUser (user: User) {
    return axios.post('/users', user)
  }

  public deleteUser (userId: number) {
    return axios.delete(`/users/${userId}`)
  }
}

const apiUsers = new ApiUsers()
export default apiUsers