import './App.css'
import Card from './Card'

function App() {
  const cardData = [
    {
      title: "React",
      description: "Build modern UI using React",
      image: "https://via.placeholder.com/300x200",
      buttonText: "Learn React",
    },
    {
      title: "JavaScript",
      description: "Master JavaScript fundamentals",
      image: "https://via.placeholder.com/300x200",
      buttonText: "Start JS",
    },
    {
      title: "Tailwind CSS",
      description: "Style faster with utility classes",
      image: "https://via.placeholder.com/300x200",
      buttonText: "Explore",
    },
  ];


  

 
  return (
    <div className="min-h-screen flex flex-wrap gap-6  px-2  items-center bg-green-600">
      <Card  />
      <Card  />
      <Card />
      <Card/>
      <Card/>
      <Card/>
      
    </div>
  );
}

export default App
