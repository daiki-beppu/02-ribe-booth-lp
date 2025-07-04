# CLAUDE.md

このファイルはClaude Codeがこのリポジトリで作業する際のガイダンスを提供します。

## 開発コマンド

このプロジェクトは **bun** を使用：

- `bun run dev` - 開発サーバー起動
- `bun run build` - プロダクションビルド
- `bun run lint` - ultraciteでコードチェック（Biomeベース）
- `bun run format` - ultraciteでコードフォーマット
- `bun run preview` - 本番ビルドプレビュー

## プロジェクト概要

React + TypeScript + Vite で作られたプログラミングブース用ランディングページ

### 技術スタック

- **React 19** + TypeScript
- **React Router DOM v7** - ページルーティング
- **Vite** - 高速ビルドツール
- **shadcn/ui** - UIコンポーネント（Card, Button, Badge, DropdownMenu, Sheet, Dialog, AspectRatio, Popover, Separator）
- **Tailwind CSS v4** - スタイリング
- **Lucide React** - アイコン
- **ultracite** - lint/formatツール（Biomeベース）

### ページ構成

- `/` - ホームページ（全セクション）
- `/member/:memberName` - メンバー詳細ページ

### ナビゲーション

- **デスクトップ**: 固定ヘッダー + ドロップダウンメニュー
- **モバイル**: 右下FAB + ボトムシート

### チームメンバー

5名のメンバー、各自に専用カラーテーマ：

- **トムランド** (blue) - 投資おたくエンジニア・リーダー
- **まるの** (red) - 家電エンジニア・サブリーダー
- **ももちこ** (orange) - 元鳶職→Webエンジニア
- **KOBA** (green) - 記憶力としらべ魔の変態エンジニア
- **snowdrop** (yellow) - ものづくり大好き設計エンジニア

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

### 画像カルーセル機能

experience-sectionに実装された高機能カルーセル：

- **React View Transitions**: useTransition、startTransition、View Transition API活用
- **自動再生**: 4秒間隔での自動切り替え（再生/一時停止ボタン付き）
- **滑らかなアニメーション**: 700msトランジション、アクティブ画像の拡大・明度調整
- **インタラクティブ操作**: 左右ナビゲーションボタン、ドットナビゲーション
- **画像管理**: 5枚の体験画像を統一表示（pricing-sectionから移動）
- **レスポンシブ対応**: 全デバイスで最適な表示とタッチ操作

### メンバー詳細ページ

各メンバーの詳細情報を表示：

- **基本情報**: 名前、タイトル、経験、スキル
- **詳細プロフィール**: 具体的な活動内容
- **ポートフォリオ**: サービス・プロジェクト・作品の3カテゴリ
- **他メンバーへのリンク**: 横断的なナビゲーション
- **カラーテーマ**: 各メンバー専用のカラーパレット

### メンバーデータアーキテクチャ

- **基本データ**: ホームページ・詳細ページ共通の基本情報
- **拡張データ**: 詳細ページ専用の詳細情報
- **データマージ**: `getMemberByName`関数で基本+拡張データを統合

## 重要なコンポーネント

### 共通コンポーネント

- `src/components/common/header.tsx` - デスクトップヘッダー
- `src/components/common/mobile-menu.tsx` - モバイルメニュー
- `src/components/common/team-member-card.tsx` - メンバーカード
- `src/components/common/cta-button.tsx` - CTA（Call to Action）ボタン
- `src/components/common/feature-card.tsx` - フィーチャーカード
- `src/components/common/image-carousel.tsx` - 高機能画像カルーセル

### ページコンポーネント

- `src/components/pages/member-detail-page.tsx` - メンバー詳細ページ
- `src/components/sections/hero-section.tsx` - ヒーローセクション（アクセスダイアログ付き）
- `src/components/sections/team-section.tsx` - チームセクション
- `src/components/sections/pricing-section.tsx` - 料金セクション
- `src/components/sections/experience-section.tsx` - 体験セクション
- `src/components/sections/concept-section.tsx` - コンセプトセクション

### アクセス情報関連

- `src/components/access/access-info-dialog.tsx` - アクセス情報ダイアログ
- `src/data/access-info.ts` - 幕張メッセのアクセス詳細データ
- `src/types/access-info.ts` - アクセス情報TypeScript型定義

### データファイル

- `src/data/sections/team.ts` - メンバーデータ（基本+拡張）
- `src/data/sections/hero.ts` - ヒーローセクションデータ
- `src/data/sections/pricing.ts` - 料金セクションデータ
- `src/data/sections/experience.ts` - 体験セクションデータ
- `src/data/sections/concept.ts` - コンセプトセクションデータ

## 開発ルール

### ファイル名規則

- **コンポーネント**: kebab-case（例：`team-member-card.tsx`）
- **データファイル**: kebab-case（例：`team.ts`）
- **型定義**: kebab-case（例：`team.ts`）

### コーディング規則

- **array keys**: 意味のあるkeyを使用（`key={index}`は避ける）
- **型安全**: TypeScriptの型定義を活用
- **レスポンシブ**: モバイルファーストでブレークポイント対応
- **アクセシビリティ**: altテキスト、aria-labelなどを適切に設定

### lint/format

- **ultracite**: BiomeベースのlintとformatツールをプロジェクトVMで使用
- **biome.jsonc**: プロジェクト固有のルール設定
- **自動修正**: `bun run lint`と`bun run format`でコード品質を保持

## 重要な注意点

1. **メンバーデータの更新**: 詳細ページのみ更新する場合は`extendedMemberData`を使用
2. **ホームページ**: 基本データ（`basicMembersData`）のみ使用
3. **ルーティング**: React Router DOM v7のLinkとuseParamsを使用
4. **カラーテーマ**: 各メンバーに専用のカラーパレットを適用
5. **レスポンシブ**: デスクトップ・モバイル両方に最適化
6. **lint品質**: コミット前に必ずlint/formatを実行
7. **型安全**: TypeScriptの型定義を必ず活用

# important-instruction-reminders

- 既存ファイルの編集を優先し、新規ファイル作成は最小限に
- propsによるデータ注入パターンを維持
- kebab-case命名規則を厳守
- 意味のあるarray keyを使用
- lint/formatエラーを必ず解消
- レスポンシブデザインを考慮
- アクセシビリティを重視