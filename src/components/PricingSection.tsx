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
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    LED信号機プログラミング体験
                  </h4>
                  <p className="text-gray-600 text-sm">
                    15分間の本格的な体験（順次案内）
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    現役プログラマーへの相談会
                  </h4>
                  <p className="text-gray-600 text-sm">
                    30分間の直接相談（1日3回開催）
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    体験証明書・学習資料
                  </h4>
                  <p className="text-gray-600 text-sm">
                    夏休みの思い出として持ち帰り可能
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    アフターサポートチャット招待
                  </h4>
                  <p className="text-gray-600 text-sm">継続的な学習サポート</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 有償サービス */}
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-lg py-2 px-6 mb-4 mx-auto w-fit">
                💰 有償オプション
              </Badge>
              <CardTitle className="text-2xl">希望者のみ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">●</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    オリジナルキット持ち帰り
                  </h4>
                  <p className="text-gray-600 text-sm">
                    体験で使用したキットをお持ち帰り
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">●</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    特別版キット（高機能版）
                  </h4>
                  <p className="text-gray-600 text-sm">
                    より高度な機能を搭載したバージョン
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">●</span>
                <div>
                  <h4 className="font-bold text-gray-800">
                    個別指導セッション
                  </h4>
                  <p className="text-gray-600 text-sm">
                    有償版サポート（5000円/H）
                  </p>
                </div>
              </div>
              <Card className="bg-blue-50 border-blue-200 mt-6">
                <CardContent className="p-4">
                  <p className="text-blue-800 text-sm text-center font-medium">
                    価格は希望者の方にのみ詳細をご案内いたします
                  </p>
                </CardContent>
              </Card>
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
