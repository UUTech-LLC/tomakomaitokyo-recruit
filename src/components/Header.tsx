import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'トップ' },
    { id: 'problems', label: 'お悩み' },
    { id: 'solutions', label: '解決策' },
    { id: 'passion', label: '熱量の証明' },
    { id: 'gallery', label: '現場ギャラリー' },
    { id: 'voices', label: '従業員の声' },
    { id: 'flow', label: '応募の流れ' },
    { id: 'cta', label: '応募する' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-xl sm:text-2xl">
              苫小牧東京重機株式会社
            </h1>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-3 xl:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 font-medium text-sm xl:text-base whitespace-nowrap ${
                    item.id === 'cta'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
