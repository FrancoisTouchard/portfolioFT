import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/component';
import SkillsPage from './screens/Skills/synthetic/component';
import SkillsDetailsPage from './screens/Skills/details/component';
import NavBar from './components/NavBar/component';
import Work from './screens/Work/component';
import Contact from './screens/Contact/component';
import About from './screens/About/component';
import ExperienceDetailsPage from './screens/Experience/component';
import Footer from './components/Footer/component';
import ScrollToTop from './components/ScrollToTop/component';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="app-layout">
          <NavBar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences/:experienceSlug" element={<ExperienceDetailsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/skills/:skillSlug" element={<SkillsDetailsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;