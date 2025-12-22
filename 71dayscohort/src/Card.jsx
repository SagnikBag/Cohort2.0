import React from 'react'

const Card = (user) => {
  return (
   


    <div className="w-80 bg-gray-400 rounded-lg overflow-hidden shadow-lg shadow-gray-700 cursor-pointer hover:scale-105 ease-in duration-300">
        <img src={user.coverImg} alt="Cover" className="w-full h-32 object-cover" />
        <div className="p-4">
            <div className="flex items-center mb-4">
                <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white -mt-8" />
                <h2 className="text-2xl font-semibold ml-4">{user.name}</h2>
            </div>
            <p className="text-gray-600">{user.description}</p>
        </div>
        <div className="bg-gray-200 p-4 flex justify-between text-center">
            <div>
                <h3 className="text-lg font-semibold">{user.stats.likes}</h3>
                <p className="text-gray-600">Likes</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{user.stats.posts}</h3>
                <p className="text-gray-600">Posts</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{user.stats.views}</h3>
                <p className="text-gray-600">Views</p>
            </div>
        </div>
    </div>
  )
}

  



export default Card