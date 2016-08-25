var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render( // propsを介してデータをCommentListに渡す.
    <CommentBox data={data} />,
    document.getElementById('content')
);