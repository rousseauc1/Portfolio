import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackToTopArrow from "./components/BackToTopArrow"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import About from "./pages/About"
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
        <BackToTopArrow />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
