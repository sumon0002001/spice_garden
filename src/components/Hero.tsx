import { ChefHat } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <ChefHat size={64} className="text-orange-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Authentic Indian Cuisine
          <span className="block text-orange-400 text-4xl md:text-5xl mt-2">in the Heart of Malmö</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
          Experience the rich flavors and aromatic spices of India, crafted with passion and tradition
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border-2 border-white"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
