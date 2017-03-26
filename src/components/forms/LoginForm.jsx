import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import request from 'superagent';

const style = {
    margin: 12,
};

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submit(event) {
        event.preventDefault();

        console.log(this.state);

        request
            .post(window.appHost + '/uaa/oauth/token')
            .set('Authorization', 'Basic YnJvd3Nlcjo=')
            .set('Accept', 'application/json')
            .set('Origin', window.appHost)
            .send({
                scope: 'ui',
                username: this.state.email,
                password: this.state.password,
                grant_type: 'password'
            })
            .end(function(err, res){
                console.log('RESPONSE', res);
                console.log('ERROR', err);
            });
    };

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <TextField hintText="Email" floatingLabelText="Email" value={this.state.email}/>
                <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password}/>
                <RaisedButton type="submit" label="Login" primary={true} style={style}/>
            </form>
        )
    }
}