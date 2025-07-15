import ProductCard from './ProductCard'

import image1 from '../../assets/cup_cake.jpg'
import image2 from '../../assets/Vegan-Croissants-1.jpg'
import image3 from '../../assets/pastry.jpg'
import image4 from '../../assets/puffs.jpg'
import image5 from '../../assets/cake1.jpg'
import image6 from '../../assets/samosa.jpg'


const products = [
  {
      name: 'Cupcake',
      description: 'Fluffy and sweet cupcakes with colorful frosting.',
      image: image1, // update this path as per your setup
    },
    {
      name: 'Croissant',
      description: 'Buttery, flaky croissants fresh from the oven.',
      image: image2,
    },
    {
      name: 'Pastry',
      description: 'Delicate pastries filled with rich cream or jam.',
      image: image3,
    },
    {
      name: 'Puff',
      description: 'Savory vegetable and cheese stuffed puffs.',
      image: image4,
    },
    {
      name: 'Chocolate Cake',
      description: 'Decadent chocolate cake layered with ganache.',
      image: image5,
    },
    {
      name: 'Samosa',
      description: 'Crispy samosas packed with spiced potato filling.',
      image: image6,
    },
];


const Products = () => {
  return (
    <div className='py-20 bg-gradient-to-b from-white to-amber-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Featured Products</h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Discover our most popular baked goods, made fresh daily with the finest ingredients</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='mt-10 bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-lg font-semibold whitespace-nowrap cursor-pointer'>View all products</button>
      </div>
      
    </div>
  )
}

export default Products
