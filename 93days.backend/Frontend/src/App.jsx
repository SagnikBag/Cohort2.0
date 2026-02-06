import { useState } from 'react'
import axios from 'axios'


function App() {

const [notes, setNotes] = useState([
  {
    title: "test title1",
    description: "test descripion1",
  },
  {
    title: "test title2",
    description: "test descripion2",
  },
  {
    title: "test title3",
    description: "test descripion3",
  },
  {
    title: "test title4",
    description: "test descripion4",
  },
]);

axios.get('http://localhost:3000/api/notes')
.then((res)=>{
 setNotes(res.data.note);
 
})
  return (
    <>
      <div className="flex p-4 m-2  flex-wrap gap-4 ">
        {notes.map((note) => {
          return (
            <div className="bg-red-700 p-4 rounded-xl max-w-xs text-white ">
              <h1 className="font-bold text-2xl">{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
