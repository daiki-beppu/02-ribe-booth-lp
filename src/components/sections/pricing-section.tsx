import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PricingData } from '../../types/sections/pricing';
import CTAButton from '../common/cta-button';
import FreeServiceItem from '../common/free-service-item';
import ProductCard from '../common/product-card';

interface PricingSectionProps {
  data: PricingData;
}

export default function PricingSection({ data }: PricingSectionProps) {
  return (
    <section className="bg-gradient-to-br from-[#a8dee9] via-[#bfe4ec] to-[#91d5e0] py-16">
      <div className="container mx-auto px-4">
        {/* 料金体系 */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-3xl text-gray-800 md:text-4xl">
            {data.title}
          </h2>
          <p className="mx-auto max-w-3xl text-gray-700 text-xl">
            {data.description}
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          {/* 無料サービス */}
          <Card className="flex h-full flex-col shadow-2xl">
            <CardHeader className="pb-4 text-center">
              <Badge
                className="mx-auto mb-4 w-fit px-6 py-2 text-lg text-white"
                style={{ backgroundColor: 'var(--orange-9)' }}
              >
                🆓 完全無料
              </Badge>
              <CardTitle className="text-2xl">
                無料体験・相談会・ 大交流会イベント
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col space-y-6">
              <div className="space-y-6">
                {data.freeServices.map((service, index) => (
                  <FreeServiceItem
                    key={`free-service-${service.title.slice(0, 10)}-${index}`}
                    service={service}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 物販商品 */}
          <Card className="flex h-full flex-col shadow-2xl">
            <CardHeader className="pb-4 text-center">
              <Badge className="mx-auto mb-4 w-fit bg-[#6cb7c7] px-6 py-2 text-lg hover:bg-[#5aa3b5]">
                🎁 物販商品ラインナップ
              </Badge>
              <CardTitle className="text-2xl">お持ち帰りキット</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col space-y-6">
              <div className="space-y-6">
                {data.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 申込方法 */}
        <Card className="mb-12 border-gray-200 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <CardTitle className="mb-8 text-center text-2xl text-gray-800">
              {data.applicationForm.title}
            </CardTitle>
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <div className="mb-4 text-4xl">🌐</div>
                <h4 className="mb-2 font-bold text-gray-800 text-lg">
                  予約フォーム
                </h4>
                <p className="mb-4 text-gray-600">
                  {data.applicationForm.description}
                </p>
                <CTAButton button={data.applicationForm.button} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 最終CTA */}
        <div className="text-center">
          <h3 className="mb-6 font-bold text-2xl text-gray-800 md:text-3xl">
            {data.finalCta.title}
          </h3>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton
              button={data.finalCta.button}
              className="shadow-2xl"
              size="lg"
            />
          </div>
          <p className="mt-6 whitespace-pre-line text-gray-700 text-lg">
            {data.finalCta.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
