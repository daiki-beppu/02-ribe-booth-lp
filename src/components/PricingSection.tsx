import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-300">
      <div className="container mx-auto px-4">
        {/* 料金体系 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            料金・お申し込み
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
            体験も相談会も完全無料！気軽にプログラミングの世界を覗いてみてください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 無料サービス */}
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-green-500 hover:bg-green-600 text-lg py-2 px-6 mb-4 mx-auto w-fit">
                🆓 完全無料
              </Badge>
              <CardTitle className="text-2xl">無料体験・相談会</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-green-400 pl-4">
                <div className="mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    🚦 LED信号機プログラミング体験
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  15分間の本格的な体験（順次案内）
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <div className="mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    👨‍💻 現役プログラマーへの相談会
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  30分間の直接相談（1日3回開催）
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <div className="mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    📜 体験証明書・学習資料
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  夏休みの思い出として持ち帰り可能
                </p>
              </div>

              <div className="mt-6">
                <img
                  src="/src/assets/images/conceptual-experience.png"
                  alt="親子でArduinoプログラミングを学ぶ理想的な体験風景"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-gray-500 text-sm mt-2">
                  実際の体験風景：親子で楽しくプログラミングを学習
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 物販商品 */}
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-lg py-2 px-6 mb-4 mx-auto w-fit">
                🎁 物販商品ラインナップ
              </Badge>
              <CardTitle className="text-2xl">お持ち帰りキット</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-green-400 pl-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    🌱 スタートキット
                  </h4>
                  <span className="text-2xl font-bold text-green-600">
                    ¥3,000
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  マイコン＋ボード＋信号機キット
                  <br />
                  基本的なLED制御プログラム付き
                </p>
                <Badge className="bg-green-100 text-green-800 text-xs">
                  初心者・お子様向けの入門モデル
                </Badge>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    🚀 アドベンチャーキット
                  </h4>
                  <span className="text-2xl font-bold text-orange-600">
                    ¥5,000
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  スタートキットの全内容
                  <br />
                  ＋踏切システム追加＋モーター制御機能
                </p>
                <div className="mb-3">
                  <img
                    src="/src/assets/images/signal-and-level-crossing.jpg"
                    alt="信号機と踏切システムのハードウェア"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <Badge className="bg-orange-100 text-orange-800 text-xs">
                  親子で夏の思い出作り＆本格学習モデル
                </Badge>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">
                    💎 マスターキット
                  </h4>
                  <span className="text-2xl font-bold text-purple-600">
                    ¥10,000
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  アドベンチャーキットの全内容
                  <br />
                  ＋3種センサー（距離/温度/照度）追加
                </p>
                <Badge className="bg-purple-100 text-purple-800 text-xs">
                  副業・転職を目指す本格派モデル
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 申込方法 */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
          <CardContent className="p-8">
            <CardTitle className="text-2xl text-white mb-8 text-center drop-shadow-lg">
              お申し込み・お問い合わせ
            </CardTitle>
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="font-bold text-white mb-2 text-lg drop">
                  予約フォーム
                </h4>
                <p className="text-white/90 mb-4">
                  事前予約推奨（当日参加も可能）
                </p>
                <Button
                  asChild
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-full font-bold"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    予約フォームへ →
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 最終CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
            プログラミングの世界への第一歩を
            <br className="md:hidden" />
            一緒に踏み出しませんか？
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 h-auto"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎯 今すぐ無料体験に申し込む
              </a>
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-lg">
            初心者でも大丈夫！現役プログラマーが全力でサポートします
          </p>
        </div>
      </div>
    </section>
  );
}
