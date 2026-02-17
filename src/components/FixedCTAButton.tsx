import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function FixedCTAButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdT0hogba0u8H6_91HIOYH0wrdXaehzGPjfpXFoNcnpo_DA7Q/viewform', '_blank');
  };

  return (
    <button
      onClick={handleCTAClick}
      className={`fixed right-6 bottom-6 z-40 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <Send size={20} />
      <span className="hidden sm:inline">応募する</span>
    </button>
  );
}
