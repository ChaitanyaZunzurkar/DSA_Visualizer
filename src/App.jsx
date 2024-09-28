import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx'
import COURSES from './Components/COURSES.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage/>} path="/" />
          <Route element={<About/>} path="/about" />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<COURSES />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
