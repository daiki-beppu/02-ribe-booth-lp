import { Card, CardContent, CardTitle } from "@/components/ui/card";
import TeamMemberCard from "../common/TeamMemberCard";
import type { TeamData } from "../../types/sections/team";

interface TeamSectionProps {
  data: TeamData;
}

export default function TeamSection({ data }: TeamSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-pre-line">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <CardTitle className="text-2xl mb-4">
              {data.finalMessage.title}
            </CardTitle>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
              {data.finalMessage.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
