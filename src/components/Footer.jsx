import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-playfair font-bold mb-4">Jersey Girl's Kitchen</h2>
            <p className="text-gray-300 mb-4">
              Soul comforting food made with love, bringing New Jersey style to Virginia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaYelp size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                3990 E. Williamsburg Road, Sandston, Va. 23150
              </li>
              <li className="text-gray-300">
                Phone: 804.322.3515
              </li>
              <li className="text-gray-300">
                Email: Jackie@jerseygirlskitchen.com
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Monday - Friday: 9am - 5pm
              </li>
              <li className="text-gray-300">
                Saturday: 10am - 3pm
              </li>
              <li className="text-gray-300">
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Jersey Girl's Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
