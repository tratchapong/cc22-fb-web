import usePostStore from "@/stores/postStore"
import CreatePost from "./CreatePost"
import { useEffect } from "react"
import PostItem from "./PostItem"

function PostContainer() {
  const getAllPosts = usePostStore(state => state.getAllPosts)
  const posts = usePostStore(state => state.posts)
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className="w-170 mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
      <CreatePost />
      { posts.map( post => (
        <PostItem key={post.id} post={post}/>
      ))}

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default PostContainer