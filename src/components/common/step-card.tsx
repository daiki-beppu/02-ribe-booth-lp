import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { StepItem } from '../../types/sections/experience';

interface StepCardProps {
  step: StepItem;
  className?: string;
}

export default function StepCard({ step, className = '' }: StepCardProps) {
  return (
    <Card className={`text-center shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="mb-4 text-4xl">{step.icon}</div>
        <CardTitle className="mb-3 text-base">{step.title}</CardTitle>
        <p className="whitespace-pre-line text-gray-600 text-sm">
          {step.description}
        </p>
      </CardContent>
    </Card>
  );
}
