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

## stylefmtの利用について
stylefmtにはextendsが正しく処理されないバグがあるようなので、設定ファイルをJS形式にし、以下のようにして利用してください。

```js:stylelint.config.js
// 共通ルールを読み込む
var base = require('@gmo-media/stylelint-config');

// ルールを追加・上書きする
var rules = Object.assign({}, base.rules, {
    'function-name-case': ['lower', {
        'ignoreFunctions': "DXImageTransform.Microsoft.gradient"
    }],
    'selector-max-compound-selectors': 6,
    'indentation': 4
});

// ルールを削除する
delete rules['selector-no-qualifying-type'];

module.exports = {
    'rules': rules
};
```
