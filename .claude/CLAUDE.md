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
- **shadcn/ui** - UIコンポーネント（Card, Button, Badge, DropdownMenu, Sheet, Dialog）
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

### アクセス情報ダイアログ機能

ヒーローセクションの会場カードクリックで表示される詳細アクセス情報：

- **電車アクセス**: 3つの路線（JR京葉線、JR総武線、京成千葉線）
- **バスアクセス**: 東京駅・羽田空港からの直通バス情報
- **Google Maps連携**: 住所クリックでGoogleマップを開く
- **レスポンシブ対応**: デスクトップ（3カラム）・モバイル（1カラム）自動切り替え

## 重要なコンポーネント

### 共通コンポーネント

- `src/components/common/Header.tsx` - デスクトップヘッダー
- `src/components/common/MobileMenu.tsx` - モバイルメニュー
- `src/components/common/TeamMemberCard.tsx` - メンバーカード

### ページコンポーネント

- `src/components/pages/MemberDetailPage.tsx` - メンバー詳細ページ
- `src/components/sections/HeroSection.tsx` - ヒーローセクション（アクセスダイアログ付き）

### アクセス情報関連

- `src/components/access/AccessInfoDialog.tsx` - アクセス情報ダイアログ
- `src/data/access-info.ts` - 幕張メッセのアクセス詳細データ
- `src/types/access-info.ts` - アクセス情報TypeScript型定義

### データファイル

- `src/data/sections/team.ts` - メンバーデータ
