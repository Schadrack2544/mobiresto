import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './about'
import Contact from './contact'
import Foods from './foods'
import Home from './home'
import Orders from './orders'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/foods" element={<Foods/>}/>
          <Route path="/orders" element={<Orders/>}/>
      </Routes>
   </Router> 
  );
}

export default App;
