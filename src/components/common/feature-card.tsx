import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { FeatureItem } from '../../types/sections/concept';
import { renderResponsiveText } from '../../utils/responsive-text';

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export default function FeatureCard({
  feature,
  className = '',
}: FeatureCardProps) {
  return (
    <Card
      className={`text-center transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      <CardContent className="p-6">
        <div className="mb-4 text-6xl">{feature.icon}</div>
        <CardTitle className="mb-2 text-2xl">
          {renderResponsiveText(feature.title)}
        </CardTitle>
        {renderResponsiveText(
          feature.description,
          'text-gray-600 text-sm md:text-base',
          'p'
        )}
      </CardContent>
    </Card>
  );
}
