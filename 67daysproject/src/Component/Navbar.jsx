import React from 'react'

const Navbar = () => {
  return (
    
      <div  className='flex justify-between p-2'>
        <div className='flex gap-6' >
          <img className='h-10 w-10 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJmVmhJ3LwWwSqepAjF3quyfweBgCSBg8Lg&s" alt="" />
          <a className="no-underline" href="#">About me</a>
          <a className="no-underline" href="#">Services</a>
          <a className="no-underline" href="#">Portfolio</a>
          <a className="no-underline" href="#">Blog</a>
        </div>
        <div>
          <h1 className='bg-gray'>Book A Call</h1>
        </div>
      </div>

  );
}

export default Navbar