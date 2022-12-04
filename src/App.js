import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Header from './components/Header';
// import Project from './components/Project';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
// import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
// import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  
  );
}

export default App;
