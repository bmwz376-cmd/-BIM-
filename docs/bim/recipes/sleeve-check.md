---
title: スリーブチェック - BIM活用レシピ
description: BIMを使った設備貫通孔（スリーブ）の位置・サイズ確認
tags:
  - BIM活用
  - レシピ
  - 設備工事
---

# スリーブチェック

## 📋 概要

**目的**: 躯体に設ける設備貫通孔（スリーブ）が構造部材と干渉しないか事前確認する

**工程**: 躯体工事前（スリーブ設置前）

**担当**: 元請（施工管理）+ 設備専門工事会社 + 躯体専門工事会社

**所要時間**: 1フロア 3-5時間

## 🎯 前提知識（施工図）

- **スリーブ**: 躯体を貫通する配管用の穴（または穴あけ用の筒）
- **設備図**: 配管・ダクトルートを示した図面
- **躯体図**: 柱・梁・スラブの位置を示した図面
- **貫通補強**: スリーブ周辺の鉄筋補強
- **禁止エリア**: スリーブを設置できない範囲（梁の中央など）

!!! warning "重要"
    スリーブは躯体コンクリート打設前に設置するため、ミスは重大な手戻りにつながる

## 📸 図解

<div class="image-zoom">
  <img src="../../assets/images/pdfs/施工BIM③/page_011.png" alt="スリーブチェックの例">
  <p class="caption">図1: BIMモデルでのスリーブと構造の干渉チェック</p>
</div>

<div class="five-point-check">
  <h4>講師が必ず言う5点</h4>
  <ol>
    <li><strong>工程</strong>: 配筋前、遅くとも型枠組立前に完了</li>
    <li><strong>担当</strong>: 元請が調整役、設備と躯体の専門工事会社が協力</li>
    <li><strong>目的</strong>: スリーブが躯体の鉄筋・構造に干渉しないか確認</li>
    <li><strong>施工図との関係</strong>: 設備図と躯体図の情報を統合してチェック</li>
    <li><strong>やらないと</strong>: コンクリート打設後に穴あけ→構造強度低下、大幅な手戻り</li>
  </ol>
</div>

## 📝 手順

### 1. 準備
- 設備図（配管ルート図）の最新版入手
- 躯体図の最新版入手
- スリーブリスト作成（位置、サイズ、種別）
- BIMモデルに統合

### 2. スリーブ配置
BIMモデル上でスリーブを配置：
- 設備図の情報に基づき位置決定
- サイズ確認（配管径 + 余裕）
- 勾配の確認（排水管など）

### 3. 干渉チェック

```
チェック項目：
✓ スリーブと鉄筋の干渉
✓ スリーブと梁・柱主要部の干渉
✓ スリーブサイズの構造制限
✓ 複数スリーブの間隔
✓ 貫通補強の必要性
```

### 4. 結果判定

干渉が見つかった場合：

| 重要度 | 対応 |
|--------|------|
| **重大** | スリーブ位置変更または配管ルート変更 |
| **中度** | 鉄筋配置調整または補強追加 |
| **軽微** | 現場調整可能（要記録） |

### 5. 図面への反映
- 承認されたスリーブ位置を施工図に記載
- スリーブリストを更新
- 関係者に配布

## 💡 講師ノート

- **最重要**: スリーブの位置ミスは後から直せない
- 設備と躯体の両方の施工図が必要
- BIMがないと3D的な干渉は見つけにくい
- 「この程度なら大丈夫」は絶対NG
- スリーブリストは現場の必須資料

## 📖 用語

- **スリーブ（Sleeve）**: 配管貫通用の穴または筒状部材
- **貫通補強（Penetration Reinforcement）**: スリーブ周辺の追加鉄筋
- **配管ルート（Piping Route）**: 配管の経路
- **勾配（Slope/Gradient）**: 排水のための傾き
- **クリアランス（Clearance）**: 配管と躯体の隙間

## ❌ NG事例

**ケース1: 梁の主筋とスリーブが干渉**
- 結果: コンクリート打設後に発覚、はつり作業と補強で2週間遅延
- 原因: 設備図と躯体図を重ねて確認しなかった

**ケース2: スリーブサイズ不足**
- 結果: 配管が入らず、穴を広げて構造補強が必要に
- 原因: 配管径に対する余裕を考慮していなかった

**ケース3: スリーブ勾配ミス**
- 結果: 排水が流れず、配管をやり直し
- 原因: BIMモデルで勾配を確認していなかった

## ✅ 小テスト

<div class="quiz-container">
  <div class="quiz-question">
    <h4>問1: スリーブチェックで最も重要な確認事項は？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q1" value="wrong1"> スリーブの色</label>
      <label><input type="radio" name="q1" value="correct"> 構造部材（鉄筋・梁）との干渉</label>
      <label><input type="radio" name="q1" value="wrong2"> スリーブの材質</label>
      <label><input type="radio" name="q1" value="wrong3"> スリーブの納入日</label>
    </div>
  </div>

  <div class="quiz-question">
    <h4>問2: スリーブ位置ミスが発覚した場合の最悪のタイミングは？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q2" value="wrong1"> 配筋前</label>
      <label><input type="radio" name="q2" value="wrong2"> 型枠組立前</label>
      <label><input type="radio" name="q2" value="correct"> コンクリート打設後</label>
      <label><input type="radio" name="q2" value="wrong3"> 設備図作成時</label>
    </div>
  </div>

  <div class="quiz-question">
    <h4>問3: スリーブチェックに必要な施工図は？</h4>
    <div class="quiz-options">
      <label><input type="radio" name="q3" value="wrong1"> 躯体図のみ</label>
      <label><input type="radio" name="q3" value="wrong2"> 設備図のみ</label>
      <label><input type="radio" name="q3" value="correct"> 躯体図と設備図の両方</label>
      <label><input type="radio" name="q3" value="wrong3"> 仕上図のみ</label>
    </div>
  </div>

  <button class="quiz-submit">採点する</button>
</div>

---

<div style="text-align: center; margin-top: 2rem;">
  <a href="structure-check/" class="md-button">← 前のレシピ</a>
  <a href="index/" class="md-button md-button--primary">レシピ一覧に戻る</a>
</div>
