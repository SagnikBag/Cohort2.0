const teamMembers = [
 {
   image: "https://plus.unsplash.com/premium_photo-1763265290072-6e127ae83e46?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
   fullName: "Rahul Sharma",
   post: "Frontend Developer",
   description: "Specializes in React, Tailwind CSS and building modern UI."
 },
 {
   image: "https://images.unsplash.com/photo-1762793193663-cc343d78111c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
   fullName: "Priya Verma",
   post: "Backend Developer",
   description: "Expert in Node.js, Express and MongoDB database design."
 },
 {
   image: "https://plus.unsplash.com/premium_photo-1763306454161-2587c3791de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
   fullName: "Amit Roy",
   post: "UI/UX Designer",
   description: "Creates beautiful designs and user-friendly interfaces."
 },
 {
   image: "https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
   fullName: "Sneha Das",
   post: "Project Manager",
   description: "Manages project flow and ensures timely delivery."
 }
];

let sum = [];

// teamMembers.forEach(member=>{
//  console.log(member);
 
// })
teamMembers.forEach(member => {
 sum = sum +` <div class="card">
 <img src=${member.image} alt="">
 <h2>${member.fullName}</h2>
 <h3>${member.post}</h3>
 <p> ${member.description}</p>
</div>`
})
 let main=  document.querySelector("main")
 main.innerHTML = sum