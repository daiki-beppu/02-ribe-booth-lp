import { Card, CardContent } from "@/components/ui/card";
import CTAButton from "../common/CTAButton";
import type { HeroData } from "../../types/sections/hero";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-300 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* メインキャッチコピー */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {data.title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {data.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow">
            {data.description}
          </p>
        </div>

        {/* 動画セクション */}
        <div className="mb-8 w-full max-w-4xl">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                {data.video.youtubeId ? (
                  // 仮実装：YouTube動画 - 最終的に assets/movies の動画に置き換え
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${data.video.youtubeId}`}
                    title="プログラミング体験デモ動画"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  // 最終版：ローカル動画
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={data.video.poster}
                  >
                    <source src={data.video.localSrc} type="video/mp4" />
                    お使いのブラウザは動画再生に対応していません。
                  </video>
                )}
              </div>
              <p className="text-white/80 text-sm mt-4 text-center">
                {data.video.caption}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton button={data.ctaButton} size="lg" />
        </div>

        {/* イベント基本情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <Card className="bg-white/20 backdrop-blur-sm border-white/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-white mb-2 text-lg">開催日程</h3>
              <p className="text-white/90 text-lg">{data.eventInfo.dates}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-500 to-pink-500 backdrop-blur-sm border-2 border-yellow-300 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 animate-bounce">🏪</div>
              <h3 className="font-bold text-white mb-2 text-lg">ブース番号</h3>
              <p className="font-extrabold text-4xl drop-shadow-lg bg-yellow-400 text-white px-4 py-2 rounded-full inline-block border-4 border-white">
                {data.eventInfo.boothNumber}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-sm border-white/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-white mb-2 text-lg">会場</h3>
              <p className="text-white/90 text-lg">{data.eventInfo.venue}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}