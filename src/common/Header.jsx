import React, {Component} from "react";

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="container">
                    <img src="img/logo.png" className="logo" alt=""/>
                    <form className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" for="exampleInputEmail3">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" for="exampleInputPassword3">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword3"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-default">Sign in</button>
                        <br/>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                        </div>
                    </form>
                </div>
            </header>
        )
    }
}