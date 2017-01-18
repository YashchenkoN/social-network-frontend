import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            // todo remove section ???
            <section>
                <div className="comment">
                    <Avatar className="comment-avatar" />
                    <div className="comment-text">
                        <p>I am just going to paste in a paragraph, then we will add another clearfix.</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </section>
        );
    }
}

export default Like