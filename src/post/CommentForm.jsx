import React, {Component} from 'react';

class CommentForm extends Component {

    getInitialState() {
        return {
            value: ''
        }
    }

    addComment() {

        // todo
        $.ajax({

        });

        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <section>
                <div className="comment-form">
                    <form className="form-inline">
                        <div className="form-group">
                            <input value={this.state.value} type="text" className="form-control" placeholder="enter comment"/>
                        </div>
                        <button onClick={this.addComment} type="submit" className="btn btn-default">Add</button>
                    </form>
                </div>
                <div className="clearfix"></div>
            </section>
        );
    }
}

export default CommentForm