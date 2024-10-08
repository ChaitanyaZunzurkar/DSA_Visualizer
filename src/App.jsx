import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx'
import COURSES from './Components/COURSES.jsx';
import SideNav from './Components/SideNavbar';

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
          <Route path='/courses/:courseId/:courseTitle' element={<SideNav/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
