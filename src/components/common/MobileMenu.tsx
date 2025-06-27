import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Home, Users } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg z-50"
            size="sm"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>ナビゲーション</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {/* ホームボタン */}
            <Link
              to="/"
              onClick={closeMenu}
              className={`block w-full ${
                location.pathname === "/" ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Button
                variant={location.pathname === "/" ? "secondary" : "outline"}
                className="w-full justify-start h-14 text-lg"
                disabled={location.pathname === "/"}
              >
                <Home className="mr-4 h-6 w-6" />
                <span>ホーム</span>
              </Button>
            </Link>
            
            <Separator />
            
            {/* メンバー一覧 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 px-2">メンバー詳細</h3>
              <div className="space-y-3">
                <Link
                  to="/member/トムランド"
                  onClick={closeMenu}
                  className={`block w-full ${
                    location.pathname === "/member/トムランド" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <Button
                    variant={location.pathname === "/member/トムランド" ? "secondary" : "ghost"}
                    className="w-full justify-start h-14"
                    disabled={location.pathname === "/member/トムランド"}
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-base font-medium">トムランド</div>
                      <div className="text-sm text-gray-500">リーダー</div>
                    </div>
                  </Button>
                </Link>
                
                <Link
                  to="/member/まるの"
                  onClick={closeMenu}
                  className={`block w-full ${
                    location.pathname === "/member/まるの" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <Button
                    variant={location.pathname === "/member/まるの" ? "secondary" : "ghost"}
                    className="w-full justify-start h-14"
                    disabled={location.pathname === "/member/まるの"}
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-base font-medium">まるの</div>
                      <div className="text-sm text-gray-500">サブリーダー</div>
                    </div>
                  </Button>
                </Link>
                
                <Link
                  to="/member/ももちこ"
                  onClick={closeMenu}
                  className={`block w-full ${
                    location.pathname === "/member/ももちこ" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <Button
                    variant={location.pathname === "/member/ももちこ" ? "secondary" : "ghost"}
                    className="w-full justify-start h-14"
                    disabled={location.pathname === "/member/ももちこ"}
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-base font-medium">ももちこ</div>
                      <div className="text-sm text-gray-500">駆け出しプログラマー</div>
                    </div>
                  </Button>
                </Link>
                
                <Link
                  to="/member/koba"
                  onClick={closeMenu}
                  className={`block w-full ${
                    location.pathname === "/member/koba" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <Button
                    variant={location.pathname === "/member/koba" ? "secondary" : "ghost"}
                    className="w-full justify-start h-14"
                    disabled={location.pathname === "/member/koba"}
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-base font-medium">KOBA</div>
                      <div className="text-sm text-gray-500">変態エンジニア</div>
                    </div>
                  </Button>
                </Link>
                
                <Link
                  to="/member/snowdrop"
                  onClick={closeMenu}
                  className={`block w-full ${
                    location.pathname === "/member/snowdrop" ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  <Button
                    variant={location.pathname === "/member/snowdrop" ? "secondary" : "ghost"}
                    className="w-full justify-start h-14"
                    disabled={location.pathname === "/member/snowdrop"}
                  >
                    <Users className="mr-4 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-base font-medium">snowdrop</div>
                      <div className="text-sm text-gray-500">かごバッグ作家</div>
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