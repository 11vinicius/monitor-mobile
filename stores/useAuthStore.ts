import { create } from 'zustand'
import { IAuthStore, ILoginForm } from '@/Interfaces/AuthInterfaces'
import { authService } from '@/Services/authService'
import { AxiosError } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useAuthStore = create<IAuthStore>((set) => ({
  token: '',
  loading: false,
  er: null,
  fetchToken: async(body:ILoginForm) => {
    set({ loading: true, er: null})
    await authService().signIn(body).then(async(res) => {

        await AsyncStorage.setItem('token', res.data.token);
      set({ loading: false, er: null, token: res.data.token})
    })
    .catch((err: AxiosError) => {
      if(err.response?.status === 401){
        set({ loading: false, er: err.response?.data.error})
      }
    })
  }
}))
  