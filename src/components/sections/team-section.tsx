import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { TeamData } from '../../types/sections/team';
import { renderResponsiveText } from '../../utils/responsive-text';
import TeamMemberCard from '../common/team-member-card';

interface TeamSectionProps {
  data: TeamData;
}

export default function TeamSection({ data }: TeamSectionProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 whitespace-pre-wrap text-center">
          {renderResponsiveText(
            data.title,
            'mb-6 font-bold text-3xl text-gray-800 md:text-4xl',
            'h2'
          )}
          {renderResponsiveText(
            data.description,
            'mx-auto max-w-3xl whitespace-pre-line text-gray-600 text-lg',
            'p'
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {data.members.map((member, index) => (
            <TeamMemberCard
              key={`team-member-${member.name}-${index}`}
              member={member}
            />
          ))}
        </div>

        <Card className="mt-12 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-8 text-center">
            <CardTitle className="mb-4 text-2xl">
              {renderResponsiveText(data.finalMessage.title)}
            </CardTitle>
            {renderResponsiveText(
              data.finalMessage.description,
              'mx-auto max-w-3xl whitespace-pre-line text-gray-600 leading-relaxed',
              'p'
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
