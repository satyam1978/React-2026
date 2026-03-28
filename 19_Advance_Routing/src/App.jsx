import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetails'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Not_found from './pages/Not_found'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/product' element={<Product />}>
         <Route path='/product/men' element={<Men />}/>
         <Route path='/product/women' element={<Women />}/>
        </Route>
        <Route path='*' element={<Not_found />}/>
      </Routes>
      <Footer />
    </div>
  ) 
}
export default App