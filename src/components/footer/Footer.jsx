import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';

const Footer = ({ onHomeClick, onProductsClick, onAboutClick, onServicesClick, onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Sweet Dreams Bakery</h3>
          <p className="text-gray-400">Serving fresh delights every day with love and tradition.</p>
        </div>

        {/* Quick Links with click handlers */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li onClick={onHomeClick} className="hover:text-amber-500 transition-colors cursor-pointer">Home</li>
            <li onClick={onProductsClick} className="hover:text-amber-500 transition-colors cursor-pointer">Products</li>
            <li onClick={onAboutClick} className="hover:text-amber-500 transition-colors cursor-pointer">About Us</li>
            <li onClick={onServicesClick} className="hover:text-amber-500 transition-colors cursor-pointer">Services</li>
            <li onClick={onContactClick} className="hover:text-amber-500 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">123 Bakery Lane<br />Sweet City, CA 90210</p>
          <p className="text-gray-400 mt-2">Email: info@sweetdreams.com<br />Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Sweet Dreams Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

