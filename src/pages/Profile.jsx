import React, {Component} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import {ProfileFriends} from "../components/ProfileFriends.jsx"

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        // request
        //     .post(window.appHost + '/api/users/' + this.props.id)
        //     .set('Authorization', 'Basic YnJvd3Nlcjo=')
        //     .set('Accept', 'application/json')
        //     .set('Origin', window.appHost)
        //     .send({
        //         scope: 'ui',
        //         username: this.state.email,
        //         password: this.state.password,
        //         grant_type: 'password'
        //     })
        //     .end(function (err, res) {
        //         console.log('RESPONSE', res);
        //         console.log('ERROR', err);
        //     });
    }

    render() {
        return (
            <Row>
                <Col xs={6}>
                    <Row>
                        {/*photo*/}
                    </Row>
                    <Row>
                        <ProfileFriends/>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row>
                        {/*info*/}
                    </Row>
                    <Row>
                        {/*wall*/}
                    </Row>
                </Col>
            </Row>
        )
    }
}