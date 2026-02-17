import { FileText, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function FlowSection() {
  const steps = [
    {
      number: 1,
      icon: <FileText size={48} />,
      title: 'エントリー',
      description: '応募フォームから必要事項を入力してください。履歴書は面接時で構いません。',
      duration: '所要時間: 3分'
    },
    {
      number: 2,
      icon: <Calendar size={48} />,
      title: '面接日程の調整',
      description: '3営業日以内にご連絡し、面接日程を調整します。オンライン面接も可能です。',
      duration: '3営業日以内'
    },
    {
      number: 3,
      icon: <Users size={48} />,
      title: '面接（1回）',
      description: '現場見学も兼ねた面接を実施。リラックスした雰囲気で、お互いを知る時間です。',
      duration: '約1時間'
    },
    {
      number: 4,
      icon: <CheckCircle size={48} />,
      title: '内定・入社',
      description: '面接後、1週間以内に結果をご連絡。入社日や条件面は柔軟に対応します。',
      duration: '1週間以内'
    }
  ];

  return (
    <section id="flow" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            応募から採用までの流れ
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            シンプルで分かりやすいステップ。初めての方でも安心してご応募いただけます。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 relative z-10">
                      <span className="text-white font-bold text-3xl">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800 mt-4 min-h-[120px] hidden md:block"></div>
                    )}
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-blue-400 flex-shrink-0">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-blue-400 font-semibold mb-4">{step.duration}</p>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <ArrowRight className="text-blue-500 rotate-90" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              よくあるご質問
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Q. 未経験でも大丈夫ですか？</p>
                <p className="text-sm pl-4">A. はい、全く問題ありません。充実した研修制度があります。</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Q. 資格は必要ですか？</p>
                <p className="text-sm pl-4">A. 入社時は不要です。入社後に資格取得をサポートします。</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Q. どのくらいで一人前になれますか？</p>
                <p className="text-sm pl-4">A. 個人差はありますが、2〜3年で独り立ちする方が多いです。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
