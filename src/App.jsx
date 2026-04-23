import './App.css';

import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/component';
import NavBar from './components/NavBar/component';
import ScrollToTop from './components/ScrollToTop/component';

const About = lazy(() => import('./screens/About/component'));
const Contact = lazy(() => import('./screens/Contact/component'));
const ExperienceDetailsPage = lazy(
  () => import('./screens/Experience/component'),
);
const Home = lazy(() => import('./screens/Home/component'));
const SkillsDetailsPage = lazy(
  () => import('./screens/Skills/details/component'),
);
const SkillsPage = lazy(() => import('./screens/Skills/synthetic/component'));
const WorkDetailsPage = lazy(() => import('./screens/Work/details/component'));
const Works = lazy(() => import('./screens/Work/synthetic/component'));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="app-layout">
          <NavBar />
          <main className="app-content">
            <Suspense fallback={null}>
              <Routes>
                <Route index element={<Home />} />
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
