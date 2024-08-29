import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import COURSES from '../src/Components/COURSES.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage/>} path="/" />
          <Route element={<About/>} path="/about" />
          <Route element={<COURSES/>} path="/courses" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
