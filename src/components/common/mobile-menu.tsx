import { Home, Info, Menu, Users } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed right-4 bottom-4 z-50 h-14 w-14 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600"
            size="sm"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-[80vh]" side="bottom">
          <SheetHeader>
            <SheetTitle>ナビゲーション</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {/* ホームボタン */}
            <Link
              className={`block w-full ${
                location.pathname === '/'
                  ? 'pointer-events-none opacity-50'
                  : ''
              }`}
              onClick={closeMenu}
              to="/"
            >
              <Button
                className="h-14 w-full justify-start text-lg"
                disabled={location.pathname === '/'}
                variant={location.pathname === '/' ? 'secondary' : 'outline'}
              >
                <Home className="mr-4 h-6 w-6" />
                <span>ホーム</span>
              </Button>
            </Link>

            {/* ブース詳細ボタン */}
            <Link
              className={`block w-full ${
                location.pathname === '/booth'
                  ? 'pointer-events-none opacity-50'
                  : ''
              }`}
              onClick={closeMenu}
              to="/booth"
            >
              <Button
                className="h-14 w-full justify-start text-lg"
                disabled={location.pathname === '/booth'}
                variant={
                  location.pathname === '/booth' ? 'secondary' : 'outline'
                }
              >
                <Info className="mr-4 h-6 w-6" />
                <span>ブース詳細</span>
              </Button>
            </Link>

            <Separator />

            {/* メンバー一覧 */}
            <div>
              <h3 className="mb-4 px-2 font-semibold text-lg">メンバー詳細</h3>
              <div className="space-y-3">
                <Link
                  className={`block w-full ${
                    location.pathname === '/member/トムランド'
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }`}
                  onClick={closeMenu}
                  to="/member/トムランド"
                >
                  <Button
                    className="h-14 w-full justify-start"
                    disabled={location.pathname === '/member/トムランド'}
                    variant={
                      location.pathname === '/member/トムランド'
                        ? 'secondary'
                        : 'ghost'
                    }
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium text-base">トムランド</div>
                      <div className="text-gray-500 text-sm">リーダー</div>
                    </div>
                  </Button>
                </Link>

                <Link
                  className={`block w-full ${
                    location.pathname === '/member/まるの'
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }`}
                  onClick={closeMenu}
                  to="/member/まるの"
                >
                  <Button
                    className="h-14 w-full justify-start"
                    disabled={location.pathname === '/member/まるの'}
                    variant={
                      location.pathname === '/member/まるの'
                        ? 'secondary'
                        : 'ghost'
                    }
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium text-base">まるの</div>
                      <div className="text-gray-500 text-sm">サブリーダー</div>
                    </div>
                  </Button>
                </Link>

                <Link
                  className={`block w-full ${
                    location.pathname === '/member/ももちこ'
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }`}
                  onClick={closeMenu}
                  to="/member/ももちこ"
                >
                  <Button
                    className="h-14 w-full justify-start"
                    disabled={location.pathname === '/member/ももちこ'}
                    variant={
                      location.pathname === '/member/ももちこ'
                        ? 'secondary'
                        : 'ghost'
                    }
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium text-base">ももちこ</div>
                      <div className="text-gray-500 text-sm">
                        駆け出しプログラマー
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link
                  className={`block w-full ${
                    location.pathname === '/member/koba'
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }`}
                  onClick={closeMenu}
                  to="/member/koba"
                >
                  <Button
                    className="h-14 w-full justify-start"
                    disabled={location.pathname === '/member/koba'}
                    variant={
                      location.pathname === '/member/koba'
                        ? 'secondary'
                        : 'ghost'
                    }
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium text-base">KOBA</div>
                      <div className="text-gray-500 text-sm">
                        変態エンジニア
                      </div>
                    </div>
                  </Button>
                </Link>

                <Link
                  className={`block w-full ${
                    location.pathname === '/member/snowdrop'
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }`}
                  onClick={closeMenu}
                  to="/member/snowdrop"
                >
                  <Button
                    className="h-14 w-full justify-start"
                    disabled={location.pathname === '/member/snowdrop'}
                    variant={
                      location.pathname === '/member/snowdrop'
                        ? 'secondary'
                        : 'ghost'
                    }
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium text-base">snowdrop</div>
                      <div className="text-gray-500 text-sm">
                        かごバッグ作家
                      </div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
