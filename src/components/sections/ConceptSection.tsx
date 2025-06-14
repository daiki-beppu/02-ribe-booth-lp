import FeatureCard from "../common/FeatureCard";
import type { ConceptData } from "../../types/sections/concept";

interface ConceptSectionProps {
  data: ConceptData;
}

export default function ConceptSection({ data }: ConceptSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* メインコンセプト */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">{data.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {data.description}
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* PRポイント */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}