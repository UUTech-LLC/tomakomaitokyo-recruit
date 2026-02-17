import { Flame, Trophy, Target } from 'lucide-react';

export default function PassionSection() {
  return (
    <section id="passion" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/IMG_5151.jpg')] bg-center opacity-5 bg-no-repeat" style={{ backgroundSize: 'cover' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-600 rounded-full px-6 py-3 mb-8">
            <Flame className="text-red-500" size={28} />
            <span className="text-red-500 font-bold text-lg">熱量の証明</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            私たちの熱意と勢い
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            苫小牧東京重機は、ただの建設会社ではありません。熱量を持って挑戦し続ける企業です。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-blue-600 rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600 rounded-full px-6 py-3 mb-8">
                <Trophy className="text-yellow-500" size={24} />
                <span className="text-yellow-500 font-bold text-lg">年間スポンサー</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                格闘家 皇治選手の
                <br />
                年間スポンサー企業
              </h3>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                私たちは、格闘家として第一線で活躍する皇治選手を年間スポンサーとして支援しています。
                これは単なる広告活動ではありません。
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                「本気で挑戦する人を応援する」という企業理念の体現であり、
                私たちの熱量と勢いを示す証です。
              </p>

              <div className="mb-12 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <img
                    src="/img_8577.jpg"
                    alt="皇治選手とのスポンサー記念写真"
                    className="relative rounded-2xl shadow-2xl w-full max-w-2xl border-2 border-yellow-600/50"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-8 border-2 border-red-600/50 text-center hover:border-red-500 transition-colors duration-300">
                <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="text-red-400" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">熱量</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  挑戦する姿勢を大切にし、情熱を持って仕事に取り組む
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-8 border-2 border-blue-600/50 text-center hover:border-blue-500 transition-colors duration-300">
                <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-blue-400" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">勢い</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  成長し続ける企業として、常に前進する力
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl sm:text-2xl text-white font-semibold mb-4">
              あなたも、熱量を持った仲間として、私たちと一緒に成長しませんか？
            </p>
            <p className="text-lg text-gray-400">
              挑戦する人を全力で支援する。それが、苫小牧東京重機のスタイルです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
