import './App.css';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx';
import COURSES from './Components/COURSES.jsx';
import SideNav from './Components/SideNavbar';

// Linked list page components
import LinkedlistPage from './Algorithms/Linkedlist/LinkedlistPage.jsx';
import Aim from './Algorithms/Linkedlist/Aim.jsx';
import Articles from './Algorithms/Linkedlist/Articles.jsx';
import Test from './Algorithms/Linkedlist/Test.jsx';
import Tutorials from './Algorithms/Linkedlist/Tutorials.jsx';
import Visualization from './Algorithms/Linkedlist/Visualization.jsx';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<COURSES />} />
          <Route path="/courses/:courseId/:courseTitle" element={<SideNav />} />
          
          <Route path="/courses/:courseId/Linked List" element={<LinkedlistPage />}>
            <Route index element={<Aim />} />
            <Route path="visualization" element={<Visualization />} />
            <Route path="test" element={<Test />} />
            <Route path="articles" element={<Articles />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="*" element={<Navigate to={`./`} />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
