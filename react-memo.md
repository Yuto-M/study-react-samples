- コンポーネント間で特定のstateを共有したいときは、親コンポーネントがstateを保持し、そのstateを子コンポーネントに渡してあげる形をとるのがよい。（トップダウン型データフローまたは単一方向データフローという）
https://ja.reactjs.org/docs/lifting-state-up.html
https://ja.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down

- props もしくは state から作りだす事のできるデータについては、おそらく state に保持すべきではないでしょう

- props.childrenを使用すると受け取った子要素を出力できる
https://ja.reactjs.org/docs/composition-vs-inheritance.html

- reactの設計
  - UIをコンポーネントの階層構造に落とし込む