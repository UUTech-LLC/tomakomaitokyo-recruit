import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdT0hogba0u8H6_91HIOYH0wrdXaehzGPjfpXFoNcnpo_DA7Q/viewform', '_blank');
  };

  return (
    <section id="cta" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm border-2 border-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                あなたの未来は、
                <br className="sm:hidden" />
                今日から始まる。
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                北海道で、本気で手に職をつけたいあなたへ。
                <br />
                私たちと一緒に、プロフェッショナルとしての
                <br className="hidden sm:block" />
                確かなキャリアを築きませんか。
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 mb-8">
              <button
                onClick={handleCTAClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                今すぐ問い合わせ・面接に応募する
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>

              <p className="text-sm text-gray-400 text-center">
                ※フォーム入力は約3分で完了します
                <br />
                ※ご応募後、3営業日以内にご連絡いたします
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8 mt-8">
              <p className="text-center text-white font-semibold mb-6">
                お電話でのお問い合わせも歓迎です
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="text-blue-400" size={24} />
                  <p className="text-gray-300 text-sm">電話</p>
                  <p className="text-white font-semibold">0144-XX-XXXX</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="text-blue-400" size={24} />
                  <p className="text-gray-300 text-sm">メール</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">info@example.com</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="text-blue-400" size={24} />
                  <p className="text-gray-300 text-sm">受付時間</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">平日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              まずは気軽にお話しましょう。
              <br />
              あなたの夢や目標を、ぜひ聞かせてください。
            </p>
            <div className="inline-flex items-center gap-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">あなたからのご連絡をお待ちしています</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
