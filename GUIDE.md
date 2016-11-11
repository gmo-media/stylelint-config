# 利用およびルール作成にあたってのガイド

## Rule sets
用途に応じて複数のルールセットを作成します。

### `loose`
* GMOメディアで決めたルールのうち、上書き可能なルールのみを定義しています。

### `regular`
* GMOメディアで決めたルールです。

### `strict`
* GMOメディアで決めたルールに、推奨設定を加えたものです。

## 更新について
* Issueを立て、設定の変更を理由つきでリクエストします。
* 別の媒体担当者からの意見を元に、採用するかどうか検討します。
* 採用したら設定を変更し、マイナーバージョンを上げて公開します。

## 上書きできないルールについて
stylelint には true しか指定できないルールがいくつかあります。
false を指定して上書きすることができないため、設定を無効化したい場合は以下のようにしてください。

```js:stylelint.config.js
// 共通ルールを読み込む
var base = require('@gmo-media/stylelint-config');

// ルールを追加・上書きする
var rules = Object.assign({}, base.rules, {
    'indentation': 4
});

// true しか指定できないルールを削除する
delete rules['declaration-no-important'];

module.exports = {
    rules: rules
};
```
