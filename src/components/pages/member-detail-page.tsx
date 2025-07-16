import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  getMemberDetailByName,
  teamDetailData,
} from '../../data/sections/team-detail';
import type { TeamMember } from '../../types/sections/team';

export default function MemberDetailPage() {
  const { memberName } = useParams<{ memberName: string }>();
  const member = memberName ? getMemberDetailByName(memberName) : undefined;

  // ページ遷移時に最上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50">
        <Card className="p-8 text-center">
          <CardTitle className="mb-4 text-2xl">
            メンバーが見つかりません
          </CardTitle>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const colorClasses = {
    orange: {
      bg: 'from-orange-400 to-red-500',
      border: 'border-orange-400',
      text: 'text-orange-500',
      badgeBg: 'bg-orange-500 hover:bg-orange-600',
      cardBg: 'from-orange-50 to-red-50',
    },
    blue: {
      bg: 'from-blue-400 to-indigo-500',
      border: 'border-blue-400',
      text: 'text-blue-500',
      badgeBg: 'bg-blue-500 hover:bg-blue-600',
      cardBg: 'from-blue-50 to-indigo-50',
    },
    'tomland-green': {
      bg: 'from-green-400 to-emerald-500',
      border: 'border-green-400',
      text: 'text-green-500',
      badgeBg: 'bg-green-500 hover:bg-green-600',
      cardBg: 'from-green-50 to-emerald-50',
    },
    pink: {
      bg: 'from-pink-400 to-purple-500',
      border: 'border-pink-400',
      text: 'text-pink-500',
      badgeBg: 'bg-pink-500 hover:bg-pink-600',
      cardBg: 'from-pink-50 to-purple-50',
    },
    green: {
      bg: 'from-green-400 to-emerald-500',
      border: 'border-green-400',
      text: 'text-green-500',
      badgeBg: 'bg-green-500 hover:bg-green-600',
      cardBg: 'from-green-50 to-emerald-50',
    },
    yellow: {
      bg: 'from-cyan-400 to-blue-500',
      border: 'border-cyan-400',
      text: 'text-cyan-500',
      badgeBg: 'bg-cyan-500 hover:bg-cyan-600',
      cardBg: 'from-cyan-50 to-blue-50',
    },
    purple: {
      bg: 'from-purple-400 to-violet-500',
      border: 'border-purple-400',
      text: 'text-purple-500',
      badgeBg: 'bg-purple-500 hover:bg-purple-600',
      cardBg: 'from-purple-50 to-violet-50',
    },
    red: {
      bg: 'from-red-400 to-rose-500',
      border: 'border-red-400',
      text: 'text-red-500',
      badgeBg: 'bg-red-500 hover:bg-red-600',
      cardBg: 'from-red-50 to-rose-50',
    },
    'maruno-pink': {
      bg: 'from-pink-300 to-pink-400',
      border: 'border-pink-300',
      text: 'text-pink-500',
      badgeBg: 'bg-pink-400 hover:bg-pink-500',
      cardBg: 'from-pink-50 to-pink-100',
    },
    'snowdrop-blue': {
      bg: 'from-blue-200 to-blue-300',
      border: 'border-blue-200',
      text: 'text-blue-400',
      badgeBg: 'bg-blue-300 hover:bg-blue-400',
      cardBg: 'from-blue-50 to-blue-100',
    },
    'koba-yellow': {
      bg: 'from-yellow-300 to-yellow-400',
      border: 'border-yellow-300',
      text: 'text-yellow-600',
      badgeBg: 'bg-yellow-400 hover:bg-yellow-500',
      cardBg: 'from-yellow-50 to-yellow-100',
    },
  };

  const colors =
    colorClasses[member.color as keyof typeof colorClasses] ||
    colorClasses.blue;

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

        {/* メンバープロフィール */}
        <Card className="mb-6 shadow-xl md:mb-8">
          <CardContent className="p-4 md:p-8">
            <div className="mb-6 flex flex-col items-center md:mb-8 lg:flex-row">
              <div className="mb-4 flex w-full justify-center md:mb-6 lg:mr-8 lg:mb-0 lg:w-auto lg:justify-start">
                <div
                  className={`h-28 w-28 bg-gradient-to-br md:h-32 md:w-32 ${colors.bg} flex shrink-0 items-center justify-center overflow-hidden rounded-full`}
                >
                  {member.avatar ? (
                    <img
                      alt={`${member.name}のアイコン`}
                      className="h-full w-full object-cover"
                      src={member.avatar}
                    />
                  ) : (
                    <span className="font-bold text-3xl text-white md:text-4xl">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full min-w-0 text-center lg:text-left">
                <div className="mb-3 flex flex-col gap-2 md:mb-4 md:gap-0 lg:flex-row lg:items-center">
                  <CardTitle className="mr-0 mb-2 break-words text-2xl md:text-3xl lg:mr-4 lg:mb-0">
                    {member.name === 'koba' ? 'KOBA' : member.name}
                  </CardTitle>
                  {member.badge && (
                    <Badge
                      className={`${colors.badgeBg} mx-auto w-fit px-3 py-1 text-sm md:px-4 md:py-2 md:text-lg lg:mx-0`}
                    >
                      {member.badge}
                    </Badge>
                  )}
                </div>
                <p className="mb-2 break-words font-medium text-gray-600 text-lg md:text-xl">
                  {member.title}
                </p>
                <p className="break-words text-base text-gray-500 md:text-lg">
                  {member.experience}
                </p>
              </div>
            </div>

            {/* スキル */}
            <div className="mb-6 md:mb-8">
              <h3 className="mb-3 font-bold text-lg md:mb-4 md:text-xl">
                スキル・専門分野
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge
                    className="px-2 py-1 text-xs md:px-3 md:text-sm"
                    key={skill}
                    variant="secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 詳細情報 */}
            <div className="mb-6 md:mb-8">
              <h3 className="mb-3 font-bold text-lg md:mb-4 md:text-xl">
                詳細プロフィール
              </h3>
              <div className="space-y-3 md:space-y-4">
                {member.details.map((detail, index) => (
                  <div
                    className="flex items-start rounded-lg bg-gray-50 p-3 text-gray-700 md:p-4"
                    key={`member-detail-${detail.icon}-${index}`}
                  >
                    <span
                      className={`${colors.text} mt-1 mr-3 shrink-0 text-lg md:mr-4 md:text-xl`}
                    >
                      {detail.icon}
                    </span>
                    <span className="break-words text-sm leading-relaxed md:text-lg">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* メッセージ */}
            <Card
              className={`bg-gradient-to-r ${colors.cardBg} border-2 ${colors.border}`}
            >
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-3 font-bold text-lg md:mb-4 md:text-xl">
                  {`${member.name === 'koba' ? 'KOBA' : member.name}からのメッセージ`}
                </h3>
                <p className="break-words text-gray-700 text-sm leading-relaxed md:text-lg">
                  {member.message}
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* ポートフォリオセクション */}
        {member.portfolio && member.portfolio.length > 0 && (
          <Card className="mb-6 shadow-xl md:mb-8">
            <CardContent className="p-4 md:p-8">
              <h3 className="mb-4 font-bold text-lg md:mb-6 md:text-xl">
                ポートフォリオ・実績
              </h3>

              {/* サービス */}
              {member.portfolio.some((item) => item.type === 'service') && (
                <div className="mb-6 md:mb-8">
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 md:text-base">
                      🌟 サービス
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === 'service')
                      .map((item, index) => (
                        <Card
                          className={`group overflow-hidden border-green-200 p-0 transition-shadow hover:shadow-lg ${item.url ? 'cursor-pointer' : ''}`}
                          key={`service-${item.title.slice(0, 10)}-${index}`}
                          onClick={() =>
                            item.url && window.open(item.url, '_blank')
                          }
                        >
                          {item.headerImage && (
                            <AspectRatio
                              className="overflow-hidden"
                              ratio={16 / 9}
                            >
                              <img
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.headerImage}
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="flex h-full flex-col p-4 md:p-6">
                            <div className="mb-3 flex items-start justify-between">
                              <CardTitle className="mr-2 flex-1 text-base transition-colors group-hover:text-green-600 md:text-lg">
                                {item.title}
                              </CardTitle>
                              <Badge
                                className="shrink-0 border-green-500 text-green-600 text-xs"
                                variant="outline"
                              >
                                サービス
                              </Badge>
                            </div>
                            <p className="mb-3 flex-grow text-gray-600 text-sm leading-relaxed md:text-base">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech) => (
                                <Badge
                                  className="px-2 py-1 text-xs"
                                  key={tech}
                                  variant="secondary"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* ポートフォリオ */}
              {member.portfolio.some((item) => item.type === 'portfolio') && (
                <div className="mb-6 md:mb-8">
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 md:text-base">
                      💼 ポートフォリオ
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === 'portfolio')
                      .map((item, index) => (
                        <Card
                          className={`group overflow-hidden border-blue-200 p-0 transition-shadow hover:shadow-lg ${item.url ? 'cursor-pointer' : ''}`}
                          key={`portfolio-${item.title.slice(0, 10)}-${index}`}
                          onClick={() =>
                            item.url && window.open(item.url, '_blank')
                          }
                        >
                          {item.headerImage && (
                            <AspectRatio
                              className="overflow-hidden"
                              ratio={16 / 9}
                            >
                              <img
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.headerImage}
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="flex h-full flex-col p-4 md:p-6">
                            <div className="mb-3 flex items-start justify-between">
                              <CardTitle className="mr-2 flex-1 text-base transition-colors group-hover:text-blue-600 md:text-lg">
                                {item.title}
                              </CardTitle>
                              <Badge
                                className="shrink-0 border-blue-500 text-blue-600 text-xs"
                                variant="outline"
                              >
                                ポートフォリオ
                              </Badge>
                            </div>
                            <p className="mb-3 flex-grow text-gray-600 text-sm leading-relaxed md:text-base">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech) => (
                                <Badge
                                  className="px-2 py-1 text-xs"
                                  key={tech}
                                  variant="secondary"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* プロジェクト */}
              {member.portfolio.some((item) => item.type === 'project') && (
                <div>
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600 md:text-base">
                      🚀 プロジェクト
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === 'project')
                      .map((item, index) => (
                        <Card
                          className="group overflow-hidden border-orange-200 p-0 transition-shadow hover:shadow-lg"
                          key={`project-${item.title.slice(0, 10)}-${index}`}
                        >
                          {item.headerImage && (
                            <AspectRatio
                              className="overflow-hidden"
                              ratio={16 / 9}
                            >
                              <img
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.headerImage}
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="flex h-full flex-col p-4 md:p-6">
                            <div className="mb-3 flex items-start justify-between">
                              <CardTitle className="mr-2 flex-1 text-base transition-colors group-hover:text-orange-600 md:text-lg">
                                {item.title}
                              </CardTitle>
                              <Badge
                                className="shrink-0 border-orange-500 text-orange-600 text-xs"
                                variant="outline"
                              >
                                プロジェクト
                              </Badge>
                            </div>
                            <p className="mb-3 flex-grow text-gray-600 text-sm leading-relaxed md:text-base">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech) => (
                                <Badge
                                  className="px-2 py-1 text-xs"
                                  key={tech}
                                  variant="secondary"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* 他のメンバーへのリンク */}
        <Card className="shadow-xl">
          <CardContent className="p-4 md:p-8">
            <h3 className="mb-4 text-center font-bold text-lg md:mb-6 md:text-xl">
              他のメンバーも見る
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {teamDetailData.members
                .filter((m: TeamMember) => m.name !== member.name)
                .map((baseMember: TeamMember, index) => {
                  // 各メンバーの詳細データを取得
                  const otherMember =
                    getMemberDetailByName(baseMember.name) || baseMember;
                  return (
                    <Link
                      className="block"
                      key={`other-member-${otherMember.name}-${index}`}
                      to={`/member/${otherMember.name}`}
                    >
                      <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
                        <CardContent className="flex h-full flex-col p-3 text-center md:p-4">
                          <div
                            className={`h-14 w-14 bg-gradient-to-br md:h-16 md:w-16 ${colorClasses[otherMember.color as keyof typeof colorClasses]?.bg || colorClasses.blue.bg} mx-auto mb-2 flex items-center justify-center overflow-hidden rounded-full md:mb-3`}
                          >
                            {otherMember.avatar ? (
                              <img
                                alt={`${otherMember.name}のアイコン`}
                                className="h-full w-full object-cover"
                                src={otherMember.avatar}
                              />
                            ) : (
                              <span className="font-bold text-base text-white md:text-lg">
                                {otherMember.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <p className="break-words font-medium text-xs md:text-sm">
                            {otherMember.name === 'koba'
                              ? 'KOBA'
                              : otherMember.name}
                          </p>
                          <p className="mt-1 min-h-[2.5rem] flex-grow break-words text-gray-500 text-xs leading-tight">
                            {otherMember.title}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
            </div>
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
