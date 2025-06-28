import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft } from "lucide-react";
import { teamData, getMemberByName } from "../../data/sections/team";
import type { TeamMember } from "../../types/sections/team";

export default function MemberDetailPage() {
  const { memberName } = useParams<{ memberName: string }>();
  const member = memberName ? getMemberByName(memberName) : undefined;

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardTitle className="text-2xl mb-4">
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
      bg: "from-orange-400 to-red-500",
      border: "border-orange-400",
      text: "text-orange-500",
      badgeBg: "bg-orange-500 hover:bg-orange-600",
      cardBg: "from-orange-50 to-red-50",
    },
    blue: {
      bg: "from-blue-400 to-indigo-500",
      border: "border-blue-400",
      text: "text-blue-500",
      badgeBg: "bg-blue-500 hover:bg-blue-600",
      cardBg: "from-blue-50 to-indigo-50",
    },
    pink: {
      bg: "from-pink-400 to-purple-500",
      border: "border-pink-400",
      text: "text-pink-500",
      badgeBg: "bg-pink-500 hover:bg-pink-600",
      cardBg: "from-pink-50 to-purple-50",
    },
    green: {
      bg: "from-green-400 to-emerald-500",
      border: "border-green-400",
      text: "text-green-500",
      badgeBg: "bg-green-500 hover:bg-green-600",
      cardBg: "from-green-50 to-emerald-50",
    },
    yellow: {
      bg: "from-cyan-400 to-blue-500",
      border: "border-cyan-400",
      text: "text-cyan-500",
      badgeBg: "bg-cyan-500 hover:bg-cyan-600",
      cardBg: "from-cyan-50 to-blue-50",
    },
    purple: {
      bg: "from-purple-400 to-violet-500",
      border: "border-purple-400",
      text: "text-purple-500",
      badgeBg: "bg-purple-500 hover:bg-purple-600",
      cardBg: "from-purple-50 to-violet-50",
    },
    red: {
      bg: "from-red-400 to-rose-500",
      border: "border-red-400",
      text: "text-red-500",
      badgeBg: "bg-red-500 hover:bg-red-600",
      cardBg: "from-red-50 to-rose-50",
    },
  };

  const colors =
    colorClasses[member.color as keyof typeof colorClasses] ||
    colorClasses.blue;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* ヘッダー分のスペースを確保（デスクトップのみ） */}
      <div className="h-16 md:block hidden"></div>
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* ナビゲーション - デスクトップのみ */}
        <div className="mb-6 md:mb-8 hidden md:block">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
        </div>

        {/* メンバープロフィール */}
        <Card className="shadow-xl mb-6 md:mb-8">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col lg:flex-row items-center mb-6 md:mb-8">
              <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-4 md:mb-6 lg:mb-0 lg:mr-8">
                <div
                  className={`w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center overflow-hidden shrink-0`}
                >
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={`${member.name}のアイコン`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl text-white font-bold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-center lg:text-left w-full min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-center mb-3 md:mb-4 gap-2 md:gap-0">
                  <CardTitle className="text-2xl md:text-3xl mr-0 lg:mr-4 mb-2 lg:mb-0 break-words">
                    {member.name}
                  </CardTitle>
                  {member.badge && (
                    <Badge
                      className={`${colors.badgeBg} text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 mx-auto lg:mx-0 w-fit`}
                    >
                      {member.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-lg md:text-xl text-gray-600 font-medium mb-2 break-words">
                  {member.title}
                </p>
                <p className="text-base md:text-lg text-gray-500 break-words">
                  {member.experience}
                </p>
              </div>
            </div>

            {/* スキル */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                スキル・専門分野
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs md:text-sm px-2 md:px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 詳細情報 */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                詳細プロフィール
              </h3>
              <div className="space-y-3 md:space-y-4">
                {member.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start text-gray-700 bg-gray-50 p-3 md:p-4 rounded-lg"
                  >
                    <span
                      className={`${colors.text} mr-3 md:mr-4 mt-1 text-lg md:text-xl shrink-0`}
                    >
                      {detail.icon}
                    </span>
                    <span className="text-sm md:text-lg leading-relaxed break-words">
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
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {`${member.name}からのメッセージ`}
                </h3>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed break-words">
                  {member.message}
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* ポートフォリオセクション */}
        {member.portfolio && member.portfolio.length > 0 && (
          <Card className="shadow-xl mb-6 md:mb-8">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                ポートフォリオ・実績
              </h3>

              {/* サービス */}
              {member.portfolio.some((item) => item.type === "service") && (
                <div className="mb-6 md:mb-8">
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-4 py-2">
                      🌟 サービス
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === "service")
                      .map((item, index) => (
                        <Card
                          key={index}
                          className={`hover:shadow-lg transition-shadow group border-green-200 overflow-hidden p-0 ${item.url ? "cursor-pointer" : ""}`}
                          onClick={() =>
                            item.url && window.open(item.url, "_blank")
                          }
                        >
                          {item.headerImage && (
                            <AspectRatio
                              ratio={16 / 9}
                              className="overflow-hidden"
                            >
                              <img
                                src={item.headerImage}
                                alt={item.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="p-4 md:p-6">
                            <div className="flex items-start justify-between mb-3">
                              <CardTitle className="text-base md:text-lg group-hover:text-green-600 transition-colors flex-1 mr-2">
                                {item.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="border-green-500 text-green-600 text-xs shrink-0"
                              >
                                サービス
                              </Badge>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs px-2 py-1"
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
              {member.portfolio.some((item) => item.type === "portfolio") && (
                <div className="mb-6 md:mb-8">
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base px-4 py-2">
                      💼 ポートフォリオ
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === "portfolio")
                      .map((item, index) => (
                        <Card
                          key={index}
                          className={`hover:shadow-lg transition-shadow group border-blue-200 overflow-hidden p-0 ${item.url ? "cursor-pointer" : ""}`}
                          onClick={() =>
                            item.url && window.open(item.url, "_blank")
                          }
                        >
                          {item.headerImage && (
                            <AspectRatio
                              ratio={16 / 9}
                              className="overflow-hidden"
                            >
                              <img
                                src={item.headerImage}
                                alt={item.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="p-4 md:p-6">
                            <div className="flex items-start justify-between mb-3">
                              <CardTitle className="text-base md:text-lg group-hover:text-blue-600 transition-colors flex-1 mr-2">
                                {item.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="border-blue-500 text-blue-600 text-xs shrink-0"
                              >
                                ポートフォリオ
                              </Badge>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs px-2 py-1"
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
              {member.portfolio.some((item) => item.type === "project") && (
                <div>
                  <div className="mb-3 md:mb-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2">
                      🚀 プロジェクト
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {member.portfolio
                      .filter((item) => item.type === "project")
                      .map((item, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-lg transition-shadow group border-orange-200 overflow-hidden p-0"
                        >
                          {item.headerImage && (
                            <AspectRatio
                              ratio={16 / 9}
                              className="overflow-hidden"
                            >
                              <img
                                src={item.headerImage}
                                alt={item.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </AspectRatio>
                          )}
                          <CardContent className="p-4 md:p-6">
                            <div className="flex items-start justify-between mb-3">
                              <CardTitle className="text-base md:text-lg group-hover:text-orange-600 transition-colors flex-1 mr-2">
                                {item.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="border-orange-500 text-orange-600 text-xs shrink-0"
                              >
                                プロジェクト
                              </Badge>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs px-2 py-1"
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
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">
              他のメンバーも見る
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {teamData.members
                .filter((m: TeamMember) => m.name !== member.name)
                .map((otherMember: TeamMember, index) => (
                  <Link
                    key={index}
                    to={`/member/${otherMember.name.toLowerCase()}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-3 md:p-4 text-center">
                        <div
                          className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${colorClasses[otherMember.color as keyof typeof colorClasses]?.bg || colorClasses.blue.bg} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 overflow-hidden`}
                        >
                          {otherMember.avatar ? (
                            <img
                              src={otherMember.avatar}
                              alt={`${otherMember.name}のアイコン`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-base md:text-lg text-white font-bold">
                              {otherMember.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <p className="font-medium text-xs md:text-sm break-words">
                          {otherMember.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 break-words leading-tight">
                          {otherMember.title}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* スマホビュー用のホームに戻るボタン */}
        <div className="md:hidden mt-6 pb-6">
          <Link to="/">
            <Button variant="outline" className="w-full py-4 text-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
