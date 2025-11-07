import { Facebook, Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Spice Garden</h3>
            <p className="text-gray-400 leading-relaxed">
              Bringing authentic Indian flavors to Malmö since 2018. Experience the taste of tradition
              with a modern twist.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@spicegarden.se"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Stay connected for special offers and updates</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Spice Garden Malmö. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
