import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { ExperienceData } from '../../types/sections/experience';
import {
  getTextString,
  renderResponsiveText,
} from '../../utils/responsive-text';
import ImageCarousel from '../common/image-carousel';

interface ExperienceSectionProps {
  data: ExperienceData;
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="mb-16 text-center">
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

        {/* LED信号機プログラミング体験 */}
        <div>
          <Card className="mb-6 shadow-xl md:mb-8">
            <CardContent className="p-4 text-center md:p-8">
              <div className="mb-8 flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-3xl text-white md:h-20 md:w-20 md:text-4xl">
                  🚦
                </div>
                <div>
                  <h2 className="mb-4 font-bold text-2xl md:text-3xl">
                    LED信号機プログラミング体験
                  </h2>
                  <p className="text-gray-600 text-lg">
                    実際にArduino基板を組み立てて、LEDライトをプログラムで制御！
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-center">
                <Badge className="bg-[#6cb7c7] px-6 py-2 text-lg hover:bg-[#5aa3b5]">
                  {renderResponsiveText(data.badge.text)}
                </Badge>
              </div>

              <ImageCarousel className="mb-12" images={data.images} />

              {/* ステップカード */}
              <div className="space-y-6">
                <h3 className="mb-8 font-bold text-2xl md:text-3xl">
                  体験の流れ
                </h3>
                <div className="mx-auto max-w-4xl space-y-6">
                  {data.steps.map((step, index) => (
                    <Card
                      className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg"
                      key={`step-${getTextString(step.title).slice(0, 10)}-${index}`}
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start">
                          <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 font-bold text-lg text-white shadow-lg md:mr-6 md:h-16 md:w-16 md:text-xl">
                            {index + 1}
                          </div>
                          <div className="flex-grow">
                            {renderResponsiveText(
                              step.title,
                              'mb-2 md:mb-3 font-bold text-gray-800 text-lg md:text-xl lg:text-2xl',
                              'h4'
                            )}
                            {renderResponsiveText(
                              step.description,
                              'text-gray-600 text-sm md:text-lg leading-relaxed',
                              'p'
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
