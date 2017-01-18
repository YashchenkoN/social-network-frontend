import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Post extends Component {

    propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        const post = this.props.post;

        const author = this.props.author;

        const comments = post.comments.map(comment => {
            return (
                <Comment comment={comment}/>
            )
        });

        return (
            <div className="panel panel-default post">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-2">
                            <a href={author.id} className="post-avatar thumbnail">
                                <img src={author.avatarUrl} alt=""/>
                                <div className="text-center">{author.name}</div>
                            </a>
                            <Like count={post.likesNumber}/>
                        </div>
                        <div className="col-sm-10">
                            <div className="bubble">
                                <div className="pointer">
                                    <p>{post.text}</p>
                                </div>
                                <div className="pointer-border"></div>
                            </div>
                            <p className="post-actions">
                                <a href="#">Comment</a> - <a href="#">Like</a> - <a href="#">Follow</a> - <a href="#">Share</a>
                            </p>

                            <CommentForm />

                            <div className="comments">
                                {comments}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post