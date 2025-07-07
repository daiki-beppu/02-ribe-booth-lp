import { ArrowDown, ArrowLeft, Clock, Gift, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScheduleDialog } from '@/components/schedule/schedule-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { boothData } from '../../data/sections/booth';

export default function BoothDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* ヘッダー分のスペースを確保（デスクトップのみ） */}
      <div className="hidden h-16 md:block" />
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* ナビゲーション - デスクトップのみ */}
        <div className="mb-6 hidden md:mb-8 md:block">
          <Link to="/">
            <Button className="mb-4" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
        </div>

        {/* ヘッダーセクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 text-center md:p-8">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-4xl text-white md:h-24 md:w-24 md:text-5xl">
                🎪
              </div>
            </div>
            <CardTitle className="mb-3 text-2xl md:text-3xl">
              {boothData.title}
            </CardTitle>
            <p className="text-gray-600 text-lg md:text-xl">
              {boothData.description}
            </p>
          </CardContent>
        </Card>

        {/* プログラム体験セクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-2xl text-white">
                  💻
                </div>
                <div>
                  <h2 className="font-bold text-xl md:text-2xl">
                    プログラム体験
                  </h2>
                  <p className="text-gray-600">
                    実際にプログラミングを体験できます
                  </p>
                </div>
              </div>

              {/* 開催情報カード */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100 p-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white text-xl">
                        ⏰
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-lg">
                          開催スケジュール
                        </h3>
                        <p className="font-semibold text-gray-800 text-sm">
                          30分間・1日9回開催
                        </p>
                        <p className="text-gray-600 text-xs">事前予約制</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <ScheduleDialog
                      buttonText="体験会の詳細スケジュール"
                      title="プログラム体験スケジュール"
                      type="experience"
                    />
                  </div>
                </div>

                <div className="rounded-lg border-2 border-green-300 bg-gradient-to-r from-green-50 to-green-100 p-4 shadow-md">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white text-xl">
                      💰
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-lg">参加費用</h3>
                      <p className="font-bold text-gray-800 text-lg">
                        完全無料
                      </p>
                      <p className="text-gray-600 text-xs">
                        材料費・指導料込み
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 体験のポイント */}
            <div className="mb-6 space-y-4">
              <h3 className="mb-4 font-bold text-lg md:text-xl">
                体験のポイント
              </h3>

              {/* 自由研究対応 */}
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    📝
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-base text-black">
                      自由研究として提出可能
                    </h4>
                    <p className="text-emerald-700 text-sm">
                      夏休みの宿題にそのまま使える実用的な成果物が完成します。レポート作成のサポートも充実しています。
                    </p>
                  </div>
                </div>
              </div>

              {/* プロ仕様の教材 */}
              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    🔧
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-base text-black">
                      現役エンジニア設計の本格教材
                    </h4>
                    <p className="text-orange-700 text-sm">
                      製造メーカーで25年の経験を持つ現役エンジニアチームが設計した、遊びながら本物の力が身につく教材です。
                    </p>
                  </div>
                </div>
              </div>

              {/* 親子体験 */}
              <div className="rounded-lg border-2 border-pink-200 bg-pink-50 p-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 text-white">
                    👨‍👩‍👧‍👦
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-base text-black">
                      親子で一緒に楽しめる
                    </h4>
                    <p className="text-pink-700 text-sm">
                      お子様だけでなく、親御さんも一緒に参加できます。家族みんなでプログラミングの楽しさを体験してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ステップフロー図 */}
            <div className="mb-6">
              <h3 className="mb-4 font-bold text-lg md:text-xl">体験の流れ</h3>
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <span className="font-bold text-lg leading-none">1</span>
                    </div>
                    <div className="flex-grow">
                      <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                        <h4 className="mb-2 font-bold text-black text-lg">
                          🔧 Arduino基板とLEDライトの配線
                        </h4>
                        <p className="text-gray-700 text-sm">
                          自由研究の実験装置完成！現役エンジニアが丁寧にサポートします
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 矢印 */}
                  <div className="my-2 flex justify-center">
                    <ArrowDown className="h-6 w-6 text-gray-400" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <span className="font-bold text-lg leading-none">2</span>
                    </div>
                    <div className="flex-grow">
                      <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                        <h4 className="mb-2 font-bold text-black text-lg">
                          💻 テンプレート準備で初心者も安心
                        </h4>
                        <p className="text-gray-700 text-sm">
                          信号機の制御ロジックを学習。AI活用でプログラミングが簡単に！
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 矢印 */}
                  <div className="my-2 flex justify-center">
                    <ArrowDown className="h-6 w-6 text-gray-400" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <span className="font-bold text-lg leading-none">3</span>
                    </div>
                    <div className="flex-grow">
                      <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                        <h4 className="mb-2 font-bold text-black text-lg">
                          🚦 LED信号機を実際に制御
                        </h4>
                        <p className="text-gray-700 text-sm">
                          自由研究レポートの材料が完成！そのまま提出できる実用的な成果物
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* プログラム相談会セクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-2xl text-white">
                🤝
              </div>
              <div>
                <h2 className="font-bold text-xl md:text-2xl">
                  {boothData.consultation.title}
                </h2>
                <p className="text-gray-600">
                  {boothData.consultation.description}
                </p>
              </div>
            </div>

            {/* 開催情報カード */}
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border-2 border-green-300 bg-gradient-to-r from-green-50 to-green-100 p-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white text-xl">
                      ⏰
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-lg">
                        開催スケジュール
                      </h3>
                      <p className="font-semibold text-gray-800 text-sm">
                        30分間・1日6回開催
                      </p>
                      <p className="text-gray-600 text-xs">事前予約制</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <ScheduleDialog
                    buttonText="相談会の詳細スケジュール"
                    title="相談会スケジュール"
                    type="consultation"
                  />
                </div>
              </div>

              <div className="rounded-lg border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 shadow-md">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white text-xl">
                    💰
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg">参加費用</h3>
                    <p className="font-bold text-gray-800 text-lg">完全無料</p>
                    <p className="text-gray-600 text-xs">
                      個別相談・質問無制限
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {boothData.consultation.features.map((feature) => (
                <div
                  className="flex items-center rounded-lg bg-green-50 p-3"
                  key={`consultation-feature-${feature}`}
                >
                  <span className="mr-3 text-green-500 text-lg">📋</span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 物販セクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-2xl text-white">
                🛍️
              </div>
              <div>
                <h2 className="font-bold text-xl md:text-2xl">物販</h2>
                <p className="text-gray-600">プログラミング関連グッズを販売</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {boothData.products.map((product) => (
                <Card
                  className="border-orange-200 bg-orange-50"
                  key={`product-${product.name}`}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <CardTitle className="text-lg md:text-xl">
                        {product.name}
                      </CardTitle>
                      <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                        {product.price}
                      </Badge>
                    </div>
                    <p className="mb-4 text-gray-600 text-sm md:text-base">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.map((feature) => (
                        <div
                          className="flex items-start"
                          key={`product-feature-${product.name}-${feature}`}
                        >
                          <span className="mr-2 text-orange-500 text-sm">
                            •
                          </span>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 大交流会イベントセクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-2xl text-white">
                🎮
              </div>
              <div>
                <h2 className="font-bold text-xl md:text-2xl">
                  大交流会イベント
                </h2>
                <p className="text-gray-600">
                  ゲーム大会で盛り上がりましょう！
                </p>
              </div>
            </div>

            {boothData.events.map((event) => (
              <div key={`event-${event.name}`}>
                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-4 flex items-center">
                      <Trophy className="mr-3 h-6 w-6 text-purple-500" />
                      <CardTitle className="text-lg md:text-xl">
                        {event.name}
                      </CardTitle>
                    </div>
                    <p className="mb-4 text-gray-700 text-sm md:text-base">
                      {event.description}
                    </p>

                    {event.schedule && (
                      <div className="mb-4 flex items-center rounded-lg bg-purple-100 p-3">
                        <Clock className="mr-2 h-4 w-4 text-purple-600" />
                        <span className="text-purple-700 text-sm">
                          開催時間: {event.schedule}
                        </span>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="mb-2 flex items-center font-bold text-base">
                        <Gift className="mr-2 h-4 w-4 text-purple-600" />
                        景品
                      </h4>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {event.prizes.map((prize) => (
                          <div
                            className="flex items-center rounded-lg bg-purple-100 p-2"
                            key={`prize-${event.name}-${prize}`}
                          >
                            <span className="mr-2 text-purple-500">🏆</span>
                            <span className="text-purple-700 text-sm">
                              {prize}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="mb-4" />

                    <div>
                      <h4 className="mb-2 flex items-center font-bold text-base">
                        <Users className="mr-2 h-4 w-4 text-purple-600" />
                        参加ルール
                      </h4>
                      <div className="space-y-2">
                        {event.rules.map((rule) => (
                          <div
                            className="flex items-start"
                            key={`rule-${event.name}-${rule}`}
                          >
                            <span className="mr-2 text-purple-500 text-sm">
                              •
                            </span>
                            <span className="text-gray-700 text-sm">
                              {rule}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* スマホビュー用のホームに戻るボタン */}
        <div className="mt-6 pb-6 md:hidden">
          <Link to="/">
            <Button className="w-full py-4 text-lg" variant="outline">
              <ArrowLeft className="mr-2 h-5 w-5" />
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
