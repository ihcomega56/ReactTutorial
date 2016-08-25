// ここまではコンポーネントが自分自信に1回だけrenderされていた. propsはイミュータブル.
// stateを使ってミュータブルな状態を実現する.
var CommentBox = React.createClass({
    getInitialState: function () { // getInitialState() は1回だけ実行される.
        return {data: []}
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
});