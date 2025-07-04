import { ChevronDown, Home, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 right-0 left-0 z-40 hidden border-b bg-white shadow-sm md:block">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ・タイトル */}
          <Link className="flex items-center space-x-2" to="/">
            <div className="font-bold text-gray-800 text-xl">
              リベ大フェス2025 M-14 親子でプログラム× 光る動くおもちゃ作り！
            </div>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button
                className="flex items-center space-x-2"
                variant={location.pathname === '/' ? 'default' : 'ghost'}
              >
                <Home className="h-4 w-4" />
                <span>ホーム</span>
              </Button>
            </Link>

            {/* メンバー一覧ドロップダウン */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center space-x-2"
                  variant={
                    location.pathname.startsWith('/member')
                      ? 'default'
                      : 'ghost'
                  }
                >
                  <Users className="h-4 w-4" />
                  <span>メンバー</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link className="w-full" to="/member/トムランド">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>トムランド</span>
                      <span className="text-gray-500 text-xs">リーダー</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link className="w-full" to="/member/まるの">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>まるの</span>
                      <span className="text-gray-500 text-xs">
                        サブリーダー
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link className="w-full" to="/member/ももちこ">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>ももちこ</span>
                      <span className="text-gray-500 text-xs">
                        駆け出しプログラマー
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link className="w-full" to="/member/koba">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>KOBA</span>
                      <span className="text-gray-500 text-xs">
                        変態エンジニア
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link className="w-full" to="/member/snowdrop">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>snowdrop</span>
                      <span className="text-gray-500 text-xs">
                        かごバッグ作家
                      </span>
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
