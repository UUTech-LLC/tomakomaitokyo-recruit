import { Building2, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-blue-500" size={32} />
                <h3 className="text-2xl font-bold text-white">苫小牧東京重機株式会社</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                北海道のインフラを支える、重機・クレーンのプロフェッショナル集団。
                あなたの熱量を、確かなキャリアに変える環境がここにあります。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">会社情報</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold mb-1">本社所在地</p>
                    <p className="text-gray-400 text-sm">
                      〒059-1364
                      <br />
                      北海道苫小牧市字沼ノ端１８－３３
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-semibold mb-1">電話番号</p>
                    <p className="text-gray-400 text-sm">0144-55-2001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2025 苫小牧東京重機株式会社 All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  プライバシーポリシー
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
