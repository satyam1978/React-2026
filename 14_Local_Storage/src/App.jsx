import React from 'react'
import  { useState } from 'react'

const App = () => {
  const [state, setstate] = useState("No Data Yet");
  const setItem = () =>{
  const response1 = localStorage.setItem('user', 'Satyam Tripathi');
  const age = localStorage.setItem('age', '19yr');
  setstate("Item Inserted successfully!")
    document.window(response1);
    document.window(age);
  }

  const getItem = () =>{
    const response2 = setstate(localStorage.getItem('user'));
    document.window(response2);
  }

  const removeItem = () =>{
    const response3 = localStorage.removeItem('user');
    setstate('user remove and age added');
    document.window(response3);
  }

  const clear = () =>{
    const response4 = localStorage.clear();
    setstate('Memory Wiped');
    document.window(response4);
  }
  return (
    <div>
      <button onClick={setItem}>Set Item</button>
      <button onClick={getItem}>Get Item</button>
      <button onClick={removeItem}>Remove Item</button>
      <button onClick={clear}>Clear Storage</button>
      <div className="msg">
        <p>{state}</p>
      </div>
    </div>
  )
}

export default App