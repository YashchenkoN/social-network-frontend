import React, {Component} from "react";
import {Drawer, AppBar, MenuItem} from "material-ui";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        var items = ["Home", "News", "Photos", "Friends", "About"];
        return (
            <div>
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>News</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Photos</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Friends</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>About</MenuItem>
                </Drawer>
                <AppBar title="App Bar Example" onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
            </div>
        );
    }
}