import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { TeamMember } from '../../types/sections/team';
import { renderResponsiveText } from '../../utils/responsive-text';

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

function getBackgroundColor(color: string): string {
  const backgroundColors: Record<string, string> = {
    'maruno-pink': 'bg-pink-50',
    'snowdrop-blue': 'bg-blue-50',
    'koba-yellow': 'bg-yellow-50',
    orange: 'bg-orange-50',
    blue: 'bg-blue-50',
    pink: 'bg-pink-50',
    green: 'bg-green-50',
    yellow: 'bg-cyan-50',
    purple: 'bg-purple-50',
    red: 'bg-red-50',
  };

  return backgroundColors[color] || 'bg-gray-50';
}

export default function TeamMemberCard({
  member,
  className = '',
}: TeamMemberCardProps) {
  const colorClasses = {
    orange: {
      bg: 'from-orange-400 to-red-500',
      border: 'border-orange-400',
      text: 'text-orange-500',
      badgeBg: 'bg-orange-500 hover:bg-orange-600',
    },
    blue: {
      bg: 'from-blue-400 to-indigo-500',
      border: 'border-blue-400',
      text: 'text-blue-500',
      badgeBg: 'bg-blue-500 hover:bg-blue-600',
    },
    pink: {
      bg: 'from-pink-400 to-purple-500',
      border: 'border-pink-400',
      text: 'text-pink-500',
      badgeBg: 'bg-pink-500 hover:bg-pink-600',
    },
    green: {
      bg: 'from-green-400 to-emerald-500',
      border: 'border-green-400',
      text: 'text-green-500',
      badgeBg: 'bg-green-500 hover:bg-green-600',
    },
    yellow: {
      bg: 'from-cyan-400 to-blue-500',
      border: 'border-cyan-400',
      text: 'text-cyan-500',
      badgeBg: 'bg-cyan-500 hover:bg-cyan-600',
    },
    purple: {
      bg: 'from-purple-400 to-violet-500',
      border: 'border-purple-400',
      text: 'text-purple-500',
      badgeBg: 'bg-purple-500 hover:bg-purple-600',
    },
    red: {
      bg: 'from-red-400 to-rose-500',
      border: 'border-red-400',
      text: 'text-red-500',
      badgeBg: 'bg-red-500 hover:bg-red-600',
    },
    'maruno-pink': {
      bg: 'from-pink-300 to-pink-400',
      border: 'border-pink-300',
      text: 'text-pink-500',
      badgeBg: 'bg-pink-400 hover:bg-pink-500',
    },
    'snowdrop-blue': {
      bg: 'from-blue-200 to-blue-300',
      border: 'border-blue-200',
      text: 'text-blue-400',
      badgeBg: 'bg-blue-300 hover:bg-blue-400',
    },
    'koba-yellow': {
      bg: 'from-yellow-300 to-yellow-400',
      border: 'border-yellow-300',
      text: 'text-yellow-600',
      badgeBg: 'bg-yellow-400 hover:bg-yellow-500',
    },
  };

  const colors =
    colorClasses[member.color as keyof typeof colorClasses] ||
    colorClasses.blue;
  const colSpanClass = member.colSpan === 2 ? 'lg:col-span-2' : '';

  return (
    <Card className={`shadow-xl ${colSpanClass} ${className}`}>
      <CardContent className="p-4 md:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div
            className={`h-48 w-48 bg-gradient-to-br ${colors.bg} mx-auto flex shrink-0 items-center justify-center overflow-hidden rounded-full sm:mx-0 sm:mr-6 sm:h-28 sm:w-28`}
          >
            {member.avatar ? (
              <img
                alt={`${member.name}のアイコン`}
                className="h-full w-full object-cover"
                src={member.avatar}
              />
            ) : (
              <span className="font-bold text-2xl text-white sm:text-3xl">
                {member.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:text-left">
                <CardTitle className="text-lg sm:text-xl">
                  {member.name === 'koba' ? 'KOBA' : member.name}
                </CardTitle>
                {member.badge && (
                  <Badge className={`${colors.badgeBg} mx-auto w-fit sm:mx-0`}>
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
            {renderResponsiveText(
              member.title,
              'text-center font-medium text-gray-600 text-sm sm:text-left sm:text-base',
              'p'
            )}
          </div>
        </div>

        <div className="mb-4 space-y-3">
          {member.details.map((detail, index) => (
            <div
              className="flex items-start text-gray-700"
              key={`detail-${detail.icon}-${index}`}
            >
              <span className={`${colors.text} mt-0.5 mr-3`}>
                {detail.icon}
              </span>
              <span>{renderResponsiveText(detail.text)}</span>
            </div>
          ))}
        </div>

        <div
          className={`${getBackgroundColor(member.color)} border-l-4 ${colors.border} mb-4 rounded p-4`}
        >
          <p className="text-gray-700 text-sm">
            <strong>メッセージ：</strong>
            {renderResponsiveText(member.message)}
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
