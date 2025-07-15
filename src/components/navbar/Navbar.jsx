const Navbar = ({ onHomeClick, onProductsClick, onAboutClick, onServicesClick, onContactClick }) => {
  return (
    <div className='bg-white shadow-lg w-full fixed top-0 container mx-auto px-4 py-4 z-50'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <span
            className='text-2xl font-bold text-amber-600 font-pacifico hover:text-amber-700 transition-colors duration-300 cursor-pointer'
            onClick={onHomeClick}
          >
            Sweet Dreams Bakery
          </span>
        </div>

        <div className='flex gap-6'>
          <div className='hidden md:flex items-center space-x-8'>
            <span onClick={onHomeClick} className='text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium cursor-pointer'>Home</span>
            <span onClick={onProductsClick} className='text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium cursor-pointer'>Products</span>
            <span onClick={onAboutClick} className='text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium cursor-pointer'>About</span>
            <span onClick={onServicesClick} className='text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium cursor-pointer'>Services</span>
            <span onClick={onContactClick} className='text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium cursor-pointer'>Contact</span>
          </div>
          <button className='bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer'>
            Order me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
