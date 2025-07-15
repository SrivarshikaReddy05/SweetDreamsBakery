import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import img1 from '../../assets/Bakery1.jpg';
import img2 from '../../assets/Bakery2.jpg';
import img3 from '../../assets/Bakery3.jpg';
import img4 from '../../assets/Bakery4.jpg';

const Carousel = () => {
  const slides = [
    {
      img: img1,
      heading: "Freshly Baked Every Day",
      text: "Enjoy the warm, buttery goodness of our handmade croissants and pastries.",
    },
    {
      img: img2,
      heading: "Sweet Treats for Every Mood",
      text: "From cupcakes to cookies, we have something to satisfy every sweet tooth.",
    },
    {
      img: img3,
      heading: "Artisan Cakes for Every Occasion",
      text: "Celebrate life with our custom-designed cakes, made with love and care.",
    },
    {
      img: img4,
      heading: "Welcome to Sweet Dreams Bakery",
      text: "Step into a world of flavor, freshness, and friendly faces.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[calc(100vh-70px)] overflow-hidden z-0 mt-18">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={`Slide ${i + 1}`}
            className="w-full h-[calc(100vh-70px)] z-0 object-cover object-top"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.heading}</h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.text}</p>
            <div className="flex gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold whitespace-nowrap cursor-pointer">
                View Our Menu
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-lg font-semibold whitespace-nowrap cursor-pointer">
                Visit Our Store
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Dots Indicator */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        index === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
      }`}
    ></button>
  ))}
</div>


      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 text-white text-5xl font-black rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer z-10"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 text-white text-5xl font-black rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer z-10"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
