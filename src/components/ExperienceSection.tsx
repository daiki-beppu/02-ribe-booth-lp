import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            体験内容・サービス紹介
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Arduino LED信号機を使った本格的なプログラミング体験と
            <br className="hidden md:block" />
            現役プログラマーによる相談会をご用意しています
          </p>
        </div>

        {/* LED信号機プログラミング体験 */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="bg-orange-500 hover:bg-orange-600 mb-4">
                  🆓 無料体験（15分）
                </Badge>
                <CardTitle className="text-2xl mb-4">
                  🚦 LED信号機プログラミング体験
                </CardTitle>
                <p className="text-gray-600">
                  オリジナルキットを使って、実際にプログラムを作って動かす体験ができます
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🔧</div>
                    <CardTitle className="text-base mb-3">Step 1: キット組み立て</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Arduino基板とLEDライトの配線
                      <br />
                      プログラマーの仕事を疑似体験
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">💻</div>
                    <CardTitle className="text-base mb-3">Step 2: プログラム作成</CardTitle>
                    <p className="text-gray-600 text-sm">
                      テンプレート準備で初心者も安心
                      <br />
                      信号機の点灯パターンをプログラミング
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">⚡</div>
                    <CardTitle className="text-base mb-3">Step 3: 動かしてみる</CardTitle>
                    <p className="text-gray-600 text-sm">
                      LED信号機を実際に制御
                      <br />
                      赤→黄→緑の点灯を体験
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* サービス一覧 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* プログラム相談会 */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-blue-500 hover:bg-blue-600 mb-4 mx-auto w-fit">
                🆓 無料相談会（60分）
              </Badge>
              <CardTitle className="text-xl">
                💬 現役プログラマーへの直接相談
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  参加者8名で専門家へ直接相談可能
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  動画/書籍では学べない生きた情報を提供
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  スキルアップにつながる情報提供
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  1日3回開催（11時/14時/16時）
                </li>
              </ul>
              <Card className="bg-white/50">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>相談内容例：</strong>
                    <br />
                    プログラミング副業の始め方、転職相談、
                    <br />
                    仕事での活用方法、外注時のポイントなど
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* オリジナルキット販売 */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-green-500 hover:bg-green-600 mb-4 mx-auto w-fit">
                💰 物販（有償・希望者のみ）
              </Badge>
              <CardTitle className="text-xl">
                🎁 オリジナルキット販売
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  体験で使用したキットの持ち帰り可能
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  夏休み自由研究教材として最適
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  アフターサポート付き
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  特別版キット（高機能版）も用意
                </li>
              </ul>
              <Card className="bg-white/50">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>アフターサポート：</strong>
                    <br />
                    専用チャットでの質問対応、追加学習教材提供、
                    <br />
                    プログラミング学習コミュニティへの参加
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* 学習効果 */}
        <Card className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              期待できる学習効果
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">基本概念理解</h4>
                <p className="text-gray-600 text-sm">
                  プログラミングの
                  <br />
                  基本的な考え方を理解
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">電子工作の楽しさ</h4>
                <p className="text-gray-600 text-sm">
                  ハードウェアとソフトウェア
                  <br />
                  の連携を実感
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">論理的思考力</h4>
                <p className="text-gray-600 text-sm">
                  順序立てて考える力
                  <br />
                  問題解決スキルの向上
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">IT業界への興味</h4>
                <p className="text-gray-600 text-sm">
                  将来のキャリア選択
                  <br />
                  可能性を発見
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}