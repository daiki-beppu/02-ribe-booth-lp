# CLAUDE.md

このファイルはClaude Codeがこのリポジトリで作業する際のガイダンスを提供します。

## 開発コマンド

このプロジェクトは **bun** を使用：

- `bun run dev` - 開発サーバー起動
- `bun run build` - プロダクションビルド
- `bun run lint` - ESLintでコードチェック

## プロジェクト概要

React + TypeScript + Vite で作られたプログラミングブース用ランディングページ

### 技術スタック
- **React 19** + TypeScript
- **React Router DOM v7** - ページルーティング
- **shadcn/ui** - UIコンポーネント（Card, Button, Badge, DropdownMenu, Sheet）
- **Tailwind CSS v4** - スタイリング
- **Lucide React** - アイコン

### ページ構成
- `/` - ホームページ（全セクション）
- `/member/:memberName` - メンバー詳細ページ

### ナビゲーション
- **デスクトップ**: 固定ヘッダー + ドロップダウンメニュー
- **モバイル**: 右下FAB + ボトムシート

### チームメンバー
5名のメンバー、各自に専用カラーテーマ：
- トムランド (blue)
- まるの (red) 
- ももちこ (orange)
- KOBA (green)
- snowdrop (yellow)

### レスポンシブ対応
- **ブレークポイント**: sm(640px), md(768px), lg(1024px)
- **モバイル最適化**: フォントサイズ、パディング、ボタン配置の調整

### データ駆動型開発
- **セクションデータ**: `src/data/sections/` 配下にセクション別データを分離
- **型定義**: `src/types/sections/` 配下にTypeScript型定義
- **propsでのデータ注入**: 各コンポーネントはprops経由でデータを受け取り表示
- **コンテンツとUIの分離**: デザイン変更とコンテンツ変更を独立して実施可能

## 重要なコンポーネント

- `src/components/common/Header.tsx` - デスクトップヘッダー
- `src/components/common/MobileMenu.tsx` - モバイルメニュー  
- `src/components/common/TeamMemberCard.tsx` - メンバーカード
- `src/components/pages/MemberDetailPage.tsx` - メンバー詳細ページ
- `src/data/sections/team.ts` - メンバーデータ