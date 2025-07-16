import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  autoPlayInterval?: number; // 自動再生間隔（ミリ秒）
}

export default function ImageCarousel({
  images,
  className = '',
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPending, startImageTransition] = useTransition();
  const [isInViewport, setIsInViewport] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const transitionToImage = useCallback((updateFunction: () => void) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        startImageTransition(updateFunction);
      });
    } else {
      startImageTransition(updateFunction);
    }
  }, []);

  const nextImage = useCallback(() => {
    transitionToImage(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    });
  }, [transitionToImage, images.length]);

  const prevImage = useCallback(() => {
    transitionToImage(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    });
  }, [transitionToImage, images.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // Intersection Observer でビューポート内の表示を監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30%が見えたら表示中とみなす
        rootMargin: '0px 0px -10% 0px', // 少しマージンを設ける
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // 自動再生（ビューポート内かつ自動再生有効の場合のみ）
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying || !isInViewport) {
      return;
    }

    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying, isInViewport, autoPlayInterval, nextImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`} ref={carouselRef}>
      {/* カルーセルコンテナ */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div
          className={`flex transition-all duration-700 ease-out ${
            isPending ? 'opacity-90' : 'opacity-100'
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            viewTransitionName: 'carousel-container',
          }}
        >
          {images.map((image, index) => (
            <div
              className="relative w-full flex-shrink-0"
              key={`carousel-image-${image.alt}-${index}`}
              style={{
                viewTransitionName:
                  index === currentIndex ? 'active-image' : undefined,
              }}
            >
              <img
                alt={image.alt}
                className={`h-auto w-full object-cover transition-all duration-700 ${
                  index === currentIndex
                    ? 'scale-100 brightness-100'
                    : 'scale-95 brightness-75'
                }`}
                src={image.src}
                style={{
                  viewTransitionName:
                    index === currentIndex ? `image-${index}` : undefined,
                }}
              />
              {/* アクティブ画像にグロー効果 */}
              {index === currentIndex && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />
              )}
            </div>
          ))}
        </div>

        {/* 前後ボタン（画像が複数ある場合のみ表示） */}
        {images.length > 1 && (
          <>
            <Button
              className="-translate-y-1/2 absolute top-1/2 left-2 z-10 h-10 w-10 rounded-full bg-black/50 p-0 text-white hover:bg-black/70"
              onClick={prevImage}
              size="sm"
              variant="ghost"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              className="-translate-y-1/2 absolute top-1/2 right-2 z-10 h-10 w-10 rounded-full bg-black/50 p-0 text-white hover:bg-black/70"
              onClick={nextImage}
              size="sm"
              variant="ghost"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* 自動再生ボタン */}
            <Button
              className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-black/50 p-0 text-white hover:bg-black/70"
              onClick={toggleAutoPlay}
              size="sm"
              variant="ghost"
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </>
        )}
      </div>

      {/* キャプション */}
      {images[currentIndex].caption && (
        <p className="mt-2 text-center text-gray-500 text-sm">
          {images[currentIndex].caption}
        </p>
      )}
    </div>
  );
}
