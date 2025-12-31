# 施工BIM教材サイト - Construction BIM Learning Platform

外国人向けに日本の施工BIMを教えるための教材サイトです。

**重要**: 日本の施工BIMは「施工図が分からないと使えない」技術であることを前提としています。

## 🎯 プロジェクト概要

このサイトは、講師が外国人受講者に日本の施工BIMを教える際に使用する教材プラットフォームです。

### 特徴

- ✅ 施工図の基礎から段階的に学べる構成
- ✅ 実務に即したBIM活用レシピ集
- ✅ PDFから抽出した図解画像が豊富
- ✅ 講師ノートと5点チェックリスト
- ✅ 小テストによる理解度確認
- ✅ 画像拡大機能・用語ツールチップ
- ✅ 多言語対応の準備（JP/EN、将来的にMM）

## 🛠️ 技術スタック

- **Static Site Generator**: MkDocs + Material for MkDocs
- **PDF処理**: PyMuPDF (fitz)
- **言語**: Python 3.12+
- **ビルドツール**: Make
- **デプロイ**: GitHub Pages

## 📁 ディレクトリ構造

```
.
├── data/
│   ├── pdfs/              # 元PDFファイル
│   └── metadata/          # PDF画像のメタデータ（YAML）
├── docs/                  # サイトのソースファイル
│   ├── assets/
│   │   ├── css/          # カスタムCSS
│   │   ├── js/           # JavaScript（画像拡大・小テスト）
│   │   └── images/       
│   │       └── pdfs/     # PDFから抽出した画像
│   ├── shop-drawing/     # 施工図の基礎
│   ├── bim/              # 施工BIM
│   │   └── recipes/      # BIM活用レシピ
│   ├── ng/               # NG事例集
│   ├── glossary/         # 用語集
│   ├── templates/        # テンプレート集
│   ├── instructor/       # 講師用ガイド
│   └── index.md          # トップページ
├── scripts/
│   └── extract_pdf_images.py  # PDF画像抽出スクリプト
├── site/                 # ビルド成果物（自動生成）
├── mkdocs.yml            # MkDocs設定
├── requirements.txt      # Python依存関係
├── Makefile              # ビルド・開発コマンド
├── AGENTS.md             # AI作業ルール
└── README.md             # このファイル
```

## 🚀 セットアップ

### 前提条件

- Python 3.12以上
- pip

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/bmwz376-cmd/-BIM-.git
cd -BIM-

# 依存関係をインストール
make install
```

## 📦 使い方

### PDF画像抽出

```bash
# data/pdfs 内のPDFファイルから画像を抽出
make extract
```

抽出された画像は `docs/assets/images/pdfs/` に保存されます。

### ローカルプレビュー

```bash
# 開発サーバーを起動（ホットリロード対応）
make dev
```

ブラウザで http://localhost:8000 にアクセスしてください。

### ビルド

```bash
# 静的サイトをビルド
make build
```

成果物は `site/` ディレクトリに生成されます。

### テスト（Lint）

```bash
# コードの品質チェック
make test
```

### クリーンアップ

```bash
# ビルド成果物と抽出画像を削除
make clean
```

### デプロイ

```bash
# GitHub Pagesにデプロイ
make deploy
```

## 🎨 カスタマイズ

### ページの追加

1. `docs/` 配下に Markdown ファイルを作成
2. `mkdocs.yml` の `nav` セクションに追加
3. テンプレートに従ってコンテンツを記述（詳細は `AGENTS.md` 参照）

### 画像の使用

```markdown
<!-- 基本的な使用 -->
![説明](../assets/images/pdfs/施工BIM③/page_005.png)

<!-- 拡大可能な画像 -->
<div class="image-zoom">
  <img src="../assets/images/pdfs/施工BIM③/page_005.png" alt="説明">
  <p class="caption">図1: キャプション</p>
</div>
```

### 小テストの追加

```markdown
<div class="quiz-container">
  <div class="quiz-question">
    <h4>問1: 質問文</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q1" value="wrong"> 選択肢A</label>
      <label><input type="radio" name="q1" value="correct"> 選択肢B（正解）</label>
    </div>
  </div>
  <button class="quiz-submit">採点する</button>
</div>
```

## 📚 主要コマンド

| コマンド | 説明 |
|---------|------|
| `make help` | 利用可能なコマンド一覧を表示 |
| `make install` | 依存関係をインストール |
| `make extract` | PDFから画像を抽出 |
| `make dev` | ローカルプレビュー起動 |
| `make build` | サイトをビルド |
| `make test` | Lintとテストを実行 |
| `make clean` | ビルド成果物を削除 |
| `make deploy` | GitHub Pagesにデプロイ |

## 🤖 AI開発者向け

AIエージェントがこのプロジェクトで作業する際は、必ず `AGENTS.md` を参照してください。

重要なルール：
- 小さく作って動かす（一度に大きな変更をしない）
- 変更後は必ず `make build` が成功することを確認
- コミットメッセージは `feat:`, `fix:`, `docs:` などのプレフィックスを使用
- 大規模リファクタは禁止

## 📖 学習コンテンツ

### 1. 施工図の基礎
- 用語集（躯体、納まり、干渉など）
- 施工図の種類と読み方
- 図面記号の意味

### 2. 施工BIM全体像
- 工程別BIM活用マップ
- データ連携の流れ
- 各工程での注意点

### 3. BIM活用レシピ
- 躯体図チェック
- スリーブチェック
- 鉄筋納まり検討
- 鉄骨二次部材調整
- その他実務レシピ

### 4. NG事例集
- よくある失敗とその対策
- 手戻りが発生したケース

### 5. 用語集
- 日本語・英語対訳
- 施工BIM関連用語50語以上

### 6. テンプレート
- 議事録
- 指摘票
- モデル受領チェックリスト

### 7. 講師用ガイド
- 画像の使い方
- 質問の投げ方
- 理解度判定

## 📄 ライセンスと出典

### 使用している資料

このサイトで使用している図版は、以下の資料から引用しています：

- **施工BIMの活用ガイド 増補版**  
  一般社団法人 日本建設業連合会 建築生産委員会 BIM部会

- **施工BIMのスタイル 事例集2024**  
  一般社団法人 日本建設業連合会 建築生産委員会 BIM部会

教育目的での使用であり、各ページに出典を明記しています。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-lesson`)
3. 変更をコミット (`git commit -m 'feat: 新しいレッスンを追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-lesson`)
5. プルリクエストを作成

## 📞 サポート

質問や問題がある場合は、GitHub Issuesを使用してください。

## 🔄 バージョン履歴

- **v1.0.0** (2025-12-31)
  - 初回リリース
  - MkDocs + Material基盤
  - PDF画像抽出機能
  - 躯体図チェック・スリーブチェックレシピ
  - 画像拡大・小テスト機能

---

**最終更新**: 2025-12-31  
**製作**: BIM Education Team
