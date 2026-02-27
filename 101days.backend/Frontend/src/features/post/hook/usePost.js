import  {getFeed,createPost} from "../services/post.api"
import { useContext, useEffect } from "react"
import {PostContext} from "../post.context"

export const usePost = () =>{
  const context = useContext(PostContext)
  
  const {loading,setLoading,post,setPost,feed,setFeed} = context



  const handleGetFeed = async()=>{
   setLoading(true)
   const data = await getFeed()
   setFeed(data.posts)
   setLoading(false)
  }

  const handleCreatePost = async(imageFie,caption)=>{
    setLoading(true)
    const data = await createPost(imageFie,caption)
    setFeed([data.post,...feed])
    setLoading(false)

  }
  useEffect(()=>{
    handleGetFeed()
  },[])

  return{
   loading,feed,post,handleGetFeed,handleCreatePost
  }
}