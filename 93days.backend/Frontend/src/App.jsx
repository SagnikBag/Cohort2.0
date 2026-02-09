import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';


function App() {

const [notes, setNotes] = useState([]);
function fetchNotes(){
  axios.get("http://localhost:3000/api/notes").then((res) => {
    setNotes(res.data.note);
  });
}

useEffect(()=>{
  fetchNotes();
}, [])

function handleSubmit(e){
  e.preventDefault()

  const {title,description} = e.target.elements
  console.log(title.value,description.value);
  axios
    .post("https://cohort2-0-xsn5.onrender.com//api/notes", {
      title: title.value,
      description: description.value,
    })
    .then((res) => {
      console.log(res.data);
      fetchNotes();
    });  
}

function handleDeleteNote(noteId){
axios
  .delete("https://cohort2-0-xsn5.onrender.com//api/notes/" + noteId)
  .then((res) => {
    console.log(res.data);
    fetchNotes();
  });

}
  return (
    <>
      <form className="flex gap-4 px-12 py-4" onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder="Enter title" />
        <input name='description' type="text" placeholder="Enter description" />
        <button>Create</button>
      </form>
      <div className="flex p-4 m-2  flex-wrap gap-4 ">
        {notes.map((note) => {
          return (
            <div className="bg-red-700 p-4 rounded-xl max-w-xs text-white ">
              <h1 className="font-bold text-2xl">{note.title}</h1>
              <p>{note.description}</p>
              <button className='bg-white text-black' onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
