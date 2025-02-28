import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedMenu from './components/FeaturedMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
const Home = () => (
  <>
    <Hero />
    <About />
    <FeaturedMenu />
    <Contact />
  </>
);

const AboutPage = () => <About />;
const MenuPage = () => <FeaturedMenu />;
const ContactPage = () => <Contact />;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
