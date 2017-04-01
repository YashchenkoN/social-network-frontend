import React, {Component} from "react";
import LoginForm from "../components/forms/LoginForm.jsx";
import {Grid, Row, Col} from "react-flexbox-grid";

export default class Home extends Component {

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <LoginForm/>
                    </Row>
                </Col>
            </Row>
        )
    }
}