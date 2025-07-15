import { useRef } from 'react';
import './App.css';
import About from './components/about/About';
import Carousel from './components/carousel/Carousel';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import Products from './components/products/Products';
import Services from './components/services/services';

function App() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar
        onHomeClick={() => scrollTo(homeRef)}
        onProductsClick={() => scrollTo(productsRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <div ref={homeRef}><Carousel /></div>
      <div ref={productsRef}><Products /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer
        onHomeClick={() => scrollTo(homeRef)}
        onProductsClick={() => scrollTo(productsRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
    </div>
  );
}

export default App;
