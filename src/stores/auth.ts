import type { AuthInfo } from '@/types/User/Auth'
import { defineStore } from 'pinia'

export const useAuthInfoStore = defineStore('AuthInfo', {
  state: (): AuthInfo => {
    const token = localStorage.getItem('token') || ''
    return {
      token: token
    }
  },
  getters: {
    token: (state) => state?.token
  },
  actions: {
    async fetchUser() {
      setTimeout(() => {
        this.user = {
          name: 'Maggie',
          departmentId: '12',
          role: 'admin',
          Id: '1212',
          authentication: []
        }
      }, 100)
    },
    updateAuthInfo(user: AuthInfo['user']) {
      this.user = user
    },
    udpateToken(token: string) {
      this.token = token
    }
  }
})
