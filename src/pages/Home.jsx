import React, {Component} from "react";
import LoginForm from "../components/forms/LoginForm.jsx";
import {Grid, Row, Col} from "react-flexbox-grid";
import Profile from "./Profile.jsx"

export default class Home extends Component {

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <LoginForm/>
                    </Row>
                    <Row>
                        <Profile/>
                    </Row>
                </Col>
            </Row>
        )
    }
}