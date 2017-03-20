import React, {Component, PropTypes} from 'react';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('TEST');
        event.preventDefault();

        // todo sent login request
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword3"
                           placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default">Sign in</button>
                <br/>
                <div className="checkbox">
                    <label>
                        <input name="rememberMe" type="checkbox"/> Remember me
                    </label>
                </div>
            </form>
        )
    }
}