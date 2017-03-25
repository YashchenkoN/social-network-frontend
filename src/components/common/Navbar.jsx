import React, {Component, PropTypes} from "react";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {focused: 0};
    }

    clicked(index) {
        this.setState({focused: index});
    }

    render() {
        var self = this;
        var items = [
            {text: "Home", link: "/"},
            {text: "Members", link: "#"},
            {text: "Contact", link: "#"},
            {text: "Groups", link: "#"},
            {text: "Photos", link: "#"},
            {text: "Profile", link: "#"}
        ];

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav"> {
                            items.map(function (item, index) {
                                var style = '';

                                if (self.state.focused == index) {
                                    style = 'active';
                                }

                                return <li className={style} onClick={self.clicked.bind(self, index)}>
                                    <a href={item.link}>{item.text}</a>
                                </li>;
                            })
                        }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}