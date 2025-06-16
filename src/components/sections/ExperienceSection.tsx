import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StepCard from "../common/StepCard";
import type { ExperienceData } from "../../types/sections/experience";

interface ExperienceSectionProps {
  data: ExperienceData;
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* LED信号機プログラミング体験 */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className={`bg-${data.badge.variant}-500 hover:bg-${data.badge.variant}-600 mb-4`}>
                  {data.badge.text}
                </Badge>
                <CardTitle className="text-2xl mb-4">
                  🚦 LED信号機プログラミング体験
                </CardTitle>
                <p className="text-gray-600 mb-6 whitespace-pre-line">
                  {data.description}
                </p>
                {data.images.map((image, index) => (
                  <div key={index} className="max-w-2xl mx-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.steps.map((step, index) => (
                  <StepCard key={index} step={step} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}