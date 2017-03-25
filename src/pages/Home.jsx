import React, {Component} from "react";
import LoginForm from '../components/forms/LoginForm.jsx'

export default class Home extends Component {

    submit(values) {
        console.log(values);
    };

    render() {
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}