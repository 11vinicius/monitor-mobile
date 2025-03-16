import { create } from 'zustand'

const useAuthStore = create((set) => ({
    count: 0,
  }))
  
export default useAuthStore