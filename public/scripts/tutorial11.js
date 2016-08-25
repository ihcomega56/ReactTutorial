// ハードコーディングしたデータをサーバから受け取った値に置き換える.
ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);