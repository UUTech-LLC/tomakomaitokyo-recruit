import { Quote, User } from 'lucide-react';

export default function VoicesSection() {
  const voices = [
    {
      position: '現場リーダー',
      years: 5,
      comment: {
        給与: '入社時は月給25万円でしたが、資格取得とスキルアップで今は月給35万円＋賞与。頑張りが確実に評価される環境です。',
        将来: '5年後には現場責任者として後輩を育成しながら、年収600万円以上を目指しています。ここでなら実現できると確信しています。'
      }
    }
  ];

  return (
    <section id="voices" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            従業員の声
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            実際に働く仲間たちの、リアルな声をお届けします。
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-0">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-8 flex flex-col items-center justify-center text-center border-r border-gray-700">
                  <div className="w-32 h-32 bg-gray-700/50 rounded-full mb-4 flex items-center justify-center border-2 border-blue-500">
                    <User className="text-blue-400" size={64} />
                  </div>
                  <p className="text-gray-300 font-semibold mb-1">{voice.position}</p>
                  <p className="text-gray-400 text-sm">入社{voice.years}年目</p>
                </div>

                <div className="md:col-span-3 p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Quote className="text-green-500" size={20} />
                        <h4 className="text-lg font-bold text-green-400">給与の変化</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed pl-7">{voice.comment.給与}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Quote className="text-blue-500" size={20} />
                        <h4 className="text-lg font-bold text-blue-400">将来のビジョン</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed pl-7">{voice.comment.将来}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white font-semibold mb-3">
            あなたも、次の成功ストーリーの主人公になりませんか？
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
