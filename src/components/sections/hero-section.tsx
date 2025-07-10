import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { accessInfoData } from '../../data/access-info';
import type { HeroData } from '../../types/sections/hero';
import { renderResponsiveText } from '../../utils/responsive-text';
import AccessInfoDialog from '../access/access-info-dialog';
import CTAButton from '../common/cta-button';

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#a8dee9] via-[#bfe4ec] to-[#91d5e0]">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
        {/* メインキャッチコピー */}
        <div className="mb-8">
          {renderResponsiveText(
            data.title,
            'mb-4 font-bold text-4xl text-gray-800 md:text-6xl',
            'h1'
          )}
          {renderResponsiveText(
            data.subtitle,
            'mb-6 font-bold text-3xl text-gray-800 md:text-5xl',
            'h2'
          )}
          {renderResponsiveText(
            data.description,
            'font-medium text-slate-700 text-xl md:text-2xl',
            'p'
          )}
        </div>

        {/* 動画セクション */}
        <div className="mb-8 w-full">
          <Card className="border-gray-200 bg-white/80 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="aspect-video overflow-hidden rounded-xl">
                {data.video.youtubeId ? (
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                    src={`https://www.youtube-nocookie.com/embed/${data.video.youtubeId}`}
                    title="プログラミング体験デモ動画"
                  />
                ) : (
                  // 最終版：ローカル動画
                  <video
                    className="h-full w-full object-cover"
                    controls
                    poster={data.video.poster}
                  >
                    <source src={data.video.localSrc} type="video/mp4" />
                    お使いのブラウザは動画再生に対応していません。
                  </video>
                )}
              </div>
              {renderResponsiveText(
                data.video.caption,
                'mt-4 text-center text-gray-600 text-sm',
                'p'
              )}
            </CardContent>
          </Card>
        </div>

        {/* キャッチコピー */}
        {data.catchCopy && (
          <div className="relative mb-8 w-full max-w-6xl">
            {/* 温かい光沢エフェクト */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#a8dee9]/40 via-[#bfe4ec]/40 to-[#a8dee9]/40 blur-lg" />

            {/* メインコンテナ */}
            <div className="relative transform rounded-2xl border border-[#a8dee9]/50 bg-gradient-to-r from-white/95 via-[#a8dee9]/20 to-white/95 p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-102 md:p-8">
              {/* 上部装飾ライン */}
              <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#a8dee9] via-[#bfe4ec] to-[#a8dee9]" />

              {/* 装飾的な要素（控えめ） */}
              <div className="-top-2 absolute left-8 h-4 w-4 rounded-full bg-[#a8dee9] opacity-80 shadow-lg" />
              <div className="-top-1 absolute right-12 h-3 w-3 rounded-full bg-[#91d5e0] opacity-70 shadow-lg" />
              <div className="-bottom-2 absolute left-16 h-3 w-3 rounded-full bg-[#bfe4ec] opacity-60 shadow-lg" />
              <div className="-bottom-1 absolute right-8 h-2 w-2 rounded-full bg-[#a8dee9] opacity-80 shadow-lg" />

              {/* キャッチコピー内容 */}
              <div className="relative z-10 text-center">
                {/* メインメッセージ */}
                <div className="mb-4">
                  <p className="font-bold text-2xl text-gray-800 leading-tight md:text-3xl lg:text-4xl">
                    <span className="inline-block bg-gradient-to-r from-[#6cb7c7] to-[#5aa3b5] bg-clip-text text-transparent">
                      自由研究提出OK
                    </span>
                    <span
                      className="mx-3 inline-block animate-bounce text-3xl md:text-4xl"
                      style={{ color: 'var(--orange-9)' }}
                    >
                      →
                    </span>
                    <span className="inline-block bg-gradient-to-r from-[#6cb7c7] to-[#7bbfce] bg-clip-text text-transparent">
                      将来のスキルまで！
                    </span>
                  </p>
                </div>

                {/* サブメッセージ - 付箋風 */}
                <div className="relative inline-block">
                  {/* 付箋の影 */}
                  <div className="absolute inset-0 translate-x-1 translate-y-1 transform bg-gray-400/30 blur-sm" />

                  {/* 付箋本体 */}
                  <div className="-rotate-2 hover:-rotate-1 relative transform border-[#a8dee9] border-l-2 bg-[#bfe4ec] px-6 py-4 shadow-lg transition-transform duration-300">
                    {/* 付箋の角がめくれた効果 */}
                    <div className="-top-1 -right-1 absolute h-4 w-4 rotate-45 transform bg-[#d4ebef] shadow-sm" />
                    <div className="-top-0.5 -right-0.5 absolute h-3 w-3 rotate-45 transform bg-white/50" />

                    {/* テキスト */}
                    <p
                      className="relative z-10 font-bold text-gray-800 text-lg md:text-xl"
                      style={{ fontFamily: 'Comic Sans MS, cursive' }}
                    >
                      ✨ 一石二鳥の学習体験 ✨
                    </p>

                    {/* 付箋の質感 */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d4ebef]/30 to-transparent" />
                  </div>
                </div>
              </div>

              {/* 下部装飾ライン */}
              <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-gradient-to-r from-[#a8dee9] via-[#bfe4ec] to-[#a8dee9]" />
            </div>

            {/* サイドの装飾 */}
            <div className="-left-4 -translate-y-1/2 absolute top-1/2 transform animate-bounce text-3xl opacity-70">
              📚
            </div>
            <div
              className="-right-4 -translate-y-1/2 absolute top-1/2 transform animate-bounce text-3xl opacity-70"
              style={{ animationDelay: '0.7s' }}
            >
              💡
            </div>
          </div>
        )}

        {/* CTAボタン */}

        <CTAButton button={data.ctaButton} size="lg" />

        {/* イベント基本情報 */}
        <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="border-gray-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="mb-3 text-4xl">📅</div>
              <h3 className="mb-2 font-bold text-gray-800 text-lg">開催日程</h3>
              {renderResponsiveText(
                data.eventInfo.dates,
                'text-gray-700 text-lg',
                'p'
              )}
            </CardContent>
          </Card>
          <Card className="transform border-2 border-orange-300 bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="mb-3 animate-bounce text-4xl">🏪</div>
              <h3 className="mb-2 font-bold text-lg text-white">ブース番号</h3>
              {renderResponsiveText(
                data.eventInfo.boothNumber,
                'inline-block rounded-full border-4 border-[#a8dee9] bg-[#6cb7c7] px-4 py-2 font-extrabold text-4xl text-white drop-shadow-lg',
                'p'
              )}
            </CardContent>
          </Card>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer border-gray-200 bg-white/80 backdrop-blur-sm transition-shadow duration-300 hover:bg-white/90 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-4xl">📍</div>
                  <h3 className="mb-2 font-bold text-gray-800 text-lg">会場</h3>
                  {renderResponsiveText(
                    data.eventInfo.venue,
                    'text-gray-700 text-lg',
                    'p'
                  )}
                  <p className="mt-2 text-gray-500 text-xs">
                    クリックでアクセス情報を見る
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="!max-w-5xl !w-[95vw] sm:!max-w-5xl max-h-[90vh] overflow-hidden p-0">
              <div className="max-h-[85vh] overflow-y-auto p-6">
                <AccessInfoDialog data={accessInfoData} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="-top-40 -right-40 absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="-bottom-40 -left-40 absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}
