import { Award, Heart, Users } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Award,
      title: 'Authentic Recipes',
      description: 'Traditional family recipes passed down through generations',
    },
    {
      icon: Heart,
      title: 'Fresh Ingredients',
      description: 'Locally sourced produce and imported spices from India',
    },
    {
      icon: Users,
      title: 'Warm Hospitality',
      description: 'Experience genuine Indian hospitality in every visit',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-orange-600">Spice Garden</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established in 2018, Spice Garden brings the vibrant flavors of India to Malmö. Our chefs,
              trained in the art of Indian cuisine, create dishes that honor tradition while embracing
              modern culinary techniques.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From the tandoori ovens to our carefully curated spice blends, every element of our restaurant
              is designed to transport you to the colorful streets and bustling markets of India. We take
              pride in offering an authentic dining experience that celebrates the diversity of Indian
              regional cuisines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <Icon className="mx-auto mb-3 text-orange-600" size={40} />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Indian spices"
              className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef cooking"
              className="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tandoor oven"
              className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
