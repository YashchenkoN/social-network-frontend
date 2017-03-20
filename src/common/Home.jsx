import React, {Component} from "react";
import Navbar from "./Navbar.jsx";
import LoginForm from "./LoginForm.jsx";

export default class Home extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <img src="img/logo.png" className="logo" alt=""/>
                        <LoginForm/>
                    </div>
                </header>

                <Navbar/>

                <footer>
                    <div className="container">
                        <p>Dobble Copyright &copy, 2015</p>
                    </div>
                </footer>
            </div>
        );
    }
}