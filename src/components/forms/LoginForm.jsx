import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import request from "superagent";
import {Grid, Row, Col} from "react-flexbox-grid";

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

        console.log(this.refs);

        request
            .post(window.appHost + '/uaa/oauth/token')
            .set('Authorization', 'Basic YnJvd3Nlcjo=')
            .set('Accept', 'application/json')
            .set('Origin', window.appHost)
            .send({
                scope: 'ui',
                username: this.refs.email.getValue(),
                password: this.refs.password.getValue(),
                grant_type: 'password'
            })
            .end(function (err, res) {
                console.log('RESPONSE', res);
                console.log('ERROR', err);
            });
    };

    render() {
        return (
            <Row>
                <form>
                    <Col xs>
                        <TextField hintText="Email" floatingLabelText="Email" ref="email"/>
                    </Col>
                    <Col xs>
                        <TextField type="password" hintText="Password" floatingLabelText="Password"
                                   ref="password"/>
                    </Col>
                    <Col xs>
                        <RaisedButton type="submit" onTouchTap={this.submit.bind(this)}
                                      label="Login" style={style} primary={true} />
                    </Col>
                </form>
            </Row>
        )
    }
}