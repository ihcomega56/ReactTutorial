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
   
## Step 4: 状態をどこに持たせるか決めよう

* どのコンポーネントが変化するか、状態を保持するか考えよう

---

* Reactはヒエラルキーに応じて一方通行にデータを流す
* これが一番難しいところである

---

* やるべきことは次の4つとなる
    * 状態にもとづいてデータを渡すコンポーネントを定義する
    * 主となるような共通コンポーネント(状態が必要な全コンポーネントの上にくるもの)を見つける
    * 状態を持つべきなのが共通コンポーネントなのか、それ以外のヒエラルキーで上に来るコンポーネントなのか決める
    * 状態を持たせる適切なコンポーネントがなければ、新しく作ってヒエラルキーの適切な場所に追加する
* サンプルアプリケーションでやってみよう
    * `ProductTable`は状態に応じて商品リストをフィルタし、`SearchBar`は検索文字列とチェックボックスの状態を表示する
    * 共通コンポーネントは`FilterableProductTable`である
    * 検索文字列とチェックボックスの値は`FilterableProductTable`に属すのがよい

---

* `FilterableProductTable`に状態を持たせることが決まった
    * `getInitialState()`を`FilterableProductTable`に追加する
    * `getInitialState()`が`{filterText: '', inStockOnly: false}`を返すことで最初の状態を反映する
    * `filterText`と`inStockOnly`をpropとして`ProductTable`と`SearchBar`に渡す
    * propsを用いて`ProductTable`をフィルタし、`SearchBar`にformの値を設定する

## Step 5: 反対向きのデータフローも追加しよう

* `FilterableProductTable`の状態を更新しよう

---

* Reactでは、プログラムの動きが分かりやすいようデータの流れを明確にする
* 従来の双方向データバインディングよりコード量が増える

---

* ユーザが入力値を変更する度、それを反映すべく状態を変更したい
* コンポーネントは自分自身の状態のみを更新する
* `FilterableProductTable`は状態が更新されるべきときに都度`SearchBar`へコールバックを渡す
* `onChange`イベントが使える
* `FilterableProductTable`に渡されたコールバックが`setState()`を呼んで、アプリが更新される