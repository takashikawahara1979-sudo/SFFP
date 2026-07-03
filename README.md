# SEEDS for FUTURE Patients

空・飛行機とアニメ風の日本のいなか、「種をまく」をイメージしたサイトです。
トップページ＋4セクション（研究・症例報告・臨床治験・動画コンテンツ）で構成しています。

## フォルダ構成

```
seeds-for-future/
├── index.html              トップページ
├── research/index.html     研究
├── case-reports/index.html 症例報告
├── clinical-trials/index.html 臨床治験
├── videos/index.html       動画コンテンツ
├── manifest.json           アプリ情報（PWA：名前・アイコン・色）
├── sw.js                   オフライン対応（PWA）
├── assets/
│   ├── css/style.css       共通デザイン（色・フォント・レイアウト）
│   ├── js/main.js          共通の動き（雲・葉・カード拡大など）
│   ├── icons/              アプリアイコン（新芽ロゴ）
│   └── images/             画像を置く場所
└── README.md
```

## アプリのように使う（PWA）

このサイトは PWA 対応済みです。GitHub Pages などに公開したあと、スマホの
ブラウザでサイトを開き、メニューから「ホーム画面に追加」を選ぶと、
アプリのようにアイコンから起動できます（登録料・審査は不要）。

- iPhone（Safari）：共有ボタン → 「ホーム画面に追加」
- Android（Chrome）：メニュー → 「ホーム画面に追加」／「アプリをインストール」

※ PWA は `http://` ではなく `https://` の公開が必要です。GitHub Pages は
自動で https になるので、そのまま条件を満たします（ローカルのファイルを
ダブルクリックで開いた状態ではインストールできません）。
※ ファイルを更新したら、`sw.js` の `seeds-v1` の数字を上げると
新しい内容が確実に反映されます。

各セクションはフォルダの中の `index.html` なので、公開URLは
`.../research/` `.../videos/` のようにきれいになります。

## Web で公開する（GitHub Pages）

1. GitHub で **Public** リポジトリを作る（例: `seeds-for-future`）。
2. このフォルダの中身を**まるごと**アップロード（`index.html` が一番上にくるように）。
3. **Settings → Pages** → Source を `Deploy from a branch`、Branch を `main`、フォルダ `/ (root)` で Save。
4. 1〜2分待つと公開URLが出ます。
   `https://<ユーザー名>.github.io/<リポジトリ名>/`

VS Code から更新する場合:
```bash
git add .
git commit -m "4セクション構成に更新"
git push
```

## 直すときの目印

- **色を変える**：`assets/css/style.css` の先頭 `:root { ... }`。
  研究=`--research`、症例報告=`--case`、臨床治験=`--trials`、動画=`--video`。
- **各ページの中身**：それぞれの `index.html` の `<main class="content">` の中。
  `<article class="item">` を増やす／書き換えると項目が増やせます。
- **動画の埋め込み**：`videos/index.html` の `<div class="thumb">…</div>` を、YouTube の埋め込み `<iframe>` に置き換え。
- **見た目の確認**：VS Code の拡張「Live Server」を入れると、`index.html` を右クリック →「Open with Live Server」でその場でプレビューできます。

## 収録している動き

雲が流れる／飛行機が飛行機雲を引いて横切る／葉と種が舞い落ちる／見出し・カードの出現／
カードはホバー・タップで少し拡大／スクロールで各要素が現れる。
スマホ表示・キーボード操作・「動きを減らす」設定にも対応しています。
