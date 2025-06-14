import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { FeatureItem } from "../../types/sections/concept";

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export default function FeatureCard({ feature, className = "" }: FeatureCardProps) {
  return (
    <Card className={`text-center hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <CardTitle className="mb-2">{feature.title}</CardTitle>
        <p className="text-gray-600 text-sm">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}