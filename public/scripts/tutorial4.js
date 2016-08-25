var Comment = React.createClass({
    render: function () {
        return ( // JSの構文を括弧でくくってJSXの中に入れる.
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});