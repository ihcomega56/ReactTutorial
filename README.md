# チュートリアル
* [Tutorial](https://facebook.github.io/react/docs/tutorial.html)やった: リポジトリの中身  
[日本語版](https://facebook.github.io/react/docs/tutorial-ja-JP.html)もあった...


# Thinking in React

* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)読んだ: 下にメモ  

## Step 1: UIをコンポーネントのヒエラルキーに落とし込もう

* 四角でかこんでみよう
* 関数やオブジェクトを定義する要領で切り分けよう
* 例 single responsibility principle (https://en.wikipedia.org/wiki/Single_responsibility_principle) : 1コンポーネント1機能という考え方
* UIとデータは情報の構造が同じだとよい  

---

* 例だとこんなわけかた
    * `FilterableProductTable` オレンジ : 全体
    * `SearchBar` 青 : ユーザの入力を受け付ける
    * `ProductTable` 緑 : ユーザの入力値をフィルタリング・表示する
    * `ProductCategoryRow` ターコイズ : カテゴリごとのヘッダーを表示する
    * `ProductRow` 赤 : 商品の行を表示する
* ヘッダーを`ProductTable`の一部とするか, コンポーネントを儲けるかは好みと状況の問題っぽい
* ヒエラルキーは書いてあるとおり  

## Step 2: 静的に作ろう

* 静的なもの・対話式のものを切り離して考えよう
* 静的なものは書く量が多いが頭をあまり使わない
* 対話式のものは頭を使うが書く量は多くない  

---

* propsで親から子へデータを渡す
* stateはまだ使ってはならぬ  

---

* トップダウンでもボトムアップでも作れる (ヒエラルキーの上からでも下からでも)
* 複雑じゃなければトップダウン、大きなプロジェクトだとボトムアップがやりやすい  

---

* ReactDOM.render()を呼ぶ度に表示が更新される
* [React docs](https://facebook.github.io/react/docs/)を見よう  

---

* propsとstateの違いは大事  

## Step 3: UIの状態を最小単位で定義しよう

* stateでUIを対話式にしよう  

---

* まずはミュータブルな状態の最小単位を考えよう
* DRY
* 計算は全てオンデマンドで行おう (たとえばTODOリストの件数が知りたい時、常に件数を保持する変数を持つのではなく、必要な時にリストの数をカウントしよう)  

---

* サンプルアプリケーションで持つもの
    * オリジナルとなる商品リスト
    * ユーザが入力した検索文字列
    * チェックボックスの値
    * フィルタされた商品リスト  

---

* stateかどうかは3つの確認で分かる
    * 親コンポーネントからpropsを介して渡されるか？ -> stateじゃないはず
    * 時間が経過しても変化しないか？ -> stateじゃないはず
    * 他のstateやpropsから計算で割り出せる値か？ -> stateじゃないはず  

---

* サンプルアプリケーションのstateは何か考える
    * オリジナルとなる商品リストはpropsで渡されるのでstateではない
    * 検索文字列とチェックボックスの値は変化しうるし計算で割り出せないのでstateである
    * フィルタされた商品リストはオリジナル商品リスト、検索文字列、チェックボックスの値から分かるのでstateではない  

---

* サンプルアプリケーションのstateは次の2つ
    * ユーザが入力した検索文字列
    * チェックボックスの値  