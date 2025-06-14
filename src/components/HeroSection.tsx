import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-300 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* メインキャッチコピー */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🔰はじめよう！
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            プログラムの世界！🆓
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow">
            親子で夏休みの思い出作り
          </p>
        </div>

        {/* 動画セクション */}
        <div className="mb-8 w-full max-w-4xl">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder-video-poster.jpg"
                >
                  <source src="/your-video.mp4" type="video/mp4" />
                  お使いのブラウザは動画再生に対応していません。
                </video>
              </div>
              <p className="text-white/80 text-sm mt-4 text-center">
                プログラミング体験の様子をご覧ください
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 h-auto"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎯 無料体験に申し込む
            </a>
          </Button>
        </div>

        {/* イベント基本情報 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <Card className="bg-white/20 backdrop-blur-sm border-white/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-white mb-2 text-lg">開催日程</h3>
              <p className="text-white/90 text-lg">2025年8月9日〜11日</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-500 to-pink-500 backdrop-blur-sm border-2 border-yellow-300 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 animate-bounce">🏪</div>
              <h3 className="font-bold text-white mb-2 text-lg">ブース番号</h3>
              <p className="font-extrabold text-4xl drop-shadow-lg bg-yellow-400 text-white px-4 py-2 rounded-full inline-block border-4 border-white">
                M-14
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-sm border-white/30">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-white mb-2 text-lg">会場</h3>
              <p className="text-white/90 text-lg">幕張メッセ</p>
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
