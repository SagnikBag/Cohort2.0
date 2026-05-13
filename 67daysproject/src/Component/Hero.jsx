import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-between p-10 m-5 ">
      <div>
        <div className="flex gap-6">
          <div>
            <h1 className=" text-4xl">+250</h1>
            <p>Project completed</p>
          </div>
          <div>
            <h1 className=" text-4xl">+50</h1>
            <p>Startup raised</p>
          </div>
        </div>
        <div className="pt-40">
          <h1 className="text-9xl">Hello</h1>
          <p>-It's Dnova Design Wizerd</p>
        </div>
      </div>
      <div className="h-70 w-120">
        <img
          className="object-cover h-3.500 w-400 rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUeFkEa4JxJL1e7ivqM9osi-JZ9_DT1radCYqUfbTb56Qxk5f"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero