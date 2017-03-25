import React, {Component, PropTypes} from "react";
import {Control, Form, actions} from "react-redux-form";
import request from "superagent";

export default class LoginForm extends Component {

    handleSubmit(val) {
        console.log(val);

        // todo add basic auth
        request
            .post('/uaa/oauth/token')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                console.log(res);
            });
    }

    render() {
        return (
            <Form model="user" className="form-inline" onSubmit={(val) => this.handleSubmit(val)}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                    <Control.text model="user.email" className="form-control" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                    <Control.text model="user.password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default">Sign in</button>
                <br/>
                <div className="checkbox">
                    <label>
                        <input name="rememberMe" type="checkbox"/> Remember me
                    </label>
                </div>
            </Form>
        )
    }
}