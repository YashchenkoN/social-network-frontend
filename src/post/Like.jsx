import React, {Component, PropTypes} from 'react';

export default class Like extends Component {

    propTypes = {
        count: PropTypes.number.isRequired
    };

    render() {
        const count = this.props.count;

        return (
            <div className="likes text-center">{count} Likes</div>
        );
    }
}