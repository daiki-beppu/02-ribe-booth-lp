import { ArrowDown, ArrowLeft, Clock, Gift, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScheduleDialog } from '@/components/schedule/schedule-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { boothData } from '../../data/sections/booth';
import { renderResponsiveText } from '../../utils/responsive-text';

const LIMITED_REGEX = /【限定(\d+)個】/;

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
                {boothData.headerIcon}
              </div>
            </div>
            {renderResponsiveText(
              boothData.title,
              'mb-3 text-2xl md:text-3xl font-bold',
              'h1'
            )}
            {renderResponsiveText(
              boothData.description,
              'text-gray-600 text-lg md:text-xl',
              'p'
            )}
          </CardContent>
        </Card>

        {/* プログラム体験セクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-2xl text-white">
                  {boothData.sections.experience.icon}
                </div>
                <div>
                  {renderResponsiveText(
                    boothData.sections.experience.title,
                    'font-bold text-xl md:text-2xl',
                    'h2'
                  )}
                  {renderResponsiveText(
                    boothData.sections.experience.description,
                    'text-gray-600',
                    'p'
                  )}
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
                        <p className="text-gray-600 text-xs">事前予約推奨</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 体験のポイント */}
            {boothData.activities[0].points && (
              <div className="mb-6 space-y-4">
                <h3 className="mb-4 font-bold text-lg md:text-xl">
                  体験のポイント
                </h3>
                {boothData.activities[0].points.map((point, index) => (
                  <div
                    className={`rounded-lg border-2 border-${point.color}-200 bg-${point.color}-50 p-4`}
                    key={`point-${point.icon}-${index}`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-${point.color}-500 text-white`}
                      >
                        {point.icon}
                      </div>
                      <div>
                        {renderResponsiveText(
                          point.title,
                          'mb-2 font-bold text-base text-black',
                          'h4'
                        )}
                        {renderResponsiveText(
                          point.description,
                          `text-${point.color}-700 text-sm`,
                          'p'
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ステップフロー図 */}
            {boothData.activities[0].steps && (
              <div className="mb-6">
                <h3 className="mb-4 font-bold text-lg md:text-xl">
                  体験の流れ
                </h3>
                <div className="space-y-4">
                  {boothData.activities[0].steps.map((step, index) => (
                    <div
                      className="relative"
                      key={`step-${step.icon}-${index}`}
                    >
                      <div className="flex items-center">
                        <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                          <span className="font-bold text-lg leading-none">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                            {renderResponsiveText(
                              step.title,
                              'mb-2 font-bold text-black text-lg',
                              'h4'
                            )}
                            {renderResponsiveText(
                              step.description,
                              'text-gray-700 text-sm',
                              'p'
                            )}
                          </div>
                        </div>
                      </div>
                      {/* 矢印 */}
                      {index <
                        (boothData.activities[0].steps?.length ?? 0) - 1 && (
                        <div className="my-2 flex justify-center">
                          <ArrowDown className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                {renderResponsiveText(
                  boothData.consultation.title,
                  'font-bold text-xl md:text-2xl',
                  'h2'
                )}
                {renderResponsiveText(
                  boothData.consultation.description,
                  'text-gray-600',
                  'p'
                )}
              </div>
            </div>

            {/* 開催情報カード */}
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                        30分間・1日6回開催
                      </p>
                      <p className="text-gray-600 text-xs">事前予約推奨</p>
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
                  </div>
                </div>
              </div>
            </div>

            {/* 相談会詳細 */}
            <div className="space-y-6">
              <h3 className="mb-4 font-bold text-lg md:text-xl">
                エンジニア相談会
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {boothData.consultation.targets.map((target) => {
                  const getTargetColor = (id: string) => {
                    switch (id) {
                      case 'A':
                        return {
                          bg: 'bg-emerald-50',
                          border: 'border-emerald-200',
                          text: 'text-emerald-800',
                          accent: 'bg-emerald-500',
                        };
                      case 'B':
                        return {
                          bg: 'bg-orange-50',
                          border: 'border-orange-200',
                          text: 'text-orange-800',
                          accent: 'bg-orange-500',
                        };
                      case 'C':
                        return {
                          bg: 'bg-pink-50',
                          border: 'border-pink-200',
                          text: 'text-pink-800',
                          accent: 'bg-pink-500',
                        };
                      default:
                        return {
                          bg: 'bg-gray-50',
                          border: 'border-gray-200',
                          text: 'text-gray-800',
                          accent: 'bg-gray-500',
                        };
                    }
                  };

                  const colors = getTargetColor(target.id);

                  return (
                    <Card
                      className={`${colors.border} ${colors.bg} border-2`}
                      key={`consultation-target-${target.id}`}
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="mb-4 flex items-center">
                          <div
                            className={`mr-3 flex h-10 w-10 items-center justify-center rounded-full ${colors.accent} font-bold text-white text-xl`}
                          >
                            {target.id}
                          </div>
                          <div>
                            {renderResponsiveText(
                              target.label,
                              `text-lg ${colors.text}`,
                              'h3'
                            )}
                            {renderResponsiveText(
                              target.target,
                              `text-sm ${colors.text}`,
                              'p'
                            )}
                          </div>
                        </div>

                        {renderResponsiveText(
                          target.description,
                          'mb-4 text-gray-700 text-sm',
                          'p'
                        )}

                        <div className="space-y-2">
                          <h4 className="font-bold text-gray-800 text-sm">
                            相談トピック:
                          </h4>
                          {target.topics.map((topic) => (
                            <div
                              className="flex items-start"
                              key={`topic-${target.id}-${topic}`}
                            >
                              <span className={`mr-2 ${colors.text} text-sm`}>
                                •
                              </span>
                              <span className="text-gray-700 text-sm">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 物販セクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-2xl text-white">
                {boothData.sections.products.icon}
              </div>
              <div>
                {renderResponsiveText(
                  boothData.sections.products.title,
                  'font-bold text-xl md:text-2xl',
                  'h2'
                )}
                {renderResponsiveText(
                  boothData.sections.products.description,
                  'text-gray-600',
                  'p'
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {boothData.products.map((product, index) => {
                const getProductColor = (idx: number) => {
                  const colors = [
                    {
                      bg: 'bg-green-50',
                      border: 'border-green-200',
                      badge: 'bg-green-500 hover:bg-green-600',
                      dot: 'text-green-500',
                    },
                    {
                      bg: 'bg-blue-50',
                      border: 'border-blue-200',
                      badge: 'bg-blue-500 hover:bg-blue-600',
                      dot: 'text-blue-500',
                    },
                    {
                      bg: 'bg-purple-50',
                      border: 'border-purple-200',
                      badge: 'bg-purple-500 hover:bg-purple-600',
                      dot: 'text-purple-500',
                    },
                    {
                      bg: 'bg-yellow-50',
                      border: 'border-yellow-200',
                      badge: 'bg-yellow-500 hover:bg-yellow-600',
                      dot: 'text-yellow-600',
                    },
                  ];
                  return colors[idx % colors.length];
                };
                const colors = getProductColor(index);

                // 商品名から限定数部分を分離して色付け
                const nameMatch = LIMITED_REGEX.exec(product.name);
                const renderProductName = () => {
                  if (nameMatch) {
                    const [fullMatch] = nameMatch;
                    const beforeLimited = product.name.substring(
                      0,
                      product.name.indexOf(fullMatch)
                    );
                    const afterLimited = product.name.substring(
                      product.name.indexOf(fullMatch) + fullMatch.length
                    );

                    return (
                      <>
                        <span className="font-extrabold text-red-600">
                          {fullMatch}
                        </span>
                        {beforeLimited}
                        {afterLimited}
                      </>
                    );
                  }
                  return product.name;
                };

                return (
                  <Card
                    className={`${colors.border} ${colors.bg}`}
                    key={`product-${product.name}`}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <CardTitle className="text-lg md:text-xl">
                          {renderProductName()}
                        </CardTitle>
                        <div className="flex gap-2">
                          {product.description.includes('【限定') && (
                            <Badge className="bg-red-500 text-white hover:bg-red-600">
                              {LIMITED_REGEX.exec(product.description)?.[1]
                                ? `限定${
                                    LIMITED_REGEX.exec(product.description)?.[1]
                                  }`
                                : '限定'}
                            </Badge>
                          )}
                          <Badge className={`${colors.badge} text-white`}>
                            {product.price}
                          </Badge>
                        </div>
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
                            <span className={`mr-2 ${colors.dot} text-sm`}>
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
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 大交流会イベントセクション */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-2xl text-white">
                {boothData.sections.events.icon}
              </div>
              <div>
                {renderResponsiveText(
                  boothData.sections.events.title,
                  'font-bold text-xl md:text-2xl',
                  'h2'
                )}
                {renderResponsiveText(
                  boothData.sections.events.description,
                  'text-gray-600',
                  'p'
                )}
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
