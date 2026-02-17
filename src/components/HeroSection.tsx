import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdT0hogba0u8H6_91HIOYH0wrdXaehzGPjfpXFoNcnpo_DA7Q/viewform', '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[2000ms] ease-out"
          style={{
            backgroundImage: "url('/IMG_5150.jpg')",
            transform: isVisible ? 'scale(1)' : 'scale(1.2)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.2s'
            }}
          >
            手に職、確かな未来。
          </h2>
          <p
            className="text-2xl sm:text-3xl md:text-4xl text-blue-400 mb-8 font-light"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            あなたの情熱を、
            <br className="sm:hidden" />
            プロフェッショナルのキャリアへ。
          </p>
          <p
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.6s'
            }}
          >
            北海道で、本気で「手に職をつけたい」あなたへ。
            <br />
            クレーン・重機のプロフェッショナルとして、熱量の高いキャリアを築きませんか。
          </p>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.8s'
            }}
          >
            <button
              onClick={handleCTAClick}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">今すぐ問い合わせ・面接に応募する</span>
              <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={24} />
            </button>

            <p className="text-sm text-gray-400 mt-6">
              ※応募フォームへ移動します
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-out 1s'
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
