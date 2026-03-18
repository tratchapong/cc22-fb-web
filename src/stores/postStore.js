import { createLike, createPost, deletePost, getAllPosts, unLike, updatePost } from "@/api/mainApi";
import { create } from "zustand";
import useUserStore from "./userStore";


const usePostStore = create((set, get) => ({
   posts: [],
   currentPost: null,
   createPost: async (body) => {
       const resp = await createPost(body)
       get().getAllPosts()
       return resp
   },
   createPost2: async (body) => {
       const resp = await createPost(body)
       set( state => ( {
        posts : [ {...resp.data.post, user: useUserStore.getState().user, likes:[], comments: [] ,}, ...state.posts ]
       }) )
   },
   getAllPosts: async () => {
       const resp = await getAllPosts()
       set({ posts: resp.data.posts })
       return resp
   },
   deletePost: async (id) => {
       const resp = await deletePost(id)
       get().getAllPosts()
       return resp
   },
   updatePost: async (id, body) => {
       const resp = await updatePost(id, body)
       get().getAllPosts()
       return resp
   },
   setCurrentPost: (post) => set({ currentPost: post }),
   createLike: async (id) => {
       const resp = await createLike(id)
       get().getAllPosts()
       return resp
   },
   unLike: async (id) => {
       const resp = await unLike(id)
       get().getAllPosts()
       return resp
   }
}))

export default usePostStore