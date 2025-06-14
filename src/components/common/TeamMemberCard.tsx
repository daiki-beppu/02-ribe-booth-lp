import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TeamMember } from "../../types/sections/team";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export default function TeamMemberCard({ member, className = "" }: TeamMemberCardProps) {
  const colorClasses = {
    orange: {
      bg: "from-orange-400 to-red-500",
      border: "border-orange-400",
      text: "text-orange-500",
      badgeBg: "bg-orange-500 hover:bg-orange-600"
    },
    blue: {
      bg: "from-blue-400 to-indigo-500", 
      border: "border-blue-400",
      text: "text-blue-500",
      badgeBg: "bg-blue-500 hover:bg-blue-600"
    },
    pink: {
      bg: "from-pink-400 to-purple-500",
      border: "border-pink-400", 
      text: "text-pink-500",
      badgeBg: "bg-pink-500 hover:bg-pink-600"
    },
    green: {
      bg: "from-green-400 to-emerald-500",
      border: "border-green-400",
      text: "text-green-500", 
      badgeBg: "bg-green-500 hover:bg-green-600"
    },
    yellow: {
      bg: "from-yellow-400 to-orange-500",
      border: "border-yellow-400",
      text: "text-yellow-500",
      badgeBg: "bg-yellow-500 hover:bg-yellow-600"
    }
  };

  const colors = colorClasses[member.color as keyof typeof colorClasses] || colorClasses.blue;
  const colSpanClass = member.colSpan === 2 ? "lg:col-span-2" : "";

  return (
    <Card className={`shadow-xl ${colSpanClass} ${className}`}>
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center mr-6 overflow-hidden`}>
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
          <div>
            <div className="flex items-center mb-2">
              <CardTitle className="text-xl mr-3">{member.name}</CardTitle>
              {member.badge && (
                <Badge className={colors.badgeBg}>
                  {member.badge}
                </Badge>
              )}
            </div>
            <p className="text-gray-600 font-medium">
              {member.title}
            </p>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          {member.details.map((detail, index) => (
            <div key={index} className="flex items-start text-gray-700">
              <span className={`${colors.text} mr-3 mt-0.5`}>{detail.icon}</span>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>
        
        <div className={`bg-${member.color}-50 border-l-4 ${colors.border} p-4 rounded`}>
          <p className="text-sm text-gray-700">
            <strong>{member.isLeader ? "メッセージ：" : member.name.includes("snowdrop") ? "スーパー母ちゃん：" : "メッセージ："}</strong>
            {member.message}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}