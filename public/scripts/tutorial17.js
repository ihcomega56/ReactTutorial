// ビューの状態がコンポーネントと異なるのはあまりよくない.
// Reactでは, 初期化の時以外もコンポーネントが常にビューの状態をあらわす.
var CommentForm = React.createClass({
    getInitialState: function () {
        return {author: '', text: ''};
    },
    handleAuthorChange: function (e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault(); // ブラウザに, サブミット時のデフォルト動作をさせない.
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!author || !text) { return; }
        this.setState({ author: '', text:'' });
    },
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
});