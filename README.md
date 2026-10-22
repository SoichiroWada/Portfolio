# Portfolio

Vue 3、Vue Router、Vite を使用した日本語・英語のポートフォリオです。
ハッシュ形式 URL を使用し、日本語のポートフォリオは `/#/`、英語は `/#/portfolio` で表示します。
旧日本語 URL `/#/portfoliojp` は `/#/` にリダイレクトします。
Resume は日本語が `/#/resumejp`、英語が `/#/resume` です。

## 必要な環境

- Node.js 24.21.0（`.nvmrc`）
- npm 12.1.0（`packageManager`）

Node.js / npm 本体はプロジェクトに同梱せず、環境側にインストールします。
nvm を利用している場合は `nvm install`、`nvm use` で Node.js を選択できます。

## セットアップ

```sh
npm ci
```

`package-lock.json` を管理し、通常のセットアップには `npm ci` を使用します。
依存を更新する際は対応する Node / peerDependencies を確認し、ロックファイルも更新します。

## 開発・ビルド

```sh
npm run dev
npm run lint
npm run build
npm run preview
```

- `dev` / `serve`: 開発サーバー（通常 http://localhost:5173）
- `lint`: 静的解析のみ。修正する場合は `npm run lint:fix`
- `build`: 本番用ファイルを `dist/` に生成
- `preview`: ビルド結果のローカル確認（通常 http://localhost:4173）。本番配信用ではありません。
- `start`: `dist/` を Express で配信（通常 http://localhost:8080）。先にビルドしてください。
  環境変数 `PORT` でポートを変更できます。

## ブラウザテスト

初回のみテスト用ブラウザを取得します。

```sh
npm run test:install
npm run build
npm test
```

Linux でブラウザのシステムライブラリが不足している場合は、環境管理者と確認して
`node scripts/playwright.js install --with-deps chromium` を使用してください。

全6ルートの表示・再読み込み、日英切替、戻る・進む、ナビゲーションを
デスクトップとモバイルの Chromium で検証します。外部 iframe とフォントへの
アクセスはテストで遮断するため、外部作品の稼働状況は別途手動確認が必要です。
テストはビルド済みの `dist/` をポート4173で配信します。

ブラウザは既定でプロジェクトの `.cache/ms-playwright/` に保存されます（Git 管理対象外）。
保存先を変更する場合は、インストールと実行の両方で同じ
`PLAYWRIGHT_BROWSERS_PATH` を指定してください。

## 配信設定

Firebase Hosting は既存の `firebase.json` を使用し、`dist/` を配信します。
アップグレード作業ではデプロイしていません。
Firestore / Realtime Database のルールは Hosting の設定とは別です。
特に `firestore.rules` の無条件 read/write は、利用前に実際の適用状況とアクセス制御を確認してください。

## 更新後の確認

```sh
npm run lint
npm run build
npm test
npm audit
```

現在の主要ブラウザを対象とし、Internet Explorer は対象外です。
