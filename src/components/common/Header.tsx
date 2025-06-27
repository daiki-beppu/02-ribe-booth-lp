import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Users, ChevronDown } from "lucide-react";

export default function Header() {
  const location = useLocation();

  return (
    <header className="hidden md:block bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ・タイトル */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-800">
              リベシティ プログラミングブース
            </div>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>ホーム</span>
              </Button>
            </Link>

            {/* メンバー一覧ドロップダウン */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={location.pathname.startsWith("/member") ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>メンバー</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/member/トムランド" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>トムランド</span>
                      <span className="text-xs text-gray-500">リーダー</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/member/まるの" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>まるの</span>
                      <span className="text-xs text-gray-500">サブリーダー</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/member/ももちこ" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>ももちこ</span>
                      <span className="text-xs text-gray-500">駆け出しプログラマー</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/member/koba" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>KOBA</span>
                      <span className="text-xs text-gray-500">変態エンジニア</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/member/snowdrop" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>snowdrop</span>
                      <span className="text-xs text-gray-500">かごバッグ作家</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}