import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            現役プログラマー陣が直接指導
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            異業種の現役専門家が集結！動画や書籍では学べない
            <br className="hidden md:block" />
            生きた情報とスキルアップのコツをお伝えします
          </p>
        </div>

        {/* 全メンバー紹介 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* トムランド */}
          <Card className="shadow-xl lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl text-white font-bold">T</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <CardTitle className="text-xl mr-3">トムランド</CardTitle>
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      リーダー
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-medium">
                    投資おたくエンジニア
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start text-gray-700">
                  <span className="text-orange-500 mr-3 mt-0.5">💻</span>
                  <span>本業は現役プログラマー（経験25年）</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-orange-500 mr-3 mt-0.5">📱</span>
                  <span>
                    副業実績：株式財務分析アプリ・農業支援システム・プログラム教育で収益化
                  </span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-orange-500 mr-3 mt-0.5">🤖</span>
                  <span>現在LLM/AIサービス開発中</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-orange-500 mr-3 mt-0.5">💰</span>
                  <span>高配当株投資で資産4桁＋配当3桁達成</span>
                </div>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>メッセージ：</strong>
                  フェスのプログラム体験会/相談会を通じて学びの楽しさを伝えたいです！
                </p>
              </div>
            </CardContent>
          </Card>

          {/* まるの */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl text-white font-bold">M</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <CardTitle className="text-xl mr-3">まるの</CardTitle>
                    <Badge className="bg-blue-500 hover:bg-blue-600">
                      サブリーダー
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-medium">家電エンジニア</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-3 mt-0.5">💻</span>
                  <span>家電エンジニア、現役プログラマー</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-3 mt-0.5">🖨️</span>
                  <span>副業：3Dプリンタ ハンドメイド</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-blue-500 mr-3 mt-0.5">🏠</span>
                  <span>
                    ご家庭にある洗濯機、充電器などの中身をプログラミングで作っています
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>メッセージ：</strong>
                  プログラミングで実物が動く楽しさを体験いただきたいです。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ももちこ */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl text-white font-bold">も</span>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">ももちこ</CardTitle>
                  <p className="text-gray-600 font-medium">
                    駆け出しプログラマー
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start text-gray-700">
                  <span className="text-pink-500 mr-3 mt-0.5">💻</span>
                  <span>新しいテクノロジーが大好きな駆け出しプログラマー</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-pink-500 mr-3 mt-0.5">🚀</span>
                  <span>
                    2024年10月に転職し、自由な働き方と充実した毎日を実現
                  </span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-pink-500 mr-3 mt-0.5">🌐</span>
                  <span>
                    現在はWebアプリ開発に携わりつつ、パーソナルAIの開発に挑戦中
                  </span>
                </div>
              </div>
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>メッセージ：</strong>
                  プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！
                </p>
              </div>
            </CardContent>
          </Card>

          {/* KOBA */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl text-white font-bold">K</span>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">KOBA</CardTitle>
                  <p className="text-gray-600 font-medium">
                    記憶力🧠としらべ魔👸の変態エンジニア
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 mt-0.5">💻</span>
                  <span>本業は機械設計エンジニア</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 mt-0.5">🛠️</span>
                  <span>VBAを使った社内ツール開発中</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 mt-0.5">📚</span>
                  <span>管理職に昇進したのでマネジメントも勉強中</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 mt-0.5">😅</span>
                  <span>
                    小学校の通知表には「情緒不安定」と書かれちゃうほど、落ち着きがない
                  </span>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>メッセージ：</strong>
                  どんな変態エンジニアかを知りたい方は、どしどし話し掛けてくださいね！
                </p>
              </div>
            </CardContent>
          </Card>

          {/* snowdrop */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl text-white font-bold">S</span>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">snowdrop</CardTitle>
                  <p className="text-gray-600 font-medium">
                    ものづくり大好きなかごバッグ作家
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start text-gray-700">
                  <span className="text-yellow-500 mr-3 mt-0.5">👩‍👦‍👦</span>
                  <span>
                    男子2人を育てるシングルマザーで、会社員・家事・副業をこなすスーパー母ちゃん！
                  </span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-yellow-500 mr-3 mt-0.5">🔧</span>
                  <span>2024年6月に建築設計から機械設計へ転職</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-yellow-500 mr-3 mt-0.5">💻</span>
                  <span>現在は機械設計エンジニアとして活躍中</span>
                </div>
                <div className="flex items-start text-gray-700">
                  <span className="text-yellow-500 mr-3 mt-0.5">🎨</span>
                  <span>副業ではハンドメイド作家としても活動中</span>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>スーパー母ちゃん：</strong>
                  多彩な活動を通じて、ものづくりの楽しさをお伝えします！
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* リベシティメッセージ */}
        <Card className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardContent className="p-8 text-center">
            <CardTitle className="text-2xl mb-4">
              リベシティの魅力とつながる楽しさを共有したい！
            </CardTitle>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              日常生活では絶対に出会えない人と知り合い、一緒に何かを成し遂げる仲間との出会いを大切にしています。
              <br />
              プログラミングを通じて、新しいつながりと可能性を一緒に見つけましょう！
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
