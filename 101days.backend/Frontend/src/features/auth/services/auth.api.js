import axios  from "axios";

const api = axios.create({
 baseURL:"http://localhost:3000/api/aut",
 withCredentials:true
})

 export async function register(username,password,email){
  try{
   const response = await api.post("/register",{
    username,
    password,
    email,
   })
   return (response.data);
   
  }
  catch(err){
   throw err 
   }
}
 export async function login(email,password) {
 try {
  const response =await api.post("/login",{
   email,
   password,
  },{
   withCredentials: true
  })
  return (response.data);
  
 }
  catch (err) {
  throw err
 }
}
export async function getMe(){
   try {
      const response = await api.post("/get-me")
      
      return response.data
   } catch (err) {
      throw err
   }
}