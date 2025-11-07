import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`text-2xl lg:text-3xl font-bold ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
              Spice Garden
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wide font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href="tel:+46401234567"
              className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
            >
              <Phone size={16} />
              <span>Book Table</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 flex flex-col space-y-4 bg-white rounded-lg shadow-xl p-6">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-orange-600 text-left uppercase tracking-wide font-medium"
              >
                {section}
              </button>
            ))}
            <a
              href="tel:+46401234567"
              className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors mt-4"
            >
              <Phone size={16} />
              <span>Book Table</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
