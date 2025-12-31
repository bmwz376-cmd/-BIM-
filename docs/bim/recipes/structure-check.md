---
title: 躯体図チェック - BIM活用レシピ
description: BIMモデルを使った躯体図の干渉チェックと納まり確認
tags:
  - BIM活用
  - レシピ
  - 躯体工事
---

# 躯体図チェック

## 📋 概要

**目的**: BIMモデルを使って躯体図の干渉や納まり不具合を施工前に発見する

**工程**: 躯体工事（鉄筋・型枠・コンクリート）

**担当**: 元請（施工管理）+ 躯体専門工事会社

**所要時間**: 1フロア 2-4時間

## 🎯 前提知識（施工図）

このレシピを実行する前に、以下の施工図知識が必要です：

- **躯体図**: 柱・梁・スラブの配置と寸法
- **配筋図**: 鉄筋の配置、径、ピッチ
- **納まり**: 構造部材同士の取り合い
- **干渉**: 部材同士がぶつかる状態
- **通り芯**: 建物の基準線（X1, Y1など）
- **FL（フロアレベル）**: 各階の床高さ基準

!!! warning "施工図が分からないと"
    躯体図を理解していないと、BIMモデルで何をチェックすべきか分かりません

## 📸 図解

<div class="image-zoom">
  <img src="../../assets/images/pdfs/施工BIM③/page_007.png" alt="躯体図チェックの例">
  <p class="caption">図1: BIMモデルでの躯体干渉チェック画面</p>
</div>

<div class="five-point-check">
  <h4>講師が必ず言う5点</h4>
  <ol>
    <li><strong>工程</strong>: 躯体工事着手前（配筋前）に実施</li>
    <li><strong>担当</strong>: 元請の施工管理者と躯体専門工事会社</li>
    <li><strong>目的</strong>: 型枠・鉄筋の干渉を事前に発見し、手戻りを防ぐ</li>
    <li><strong>施工図との関係</strong>: 躯体図と配筋図の情報をBIMモデル化してチェック</li>
    <li><strong>やらないと</strong>: 現場で鉄筋が入らない、型枠が組めない等の手戻りが発生</li>
  </ol>
</div>

## 📝 手順

### 1. 準備

- 躯体図・配筋図を最新版に更新
- BIMモデルを躯体図の情報で作成/更新
- チェック範囲を決定（通常は1フロアずつ）

### 2. モデル確認

```
✓ 柱・梁・スラブの位置が躯体図と一致しているか
✓ 配筋の本数・径・ピッチが配筋図と一致しているか
✓ かぶり厚さが確保されているか
✓ 定着長・重ね長が確保されているか
```

### 3. 干渉チェック実行

BIMソフトの干渉チェック機能を使用：

1. チェック対象を選択（柱 vs 梁、梁 vs スラブ など）
2. クリアランス設定（通常は0mm）
3. チェック実行
4. 干渉リスト出力

### 4. 結果確認と対策

各干渉箇所について：

- 干渉の種類を判定（重大 / 軽微）
- 納まり変更案を検討
- 施工図への反映方法を決定
- 関係者に共有

### 5. 施工図更新

- BIMモデルでの検討結果を施工図に反映
- 変更箇所を赤マーク
- 専門工事会社に確認依頼

## 💡 講師ノート

受講者に伝えるべきポイント：

- 「BIMチェックは施工図の品質を上げるツール」と強調
- 施工図が正確でなければBIMも正確にならない
- チェックは繰り返し実施（施工図更新の度に）
- 干渉ゼロが目標ではなく、重大な干渉を見つけることが目標
- 結果は必ず施工図に反映する（BIMだけで終わらせない）

## 📖 用語

- **干渉チェック（Clash Detection）**: BIMモデル上で部材同士の衝突を検出する機能
- **クリアランス（Clearance）**: 部材間の最小空き寸法
- **かぶり厚さ（Concrete Cover）**: コンクリート表面から鉄筋までの距離
- **定着長（Anchorage Length）**: 鉄筋をコンクリートに固定するための長さ
- **納まり（Detail/Coordination）**: 複数の部材が適切に組み合わさること

## ❌ NG事例

### やらないとこうなる

**ケース1: 柱と梁の鉄筋干渉**
- 現象: 柱の主筋と梁の主筋が同じ位置に配置されていた
- 結果: 現場で鉄筋が組めず、1日工程遅延
- 原因: BIMチェックをせずに施工図を承認

**ケース2: スラブ開口部の位置ミス**
- 現象: スラブ開口が梁とかぶっていた
- 結果: 型枠を作り直し、2日遅延
- 原因: 設備図との照合をBIMで行わなかった

**ケース3: かぶり厚さ不足**
- 現象: 外壁のかぶり厚さが基準値以下
- 結果: 鉄筋位置をやり直し、検査の再実施
- 原因: BIMモデルに基準値チェックを設定していなかった

<div class="ng-case">
  <h4>⚠️ 最も多い失敗</h4>
  <p><strong>「BIMチェックして問題ないから大丈夫」と思ったが、施工図自体が間違っていた</strong></p>
  <p>→ BIMは施工図の正確性に依存します。必ず施工図の精度を確保してからBIMモデル化すること</p>
</div>

## ✅ 小テスト

<div class="quiz-container">
  <div class="quiz-question">
    <h4>問1: 躯体図チェックを実施する最適なタイミングは？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q1" value="wrong1"> 設計図が完成した直後</label>
      <label><input type="radio" name="q1" value="correct"> 躯体工事着手前（配筋前）</label>
      <label><input type="radio" name="q1" value="wrong2"> 配筋が終わった後</label>
      <label><input type="radio" name="q1" value="wrong3"> コンクリート打設の直前</label>
    </div>
  </div>

  <div class="quiz-question">
    <h4>問2: BIMでの躯体図チェックで最も重要なことは？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q2" value="wrong1"> BIMソフトの操作が速いこと</label>
      <label><input type="radio" name="q2" value="correct"> 施工図の情報が正確であること</label>
      <label><input type="radio" name="q2" value="wrong2"> 3D表示がきれいなこと</label>
      <label><input type="radio" name="q2" value="wrong3"> 干渉が一つもないこと</label>
    </div>
  </div>

  <div class="quiz-question">
    <h4>問3: 干渉チェックで発見した問題の対処方法として正しいのは？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q3" value="wrong1"> BIMモデルだけを修正する</label>
      <label><input type="radio" name="q3" value="wrong2"> そのまま施工して現場で対応する</label>
      <label><input type="radio" name="q3" value="correct"> BIMで検討し、結果を施工図に反映する</label>
      <label><input type="radio" name="q3" value="wrong3"> 次回のチェックで確認する</label>
    </div>
  </div>

  <button class="quiz-submit">採点する</button>
</div>

## 🔗 関連レシピ

- [スリーブチェック](sleeve-check.md) - 設備貫通孔の確認
- [BIM活用レシピ一覧](index.md) - その他のレシピ

---

<div style="text-align: center; margin-top: 2rem;">
  <a href="../sleeve-check/" class="md-button">次のレシピ: スリーブチェック →</a>
</div>
