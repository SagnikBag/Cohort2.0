import  {getFeed} from "../services/post.api"
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

  useEffect(()=>{
    handleGetFeed()
  },[])

  return{
   loading,feed,post,handleGetFeed
  }

}