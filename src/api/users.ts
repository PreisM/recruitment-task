import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_SERVER
export class ApiUsers {
  public getUsers (page: number) {
    return axios.get(`/users?page=${page}`)
  }

  public getUser (userId: string) {
    return axios.get(`/users/${userId}`)
  }
}

const apiUsers = new ApiUsers()
export default apiUsers