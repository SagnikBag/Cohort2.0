import React from 'react'
import { useAuth } from "../hooks/useAuth";


const Logout = () => {
 const { handleLogout } = useAuth();
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout