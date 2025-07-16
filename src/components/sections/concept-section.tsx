import type { ConceptData } from '../../types/sections/concept';
import { renderResponsiveText } from '../../utils/responsive-text';
import CTAButton from '../common/cta-button';
import FeatureCard from '../common/feature-card';

interface ConceptSectionProps {
  data: ConceptData;
}

export default function ConceptSection({ data }: ConceptSectionProps) {
  return (
    <section className="bg-gradient-to-b from-[#f0f9fa] to-green-50 py-16">
      <div className="container mx-auto px-4">
        {/* メインコンセプト */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-3xl text-gray-800 md:text-4xl">
            <span className="text-[#6cb7c7]">
              {renderResponsiveText(data.title)}
            </span>
          </h2>
          {renderResponsiveText(
            data.description,
            'mx-auto mb-8 whitespace-pre-wrap text-gray-600 text-lg leading-relaxed',
            'p'
          )}
          <div className="mx-auto">
            <img
              alt={data.image.alt}
              className="w-full rounded-xl shadow-xl"
              src={data.image.src}
            />
          </div>
        </div>

        {/* PRポイント */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-6 whitespace-pre-line md:grid-cols-2">
            {data.features.map((feature, index) => (
              <FeatureCard
                feature={feature}
                key={`feature-${feature.title}-${index}`}
              />
            ))}
          </div>
        </div>

        {/* 詳細ページボタン */}
        {data.detailButton && (
          <div className="mt-12 text-center">
            <CTAButton button={data.detailButton} size="lg" />
          </div>
        )}
      </div>
    </section>
  );
}
