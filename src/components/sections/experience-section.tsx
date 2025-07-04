import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { ExperienceData } from '../../types/sections/experience';
import StepCard from '../common/step-card';

interface ExperienceSectionProps {
  data: ExperienceData;
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-3xl text-gray-800 md:text-4xl">
            {data.title}
          </h2>
          <p className="mx-auto max-w-3xl whitespace-pre-line text-gray-600 text-lg">
            {data.description}
          </p>
        </div>

        {/* LED信号機プログラミング体験 */}
        <div className="mb-16">
          <Card className="border-[#a8dee9] bg-gradient-to-r from-[#f0f9fa] to-[#f0f9fa]">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <Badge className="mb-4 bg-[#6cb7c7] hover:bg-[#5aa3b5]">
                  {data.badge.text}
                </Badge>
                <CardTitle className="mb-4 text-2xl">
                  🚦 LED信号機プログラミング体験
                </CardTitle>
                <p className="mb-6 text-gray-600">
                  実際にArduino基板を組み立てて、LEDライトをプログラムで制御！
                  <br />
                  初心者でも安心のテンプレート付きで、すぐに信号機が動き出します。
                </p>
                {data.images.map((image, index) => (
                  <div
                    className="mx-auto max-w-2xl"
                    key={`experience-image-${image.alt}-${index}`}
                  >
                    <img
                      alt={image.alt}
                      className="w-full rounded-xl shadow-lg"
                      src={image.src}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {data.steps.map((step, index) => (
                  <StepCard
                    key={`step-${step.title.slice(0, 10)}-${index}`}
                    step={step}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
