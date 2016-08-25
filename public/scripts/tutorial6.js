var Comment = React.createClass({
    render: function () {
        var md = new Remarkable(); // remarkableっていうサードパーティのライブラリがmdをHTML化する.
        return ( // このままだとタグがブラウザに表示されてしまう. XSS対策.
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }
});