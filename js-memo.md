# Reactのおまじないから始めるimportの書き方
reactを使う時、最初におまじない的なノリで下記のように書いているやつらの意味をググってみた。せっかくだからブログに書く。
```
import React, { Component } from "react";  // ①
import ReactDOM from "react-dom";   // ②
```

まず、簡単な②の方から説明していく。  
②は、下記構文を使って書かれている。
```
import defaultExport from "module-name"; // 構文
import ReactDOM      from "react-dom"  ;   // ②（構文と比較するためスペースで位置をあわせてあります。）
```
`defaultExport`は、モジュール側(export文を使って何かをexportしているファイル側)で`export default`されたものにつける名前のこと。
`module-name`は、簡単に言えばexport文を使用して関数とか、オブジェクトをエクスポートしているjsファイルのこと。
なので②は、node_modules/react-dom.jsファイルで`export default`されているものに`ReactDOM`という名称をつけているということになるが、実際調べてみると`node_modules/react-dom.js`はなくて、代わりにindex.jsがあり、そのファイルの中では、`module.exports`でエクスポートしている。
まず、react-dom.jsというファイルがない件については多分、index.jsファイルがあるときは、index.jsを読み込むようになってるっぽい。（ググったけどいまいちよくわからんかった、けど多分そう）
それで、`export default`じゃなくて、`module.exports`なのは、下記のような対応があるかららしい。
https://qiita.com/rooooomania/items/4c999d93ae745e9d8657
|CommonJS|Export/Import|
|---|---|
|module.exports = function() {...}|export default function() {...}|
だから②は、`node_modules/react-dom/index.js`で`module.exports`されているものに`ReactDOM`っていう名前をつけてるってことになる。

次に①のほうの説明に行きます。
```
import React, { Component } from "react";  // ①
```
これの`React`のところは`node_modules/react/index.js`の`moduel.exports`されているものに`React`っていう名前をつけてるってことだと思うからそんな感じで。
新しく出てきているのが`{ Component }`の部分。
これは下記構文を使っている。
```
import { export }    from "module-name"; // 構文（スペースで位置を合わせています）
import { Component } from "react";  // ①
```
でまた、`node_modules/react/index.js`を読んで、なんか`node_modules/react/cjs/react/development.js`とか言うのを読んでみると`function Component() {~~~}`とか言うのが定義されている。ただこの`function Component`がexportされているわけではなく、`React`っていう変数に格納されてその変数が`module.exports`されていた。
ぐぐってみたら、別にexportで明示的にexportされていなくても、モジュール全体(今回の場合で言えば、`node_modules/react/index.js`ファイルのこと)がエクスポートされていればそのオブジェクトが使えるらしい。

「おまじないとかで誤魔化すからダメなんだ！！」とかいうのたまにみるからおまじない調べてみたけど、別におまじないでもいいかなって思った。調べてみて。

