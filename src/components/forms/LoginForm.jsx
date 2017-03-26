import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import request from 'superagent';

const style = {
    margin: 12,
};

export default class LoginForm extends Component {

    submit(event) {
        event.preventDefault();

        request
            .post(window.appHost + '/uaa/oauth/token')
            .end(function(err, res){
                console.log('RESPONSE', res);
                console.log('ERROR', err);
            });
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <TextField hintText="Email" floatingLabelText="Email"/>
                <TextField type="password" hintText="Password" floatingLabelText="Password"/>
                <RaisedButton type="submit" label="Login" primary={true} style={style}/>
            </form>
        )
    }
}