import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './companats/home/Home';
import Navbars from './companats/navbar/Navbars';

const App = () => {
  return (
   <BrowserRouter>
   <Navbars />
   <Routes>
    <Route path='/' element={<Home />} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
