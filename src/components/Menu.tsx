import { Flame, Leaf } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

function Menu() {
  const menuCategories = [
    {
      title: 'Starters',
      items: [
        {
          name: 'Samosa',
          description: 'Crispy pastry filled with spiced potatoes and peas',
          price: '75 kr',
          vegetarian: true,
        },
        {
          name: 'Chicken Tikka',
          description: 'Tender chicken marinated in yogurt and spices, grilled in tandoor',
          price: '95 kr',
          spicy: true,
        },
        {
          name: 'Paneer Pakora',
          description: 'Indian cottage cheese fritters with mint chutney',
          price: '85 kr',
          vegetarian: true,
        },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        {
          name: 'Butter Chicken',
          description: 'Tender chicken in creamy tomato sauce with aromatic spices',
          price: '195 kr',
        },
        {
          name: 'Lamb Rogan Josh',
          description: 'Slow-cooked lamb in rich Kashmiri curry',
          price: '215 kr',
          spicy: true,
        },
        {
          name: 'Palak Paneer',
          description: 'Cottage cheese cubes in creamy spinach gravy',
          price: '175 kr',
          vegetarian: true,
        },
        {
          name: 'Biryani',
          description: 'Fragrant basmati rice with choice of chicken, lamb, or vegetables',
          price: '185 kr',
        },
      ],
    },
    {
      title: 'Breads & Sides',
      items: [
        {
          name: 'Garlic Naan',
          description: 'Freshly baked flatbread with garlic and butter',
          price: '45 kr',
          vegetarian: true,
        },
        {
          name: 'Raita',
          description: 'Cooling yogurt with cucumber and mint',
          price: '35 kr',
          vegetarian: true,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our selection of authentic Indian dishes, prepared with love and the finest ingredients
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-orange-600 mb-8 pb-4 border-b-2 border-orange-200">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item: MenuItem, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex gap-1">
                          {item.vegetarian && (
                            <Leaf className="text-green-600" size={18} title="Vegetarian" />
                          )}
                          {item.spicy && <Flame className="text-red-600" size={18} title="Spicy" />}
                        </div>
                      </div>
                      <span className="text-xl font-bold text-orange-600 whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            <Leaf className="inline text-green-600 mr-2" size={20} />
            Vegetarian
            <Flame className="inline text-red-600 ml-6 mr-2" size={20} />
            Spicy
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
