import { getSong } from "../service/song.api";
import { useContext } from "react";
import { songContext } from "../song.context";



const useSong = ({}) =>{
 const context = useContext()

 const {loading,setLoading,song,setSong} = context 

 async function handleGetSong({}){
  setLoading(true)
  const data = await getSong({mood})
  setSong(data.song)
  setLoading(false)
 }

 return ({
  loading,song,handleGetSong
 })
}