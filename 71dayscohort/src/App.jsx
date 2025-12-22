import { useState } from 'react'
import Card from './Card';
import {users} from './data/users.js';

function App() {
  

  

  return (
    <>
      <div className="w-full bg-gray-900 flex flex-wrap gap-5 p-5">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App
