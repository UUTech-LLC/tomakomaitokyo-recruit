import { Award, TrendingUp, BookOpen, Users, Shield, Zap } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: <Award size={56} />,
      title: 'クレーン免許取得の資格補助',
      description: '業界必須のクレーン免許取得を全面サポート。費用補助はもちろん、取得までのスケジュール管理もバックアップします。',
      highlight: true
    },
    {
      icon: <TrendingUp size={56} />,
      title: '明確な給与・キャリアパス',
      description: '入社1年目、3年目、5年目の給与例を明確に提示。頑張りが確実に収入に反映される環境です。',
      highlight: true
    },
    {
      icon: <BookOpen size={56} />,
      title: '充実した研修制度',
      description: '未経験からでも安心。先輩社員によるマンツーマン指導で、確実にスキルを身につけられます。'
    },
    {
      icon: <Users size={56} />,
      title: '風通しの良い職場環境',
      description: '年齢や経験に関係なく意見を言える風土。チームワークを大切にし、全員で成長する文化があります。'
    },
    {
      icon: <Shield size={56} />,
      title: '安定した経営基盤',
      description: '北海道の主要インフラを支える企業として、長期的に安定した仕事量を確保しています。'
    },
    {
      icon: <Zap size={56} />,
      title: '最新設備・技術',
      description: '業界最新の重機・設備を導入。効率的で安全な作業環境で、プロフェッショナルとして成長できます。'
    }
  ];

  return (
    <section id="solutions" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            弊社で、確かな未来を掴む
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            苫小牧東京重機では、あなたの「熱量」をプロフェッショナルなキャリアに変える環境を用意しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                solution.highlight
                  ? 'from-blue-900/40 to-blue-800/40 border-2 border-blue-500'
                  : 'from-gray-800/40 to-gray-900/40 border border-gray-700'
              } backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300`}
            >
              {solution.highlight && (
                <div className="absolute -top-4 -right-4 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                  重要
                </div>
              )}
              <div className={`${solution.highlight ? 'text-blue-400' : 'text-blue-500'} mb-6`}>
                {solution.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            年次毎の年収例
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg min-w-[120px] text-center">
                1年目
              </div>
              <div className="flex-1 text-white">
                <p className="font-semibold text-lg">見習いオペレーター</p>
                <p className="text-gray-300">年収 300万円〜350万円</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg min-w-[120px] text-center">
                5年目
              </div>
              <div className="flex-1 text-white">
                <p className="font-semibold text-lg">中堅オペレーター</p>
                <p className="text-gray-300">年収 450万円〜500万円</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg min-w-[120px] text-center">
                8年目
              </div>
              <div className="flex-1 text-white">
                <p className="font-semibold text-lg">ベテランオペレーター</p>
                <p className="text-gray-300">年収 550万円〜</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center">
            ※能力に合わせてお給料が決まります。
          </p>
        </div>
      </div>
    </section>
  );
}
