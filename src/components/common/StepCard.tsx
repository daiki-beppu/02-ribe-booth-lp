import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { StepItem } from "../../types/sections/experience";

interface StepCardProps {
  step: StepItem;
  className?: string;
}

export default function StepCard({ step, className = "" }: StepCardProps) {
  return (
    <Card className={`text-center shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{step.icon}</div>
        <CardTitle className="text-base mb-3">{step.title}</CardTitle>
        <p className="text-gray-600 text-sm whitespace-pre-line">
          {step.description}
        </p>
      </CardContent>
    </Card>
  );
}