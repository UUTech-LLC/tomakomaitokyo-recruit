import { AlertCircle, TrendingDown, Search, DollarSign } from 'lucide-react';

export default function ProblemsSection() {
  const problems = [
    {
      icon: <AlertCircle size={48} />,
      title: '将来への不安',
      description: 'このまま今の仕事を続けていても、5年後、10年後の自分が想像できない。'
    },
    {
      icon: <Search size={48} />,
      title: '熱中できる仕事がない',
      description: '毎日がルーティン。本気で打ち込める、やりがいのある仕事を見つけたい。'
    },
    {
      icon: <DollarSign size={48} />,
      title: '給料のビジョンが見えない',
      description: '頑張っても給料が上がらない。努力が正当に評価される環境で働きたい。'
    },
    {
      icon: <TrendingDown size={48} />,
      title: 'スキルが身につかない',
      description: '誰でもできる仕事では、将来的に市場価値が上がらない。専門性を身につけたい。'
    }
  ];

  return (
    <section id="problems" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            こんな悩み、ありませんか？
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            20代・30代の多くの方が、キャリアについて同じような悩みを抱えています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl sm:text-2xl text-white font-semibold mb-4">
            その悩み、私たちが解決します。
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
