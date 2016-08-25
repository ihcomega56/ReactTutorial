// JSX〜
var CommentBox = React.createClass({displayName: 'CommentBox', // Reactのコンポーネントを作る.
    render: function() { // HTMLに渡すReactのコンポーネントツリーを返す.
        return ( // divはDOMのノードとちょっと違う. Reactが扱うためのデータだと思えばよい.
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            ) 
        ); // HTMLを返さず, コンポーネントツリーを返せばよい. (It makes React composable!)
    }
});

ReactDOM.render( // コンポーネントの定義後に呼ばれる必要がある.
    React.createElement(CommentBox, null),
    document.getElementById('content')
);