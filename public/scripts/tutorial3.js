var CommentBox = React.createClass({
    render: function () {
        return ( // JSXコンパイラがHTMLタグを書き換えるからglobalな名前空間が汚されない.
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});