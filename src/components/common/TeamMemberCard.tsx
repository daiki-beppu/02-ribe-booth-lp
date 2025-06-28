import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "../../types/sections/team";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export default function TeamMemberCard({
  member,
  className = "",
}: TeamMemberCardProps) {
  const colorClasses = {
    orange: {
      bg: "from-orange-400 to-red-500",
      border: "border-orange-400",
      text: "text-orange-500",
      badgeBg: "bg-orange-500 hover:bg-orange-600",
    },
    blue: {
      bg: "from-blue-400 to-indigo-500",
      border: "border-blue-400",
      text: "text-blue-500",
      badgeBg: "bg-blue-500 hover:bg-blue-600",
    },
    pink: {
      bg: "from-pink-400 to-purple-500",
      border: "border-pink-400",
      text: "text-pink-500",
      badgeBg: "bg-pink-500 hover:bg-pink-600",
    },
    green: {
      bg: "from-green-400 to-emerald-500",
      border: "border-green-400",
      text: "text-green-500",
      badgeBg: "bg-green-500 hover:bg-green-600",
    },
    yellow: {
      bg: "from-cyan-400 to-blue-500",
      border: "border-cyan-400",
      text: "text-cyan-500",
      badgeBg: "bg-cyan-500 hover:bg-cyan-600",
    },
    purple: {
      bg: "from-purple-400 to-violet-500",
      border: "border-purple-400",
      text: "text-purple-500",
      badgeBg: "bg-purple-500 hover:bg-purple-600",
    },
    red: {
      bg: "from-red-400 to-rose-500",
      border: "border-red-400",
      text: "text-red-500",
      badgeBg: "bg-red-500 hover:bg-red-600",
    },
  };

  const colors =
    colorClasses[member.color as keyof typeof colorClasses] ||
    colorClasses.blue;
  const colSpanClass = member.colSpan === 2 ? "lg:col-span-2" : "";

  return (
    <Card className={`shadow-xl ${colSpanClass} ${className}`}>
      <CardContent className="p-8">
        <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center mx-auto sm:mx-0 sm:mr-6 overflow-hidden shrink-0`}
          >
            {member.avatar ? (
              <img
                src={member.avatar}
                alt={`${member.name}のアイコン`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl text-white font-bold">
                {member.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
                <CardTitle className="text-lg sm:text-xl">
                  {member.name === "koba" ? "KOBA" : member.name}
                </CardTitle>
                {member.badge && (
                  <Badge className={`${colors.badgeBg} mx-auto sm:mx-0 w-fit`}>
                    {member.badge}
                  </Badge>
                )}
              </div>
              {/* デスクトップビューのみボタンを表示 */}
              <div className="hidden sm:block">
                <Link to={`/member/${member.name}`}>
                  <Button className={`${colors.badgeBg} px-4 py-2`}>
                    詳細プロフィールを見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <p className="text-gray-600 font-medium text-center sm:text-left text-sm sm:text-base">
              {member.title}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {member.details.map((detail, index) => (
            <div key={index} className="flex items-start text-gray-700">
              <span className={`${colors.text} mr-3 mt-0.5`}>
                {detail.icon}
              </span>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>

        <div
          className={`bg-${member.color}-50 border-l-4 ${colors.border} p-4 rounded mb-4`}
        >
          <p className="text-sm text-gray-700">
            <strong>メッセージ：</strong>
            {member.message}
          </p>
        </div>

        {/* スマホビューのみボタンを表示 */}
        <div className="sm:hidden">
          <Link to={`/member/${member.name}`}>
            <Button className={`${colors.badgeBg} w-full py-3`}>
              詳細プロフィールを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
