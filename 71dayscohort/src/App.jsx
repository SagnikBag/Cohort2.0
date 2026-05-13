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
    <div className="  bg-blue-600 p-6">
      <div className=" flex flex-wrap gap-6  px-2  items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
          />
        ))}
      </div>
      
   </div>
  );
}

export default App
