import img1 from '../../assets/Bakery5.jpg'

const About = () => {
    return (
        <div className='py-20 bg-white m-4 mx-10'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div id="left" className='animate-fade-in-left'>
                    <img src={img1} alt="" className='w-full h-96 object-cover object-top rounded-2xl shadow-2xl'/>
                </div>
                <div id="right" className='flex flex-col justify-start'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>Our Story</h2>
                    <p className='text-gray-600 text-lg mb-6 leading-relaxed'>For over 25 years, Sweet Dreams Bakery has been serving the community with freshly baked goods made from traditional recipes passed down through generations. Our commitment to quality ingredients and time-honored techniques ensures every bite is a moment of pure joy.</p>

                    <p className='text-gray-600 text-lg mb-8 leading-relaxed'> From our signature sourdough bread to custom wedding cakes, we pour our heart and soul into every creation. Our team of skilled bakers starts before dawn each day to ensure our shelves are stocked with the freshest pastries, breads, and desserts.</p>
                    <div className='flex flex-row gap-10 px-10 mx-auto'>
                        <div id="card" className='flex justify-center item-center flex-col bg-amber-50 p-4 rounded-2xl hover:bg-amber-100 transition-colors duration-300'>
                            <h5 className='text-center'>25+</h5>
                            <p>Years of Experience</p>
                        </div>
                        <div id="card" className='flex justify-center item-center flex-col bg-amber-50 p-4 rounded-2xl hover:bg-amber-100 transition-colors duration-300'>
                            <h5 className='text-center'>50+</h5>
                            <p>Daily Fresh Items</p>
                        </div>
                    </div>
                    <button className='mx-auto mt-6 bg-amber-600 m-3 text-white px-4 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold whitespace-nowrap cursor-pointer'>Learn More About Us</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
