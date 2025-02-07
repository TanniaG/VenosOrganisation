import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import venos1 from "./images/banner-africa-2.jpg";
import venos2 from "./images/donation.jpg";
import venos3 from "./images/group.jpg";
import venos4 from "./images/happychildren.jpg";
import venosLogo from "./images/VenosLogo.png";
import CausesSection from "./causes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';
import AboutUs from './aboutus'; 
import Projects from './projects'; 
import ContactDonation from './contactus';
import './App.css';

// Navigation Component
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="sticky w-full top-0 z-50 bg-black bg-opacity-50">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={venosLogo} alt="Brand Logo" className="h-12 w-auto" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white">
          {isOpen ? 'Close' : 'Menu'} {/* Button to toggle mobile menu */}
        </button>
        <ul className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mx-auto ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
          <li>
            <Link to="/" className="text-white hover:text-amber-100 text-xl font-bold font-montserrat">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white hover:text-amber-100 text-xl font-bold font-montserrat">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-amber-100 text-xl font-bold font-montserrat">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-white hover:text-amber-100 text-xl font-bold font-montserrat">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Carousel Component
const CarouselSection = () => {
  return (
    <div id="home" className="w-screen h-30 sm:h-35 relative z-30">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000} className="shadow-lg">
        <div className="relative">
          <img src={venos1} alt="Slide 1" className="w-full h-full object-cover" />
          <div className="font-montserrat absolute inset-0 flex flex-col justify-center items-start text-white p-10 space-x-4 drop-shadow-lg">
            <h1 className="text-left font-bold p-5 text-4xl sm:text-6xl mt-10">
              Making a difference,<br /> one life at a time
            </h1>
            <p className="text-lg sm:text-xl">
              We empower individuals and communities through impactful programs and initiatives designed to inspire change.
            </p>
            <Link to="/contactus" className="text-white font-montserrat underline mt-7 hover:uppercase space-x-4 hover:text-yellow-800">
              <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl" />
              <span className="font-bold text-xl">Donate</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img src={venos3} alt="Slide 2" className="w-full h-full object-cover" />
          <div className="font-montserrat absolute inset-0 flex flex-col justify-center items-start text-white p-10 space-x-4 drop-shadow-lg">
            <h1 className="text-left font-bold p-5 text-4xl sm:text-6xl mt-1">
              Be a hero <br /> in someone's story
            </h1>
            <p className=" text-lg sm:text-xl">
              We believe in community building and as such every effort counts <br />
              Join us as a volunteer & together we can transform our community!
            </p>
          </div>
        </div>

        <div className="relative">
          <img src={venos4} alt="Slide 3" className ="w-full h-full object-cover" />
          <div className="font-montserrat absolute inset-0 flex flex-col justify-center items-start text-white p-10 space-x-4 drop-shadow-lg">
            <h1 className="text-left font-bold p-40 text-4xl sm:text-6xl mt-30">
              Build a smile today!
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

// Causes Section Component
const CausesSectionComponent = () => {
  return (
    <div id="causes" className="relative z-0" >
      <CausesSection />
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="bg-amber-50 py-3 px-6 text-center relative z-10">
      <h2 className="text-3xl font-bold text-zinc-800">Venos Charity Foundation</h2>
      <p className="mt-4 text-lg text-zinc-800 max-w-3xl mx-auto text-wrap">
        At Venos, we firmly believe that everyone deserves an equal opportunity to thrive and live a dignified life.
        We work tirelessly to provide a range of services that address the unique challenges faced by women and families in Kampala, Uganda.
      </p>
      </section>
  );
};

// Impact Section Component
const ImpactSection = () => {
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('impact');
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="impact" className="bg-zinc-800 py-12 px-6 text-center text-white">
      <h2 className="text-4xl font-bold mb-6 text-amber-100">Impact Since 2020</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="impact-item">
          <h3 className="text-3xl font-bold">
            {isInView ? <CountUp start={0} end={3} duration={3} /> : '0'}+
          </h3>
          <p className="mt-2 text-xl text-amber-600">Communities Reached</p>
        </div>
        <div className="impact-item">
          <h3 className="text-3xl font-bold">
            {isInView ? <CountUp start={0} end={500} duration={3} /> : '0'}+
          </h3>
          <p className="mt-2 text-xl text-amber-600">Families Empowered</p>
        </div>
        <div className="impact-item">
          <h3 className="text-3xl font-bold">
            {isInView ? <CountUp start={0} end={100} duration={3} /> : '0'}+
          </h3>
          <p className="mt-2 text-xl text-amber-600">Women Empowered</p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-amber-50 text-zinc-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Info */}
          <div className=" ml-4 mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p> venos.org@gmail.com</p>
            <p> +256-753-842-678</p>
          </div>

          {/* Location */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p> 10102 - Kampala Town</p>
            <p >Kampala, Uganda</p>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Venos-Org/100067622284991" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-600" /> 
              </a>
              <a href="https://www.facebook.com/people/Venos-Org/100067622284991" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t  pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Venos Org Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="font-sans bg-zinc-800 relative">
        <Navigation />

        <Routes>
          <Route path="/" element={
            <>
              <CarouselSection />
              <AboutSection />
              <CausesSectionComponent />
              <ImpactSection />
            </>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<ContactDonation />} />
        </Routes>

        {/* Add the Footer here */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;