import './App.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/component';
import NavBar from './components/NavBar/component';
import ScrollToTop from './components/ScrollToTop/component';
import About from './screens/About/component';
import Contact from './screens/Contact/component';
import ExperienceDetailsPage from './screens/Experience/component';
import Home from './screens/Home/component';
import SkillsDetailsPage from './screens/Skills/details/component';
import SkillsPage from './screens/Skills/synthetic/component';
import WorkDetailsPage from './screens/Work/details/component';
import Works from './screens/Work/synthetic/component';

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
              <Route
                path="/experiences/:experienceSlug"
                element={<ExperienceDetailsPage />}
              />
              <Route path="/skills" element={<SkillsPage />} />
              <Route
                path="/skills/:skillSlug"
                element={<SkillsDetailsPage />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:workSlug" element={<WorkDetailsPage />} />
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
