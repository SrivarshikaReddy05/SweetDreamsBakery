import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ image, name, description, price }) => {
  const [liked, setLiked] = useState(false);

  return (
    
    <div className=" bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Image + Heart */}
      <div className="relative overflow-hidden">
        {/* Heart Icon */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer z-10"
          aria-label="Add to wishlist"
        >
          <FaHeart
            className={`text-xl transition-colors duration-300 ${
              liked ? 'text-red-500 scale-110' : 'text-red-600'
            }`}
          />
        </button>

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
            {name}
          </h3>
          <span className="text-2xl font-bold text-amber-600">${price}</span>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <button className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold whitespace-nowrap cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
