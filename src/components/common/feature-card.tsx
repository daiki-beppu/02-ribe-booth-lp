import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { FeatureItem } from '../../types/sections/concept';

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
        <div className="mb-4 text-4xl">{feature.icon}</div>
        <CardTitle className="mb-2">{feature.title}</CardTitle>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </CardContent>
    </Card>
  );
}
