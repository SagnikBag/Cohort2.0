import axios from "axios";

const api = axios.create({
 baseUrl:"http://localhost:3000/api/auth",
 withCredentials: true
})

export async function login(username,email){
 const response = await api.post('/login',{
  username,password
 })
 return response.data
}
export async function register(username,email,password){
 const resonse = await api.post('/register',{
  username,email,password
 })
 return resonse.data
}
export async function getMe(){
 const response = await api.get('/get-me')

 return response.data
}