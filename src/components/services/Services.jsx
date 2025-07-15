import React from 'react';
import ServiceCard from './ServiceCards.jsx';
import { FaTruck, FaBirthdayCake, FaShoppingBag, FaCogs } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      icon: <FaBirthdayCake />,
      title: 'Custom Cakes',
      description: 'Beautiful custom cakes for weddings, birthdays, and special occasions',
      features: ['Wedding Cakes', 'Birthday Cakes', 'Corporate Events', 'Custom Designs'],
    },
    {
      icon: <FaTruck />,
      title: 'Delivery Service',
      description: 'Fresh baked goods delivered right to your doorstep',
      features: ['Same Day Delivery', 'Scheduled Orders', 'Corporate Catering', 'Event Planning'],
    },
    {
      icon: <FaShoppingBag />,
      title: 'In-Store Pickup',
      description: 'Order online and pick up your favorite treats in-store at your convenience',
      features: ['Express Pickup', 'Prepaid Orders', 'Custom Orders', 'Contactless Pickup'],
    },
    {
      icon: <FaCogs />,
      title: 'Event Services',
      description: 'Complete baking solutions for events and corporate functions',
      features: ['Live Counters', 'Personalized Themes', 'Dessert Tables', 'On-site Setup'],
    },
  ];

  return (
    <div className="py-20 px-6 bg-amber-50" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
