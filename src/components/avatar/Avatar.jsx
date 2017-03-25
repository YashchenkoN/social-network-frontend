import React, {Component, PropTypes} from 'react';

class Avatar extends Component {

    propTypes = {
        class: PropTypes.oneOf("comment-avatar"),
        user: PropTypes.object.isRequired
    };

    render() {

        const user = this.props.user;

        return (
            <a href={user.id} className={this.props.class + " pull-left"}>
                <img src={user.avatarUrl} alt=""/>
            </a>
        );
    }
}

export default Avatar