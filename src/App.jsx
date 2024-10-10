import './App.css';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Navbar from '../src/Components/Navbar.jsx';
import Footer from '../src/Components/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/Courses.jsx';
import COURSES from './Components/COURSES.jsx';
// import SideNav from './Components/SideNavbar';

// Linked list page components
import LinkedlistPage from './Algorithms/Linkedlist/LinkedlistPage.jsx';
import Aim from './Algorithms/Linkedlist/Aim.jsx';
import Articles from './Algorithms/Linkedlist/Articles.jsx';
import Test from './Algorithms/Linkedlist/Test.jsx';
import Tutorials from './Algorithms/Linkedlist/Tutorials.jsx';
import Visualization from './Algorithms/Linkedlist/Visualization.jsx';

//Stack page components

import StackPage from './Algorithms/Stack/StackPage.jsx';
import AimStack from './Algorithms/Stack/AimStack.jsx';
import StackConcept from './Algorithms/Stack/StackConcept.jsx';
import StackTest from './Algorithms/Stack/StackTest.jsx';
import StackTutorials from './Algorithms/Stack/StackTutorials.jsx';
import StackVisualization from './Algorithms/Stack/StackVisualization.jsx';
import MonoStack from './Algorithms/Stack/MonoStack.jsx';
import StackImplementation from './Algorithms/Stack/StackIMP.jsx';

// Hashing page components 
import HashingPage from './Algorithms/Hashing/HashingPage.jsx';
import HashingAim from './Algorithms/Hashing/Aim.jsx';
import HashingTest from './Algorithms/Hashing/Test.jsx';
import HashingArticles from './Algorithms/Hashing/Articles.jsx';
import HashingTutorials from './Algorithms/Hashing/Tutorials.jsx';
import HashingVisualization from './Algorithms/Hashing/Visualization';
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<COURSES />} />
          {/* <Route path="/courses/:courseId/:courseTitle" element={<SideNav />} /> */}
          
          <Route path="/courses/:courseId/Linked List" element={<LinkedlistPage />}>
            <Route index element={<Aim />} />
            <Route path="visualization" element={<Visualization />} />
            <Route path="test" element={<Test />} />
            <Route path="articles" element={<Articles />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="*" element={<Navigate to={`./`} />} />
          </Route>

          <Route path="/courses/:courseId/Stacks" element={<StackPage />}>
            <Route index element={<AimStack />} />
            <Route path="mono" element={<MonoStack />} />
            <Route path="visualization" element={<StackVisualization />} />
            <Route path="test" element={<StackTest />} />
            <Route path="concept" element={<StackConcept />} />
            <Route path="tutorial" element={<StackTutorials />} />
            <Route path="implementation" element={<StackImplementation />} />
            <Route path="*" element={<Navigate to={`./`} />} />
            </Route>

          
            <Route path="/courses/:courseId/Hashing" element={<HashingPage />}>
            <Route index element={<HashingAim />} />
            <Route path="visualization" element={<HashingVisualization />} />
            <Route path="test" element={<HashingTest />} />
            <Route path="articles" element={<HashingArticles />} />
            <Route path="tutorials" element={<HashingTutorials />} />
            <Route path="*" element={<Navigate to={'./'} />} />
          </Route>


        </Routes>
                
        <Footer />
      </BrowserRouter>
  );
}

export default App;
