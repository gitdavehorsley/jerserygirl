import { motion } from 'framer-motion';

const menuItems = [
  {
    id: 1,
    name: 'Cheeseburger',
    description: 'Select from an assortment of breads',
    price: '$4.49',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Pulled Pork',
    description: 'On White or Wheat breads',
    price: '$4.99',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1780&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Meatball Parmesan',
    description: 'Select from an assortment of breads',
    price: '$5.99',
    category: 'Hoagies',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1786&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'BLT',
    description: 'On White or Wheat breads',
    price: '$4.49',
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=1925&auto=format&fit=crop'
  }
];

const FeaturedMenu = () => {
  return (
    <section id="menu" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
            Our Featured Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy our selection of delicious New Jersey-style sandwiches and hoagies, 
            made with love and the finest ingredients.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="bg-purple-800 text-white px-2 py-1 rounded text-sm">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <span className="text-sm text-accent font-medium">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-primary inline-block">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
