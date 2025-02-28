import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                alt="Jersey Girl's Kitchen Food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-800 text-white p-6 rounded-lg shadow-xl">
              <p className="font-playfair text-xl">Est. 2019</p>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-6">
              About Jersey Girl's Kitchen
            </h2>
            
            <p className="text-gray-700 mb-6">
              Jersey Girl's Kitchen was founded in New Jersey by Jackie Joann Paul. Food has always been a passion and now I'm bringing my love of cooking and my New Jersey style to Virginia.
            </p>
            
            <p className="text-gray-700 mb-8">
              Welcome to Jersey Girl's Kitchen! Come try our soul comforting food made with love. We specialize in authentic New Jersey-style sandwiches, hoagies, and catering services for events of all sizes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-playfair text-xl text-purple-800 mb-2">Quality Ingredients</h3>
                <p className="text-gray-600">We use only the freshest ingredients in all our dishes.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-playfair text-xl text-purple-800 mb-2">Full Service</h3>
                <p className="text-gray-600">Catering for any event, large or small.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
