import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {

  const profiles = [
  {
    id: 1,
    name: "Satyam Tripathi",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    description: "Full Stack Developer & AI Enthusiast",
    rating: 4.5,
    earned: "45K+",
    rate: "50/Hr"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Frontend Developer with React expertise",
    rating: 4.7,
    earned: "60K+",
    rate: "65/Hr"
  },
  {
    id: 3,
    name: "Aman Verma",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Backend Developer & Node.js Specialist",
    rating: 4.6,
    earned: "55K+",
    rate: "55/Hr"
  },
  {
    id: 4,
    name: "Priya Singh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    description: "UI/UX Designer & Creative Thinker",
    rating: 4.8,
    earned: "70K+",
    rate: "75/Hr"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    description: "Mobile App Developer (Flutter)",
    rating: 4.4,
    earned: "40K+",
    rate: "48/Hr"
  },
  {
    id: 6,
    name: "Vikram Patel",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    description: "Cyber Security Analyst",
    rating: 4.9,
    earned: "85K+",
    rate: "90/Hr"
  },
  {
    id: 7,
    name: "Anjali Mehta",
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "AI & Machine Learning Engineer",
    rating: 4.7,
    earned: "95K+",
    rate: "100/Hr"
  },
  {
    id: 8,
    name: "Rohan Das",
    image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "DevOps Engineer & Cloud Expert",
    rating: 4.6,
    earned: "78K+",
    rate: "85/Hr"
  },
  {
    id: 9,
    name: "Sneha Iyer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
    description: "Data Scientist & Analyst",
    rating: 4.8,
    earned: "88K+",
    rate: "95/Hr"
  },
  {
    id: 10,
    name: "Arjun Rao",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    description: "Blockchain Developer",
    rating: 4.5,
    earned: "65K+",
    rate: "70/Hr"
  }
];

  return (
    <div className='parents'>
     {
      profiles.map(function(elem, idx){
        return <div key={idx}>
          <Card 
            name={elem.name}
            image={elem.image}
            description={elem.description}
            rating={elem.rating}
            earned={elem.earned}
            rate={elem.rate}
          />
        </div>
      })}
      
      
    </div>
  )
}

export default App;