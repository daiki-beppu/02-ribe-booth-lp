import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              🔰はじめよう！プログラムの世界！🆓
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-3 text-white">イベント情報</h4>
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm">
                      お金の勉強フェス2025
                    </p>
                    <p className="text-gray-300 text-sm">2025年8月9日〜11日</p>
                    <p className="text-gray-300 text-sm">
                      幕張メッセ ブースM-14
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-3 text-white">サービス</h4>
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm">
                      無料プログラミング体験
                    </p>
                    <p className="text-gray-300 text-sm">
                      現役プログラマー相談会
                    </p>
                    <p className="text-gray-300 text-sm">
                      オリジナルキット販売
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700/50 border-gray-600">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-3 text-white">お問い合わせ</h4>
                  <div className="space-y-1">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform"
                      className="text-smt text-blue-400 hover:underline"
                    >
                      予約フォームはこちら
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-6 bg-gray-600" />

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                リベシティの魅力とつながる楽しさを共有したい！
                <br />
                現役プログラマー陣があなたの第一歩を全力でサポートします。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}
