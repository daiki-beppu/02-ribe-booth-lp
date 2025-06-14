import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConceptSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* メインコンセプト */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            プログラムを<br className="md:hidden" />
            <span className="text-blue-600">"見て・触れて・動かして"</span><br />
            学ぼう！
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            お金の勉強フェス2025で、現役プログラマーと一緒に<br className="hidden md:block" />
            Arduino LED信号機を使った本格的なプログラミング体験ができます
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/programming-image.jpg"
              alt="ArduinoのIDEでプログラミングをしている画面"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* PRポイント */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🔰</div>
              <CardTitle className="mb-2">初心者でも超簡単</CardTitle>
              <p className="text-gray-600 text-sm">
                プログラミング未経験でも大丈夫！現役プログラマーが優しく指導します
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🆓</div>
              <CardTitle className="mb-2">参加無料</CardTitle>
              <p className="text-gray-600 text-sm">
                体験も相談会も完全無料！気軽にプログラミングの世界を覗いてみましょう
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📚</div>
              <CardTitle className="mb-2">夏休みの自由研究</CardTitle>
              <p className="text-gray-600 text-sm">
                オリジナルキットで自由研究も完璧！素敵な夏休みの思い出になります
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">👨‍💻</div>
              <CardTitle className="mb-2">現役プログラマー</CardTitle>
              <p className="text-gray-600 text-sm">
                経験25年のベテランエンジニアが直接指導！生きた情報をお届けします
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ターゲット別訴求 */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              こんな方におすすめ！
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">小学生の親子</h4>
                <p className="text-gray-600 text-sm">
                  将来の稼ぐスキルを身につけたい<br />
                  夏休みの思い出作りに
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">副業を始めたい方</h4>
                <p className="text-gray-600 text-sm">
                  プログラミング副業に挑戦<br />
                  現役プログラマーに相談
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">モノづくり好き</h4>
                <p className="text-gray-600 text-sm">
                  プログラムで作品の幅を広げ<br />
                  新しい創作の可能性を発見
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">仕事でプログラム</h4>
                <p className="text-gray-600 text-sm">
                  今の仕事の悩み解決<br />
                  プログラム外注の相談
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}