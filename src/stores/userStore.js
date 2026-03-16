import { mainApi } from "@/api/mainApi";
import { create } from "zustand";


const useUserStore = create( (set, get)=>({
  user: null,
  token: '',
  login: async (body) => {
    const resp = await mainApi.post('/auth/login', body)
    set({ token : resp.data.token, user: resp.data.user })
    return resp
  },
  logout: () => set( {token:'', user:null})
}) )

export default useUserStore