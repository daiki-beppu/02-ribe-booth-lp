import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FreeServiceItem from "../common/FreeServiceItem";
import ProductCard from "../common/ProductCard";
import CTAButton from "../common/CTAButton";
import type { PricingData } from "../../types/sections/pricing";

interface PricingSectionProps {
  data: PricingData;
}

export default function PricingSection({ data }: PricingSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#a8dee9] via-[#bfe4ec] to-[#91d5e0]">
      <div className="container mx-auto px-4">
        {/* 料金体系 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:items-start">
          {/* 無料サービス */}
          <Card className="shadow-2xl flex flex-col h-full">
            <CardHeader className="text-center pb-4">
              <Badge
                className="text-lg py-2 px-6 mb-4 mx-auto w-fit text-white"
                style={{ backgroundColor: "var(--orange-9)" }}
              >
                🆓 完全無料
              </Badge>
              <CardTitle className="text-2xl">無料体験・相談会</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col flex-grow">
              <div className="space-y-6">
                {data.freeServices.map((service, index) => (
                  <FreeServiceItem key={index} service={service} />
                ))}
              </div>

              <div className="mt-auto pt-6">
                <img
                  src={data.freeServicesImage.src}
                  alt={data.freeServicesImage.alt}
                  className="w-full rounded-xl shadow-lg"
                />
                {data.freeServicesImage.caption && (
                  <p className="text-center text-gray-500 text-sm mt-2">
                    {data.freeServicesImage.caption}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 物販商品 */}
          <Card className="shadow-2xl flex flex-col h-full">
            <CardHeader className="text-center pb-4">
              <Badge className="bg-[#6cb7c7] hover:bg-[#5aa3b5] text-lg py-2 px-6 mb-4 mx-auto w-fit">
                🎁 物販商品ラインナップ
              </Badge>
              <CardTitle className="text-2xl">お持ち帰りキット</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col flex-grow">
              <div className="space-y-6">
                {data.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="mt-auto pt-6">
                <img
                  src="/images/signal-and-level-crossing.jpg"
                  alt="信号機と踏切システムのハードウェア"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-gray-500 text-sm mt-2">
                  実際のキット例：信号機と踏切システム
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 申込方法 */}
        <Card className="bg-white/80 backdrop-blur-sm border-gray-200 mb-12">
          <CardContent className="p-8">
            <CardTitle className="text-2xl text-gray-800 mb-8 text-center">
              {data.applicationForm.title}
            </CardTitle>
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">
                  予約フォーム
                </h4>
                <p className="text-gray-600 mb-4">
                  {data.applicationForm.description}
                </p>
                <CTAButton button={data.applicationForm.button} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 最終CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {data.finalCta.title}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              button={data.finalCta.button}
              size="lg"
              className="shadow-2xl"
            />
          </div>
          <p className="text-gray-700 mt-6 text-lg whitespace-pre-line">
            {data.finalCta.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
