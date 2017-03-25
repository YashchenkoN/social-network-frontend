import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import RaisedButton from 'material-ui/RaisedButton';
import {TextField} from "redux-form-material-ui";

const style = {
    margin: 12,
};

class LoginForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email"
                           component={TextField}
                           hintText="Email"
                           floatingLabelText="Email"/>
                </div>
                <div>
                    <Field name="password"
                           component={TextField}
                           hintText="Password"
                           floatingLabelText="Password"/>
                </div>
                <RaisedButton label="Login" primary={true} style={style} />
            </form>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm)