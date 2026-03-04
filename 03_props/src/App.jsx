import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parents'>
      <Card user='Satyam' button='Following' imge='https://images.unsplash.com/photo-1772289239052-7bbbd9bda160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'/>
      <Card user='Gaurav' button='Follow' imge='https://images.unsplash.com/photo-1772490184343-38f6b4b260c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Divya' button='Follow' imge='https://images.unsplash.com/photo-1772442164162-c28b6391758f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App

// Propes is nothing but it is a property that pass the data from parents to child, move in top to bottom direction. And immutable.