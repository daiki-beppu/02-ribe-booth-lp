import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CTAButton from "../common/CTAButton";
import AccessInfoDialog from "../access/AccessInfoDialog";
import { accessInfoData } from "../../data/access-info";
import type { HeroData } from "../../types/sections/hero";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#a8dee9] via-[#bfe4ec] to-[#91d5e0] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* メインキャッチコピー */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {data.title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            {data.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium">
            {data.description}
          </p>
        </div>

        {/* 動画セクション */}
        <div className="mb-8 w-full max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-2xl">
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
              <p className="text-gray-600 text-sm mt-4 text-center">
                {data.video.caption}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* キャッチコピー */}
        {data.catchCopy && (
          <div className="mb-8 w-full max-w-4xl relative">
            {/* 温かい光沢エフェクト */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#a8dee9]/40 via-[#bfe4ec]/40 to-[#a8dee9]/40 rounded-2xl blur-lg"></div>

            {/* メインコンテナ */}
            <div className="relative bg-gradient-to-r from-white/95 via-[#a8dee9]/20 to-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-[#a8dee9]/50 transform hover:scale-102 transition-all duration-300">
              {/* 上部装飾ライン */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a8dee9] via-[#bfe4ec] to-[#a8dee9] rounded-t-2xl"></div>

              {/* 装飾的な要素（控えめ） */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-[#a8dee9] rounded-full shadow-lg opacity-80"></div>
              <div className="absolute -top-1 right-12 w-3 h-3 bg-[#91d5e0] rounded-full shadow-lg opacity-70"></div>
              <div className="absolute -bottom-2 left-16 w-3 h-3 bg-[#bfe4ec] rounded-full shadow-lg opacity-60"></div>
              <div className="absolute -bottom-1 right-8 w-2 h-2 bg-[#a8dee9] rounded-full shadow-lg opacity-80"></div>

              {/* キャッチコピー内容 */}
              <div className="relative z-10 text-center">
                {/* メインメッセージ */}
                <div className="mb-4">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    <span className="inline-block bg-gradient-to-r from-[#6cb7c7] to-[#5aa3b5] bg-clip-text text-transparent">
                      自由研究提出OK
                    </span>
                    <span
                      className="inline-block mx-3 text-3xl md:text-4xl animate-bounce"
                      style={{ color: "var(--orange-9)" }}
                    >
                      →
                    </span>
                    <span className="inline-block bg-gradient-to-r from-[#6cb7c7] to-[#7bbfce] bg-clip-text text-transparent">
                      将来のスキルまで！
                    </span>
                  </p>
                </div>

                {/* サブメッセージ - 付箋風 */}
                <div className="inline-block relative">
                  {/* 付箋の影 */}
                  <div className="absolute inset-0 bg-gray-400/30 transform translate-x-1 translate-y-1 blur-sm"></div>

                  {/* 付箋本体 */}
                  <div className="relative bg-[#bfe4ec] px-6 py-4 shadow-lg transform -rotate-2 hover:-rotate-1 transition-transform duration-300 border-l-2 border-[#a8dee9]">
                    {/* 付箋の角がめくれた効果 */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4ebef] transform rotate-45 shadow-sm"></div>
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white/50 transform rotate-45"></div>

                    {/* テキスト */}
                    <p
                      className="text-lg md:text-xl font-bold text-gray-800 relative z-10"
                      style={{ fontFamily: "Comic Sans MS, cursive" }}
                    >
                      ✨ 一石二鳥の学習体験 ✨
                    </p>

                    {/* 付箋の質感 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4ebef]/30 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* 下部装飾ライン */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a8dee9] via-[#bfe4ec] to-[#a8dee9] rounded-b-2xl"></div>
            </div>

            {/* サイドの装飾 */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-3xl animate-bounce opacity-70">
              📚
            </div>
            <div
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-3xl animate-bounce opacity-70"
              style={{ animationDelay: "0.7s" }}
            >
              💡
            </div>
          </div>
        )}

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton button={data.ctaButton} size="lg" />
        </div>

        {/* イベント基本情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">開催日程</h3>
              <p className="text-gray-700 text-lg">{data.eventInfo.dates}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm border-2 border-orange-300 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 animate-bounce">🏪</div>
              <h3 className="font-bold text-white mb-2 text-lg">ブース番号</h3>
              <p className="font-extrabold text-4xl drop-shadow-lg bg-[#6cb7c7] text-white px-4 py-2 rounded-full inline-block border-4 border-[#a8dee9]">
                {data.eventInfo.boothNumber}
              </p>
            </CardContent>
          </Card>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:bg-white/90">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">会場</h3>
                  <p className="text-gray-700 text-lg">
                    {data.eventInfo.venue}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    クリックでアクセス情報を見る
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="!max-w-5xl !w-[95vw] max-h-[90vh] overflow-hidden p-0 sm:!max-w-5xl">
              <div className="p-6 overflow-y-auto max-h-[85vh]">
                <AccessInfoDialog data={accessInfoData} />
              </div>
            </DialogContent>
          </Dialog>
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
