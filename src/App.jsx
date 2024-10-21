import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';



function App() {
  

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Contact/>

      <Footer/> 
    </>
  )
}

export default App
