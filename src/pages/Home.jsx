import React, {Component} from "react";
import Navbar from "../components/common/Navbar.jsx";
import LoginForm from "../components/forms/LoginForm.jsx";

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

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Wall</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form>
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Write on the wall"/>
                                            </div>
                                            <button type="submit" className="btn btn-default">Submit</button>
                                            <div className="pull-right">
                                                <div className="btn-toolbar">
                                                    <button type="button" className="btn btn-default"><i
                                                        className="fa fa-pencil"/>Text
                                                    </button>
                                                    <button type="button" className="btn btn-default"><i
                                                        className="fa fa-file-image-o"/>Image
                                                    </button>
                                                    <button type="button" className="btn btn-default"><i
                                                        className="fa fa-file-video-o"/>Video
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="panel panel-default friends">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">My Friends</h3>
                                    </div>
                                    <div className="panel-body">
                                        <ul>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                            <li><a href="profile.html" className="thumbnail"><img src="img/user.png"
                                                                                                  alt=""/></a></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                        <a className="btn btn-primary" href="#">View All Friends</a>
                                    </div>
                                </div>
                                <div className="panel panel-default groups">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Latest Groups</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="group-item">
                                            <img src="img/group.png" alt=""/>
                                            <h4><a href="#" className="">Sample Group One</a></h4>
                                            <p>This is a paragraph of intro text, or whatever I want to call it.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="group-item">
                                            <img src="img/group.png" alt=""/>
                                            <h4><a href="#" className="">Sample Group Two</a></h4>
                                            <p>This is a paragraph of intro text, or whatever I want to call it.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="group-item">
                                            <img src="img/group.png" alt=""/>
                                            <h4><a href="#" className="">Sample Group Three</a></h4>
                                            <p>This is a paragraph of intro text, or whatever I want to call it.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <a href="#" className="btn btn-primary">View All Groups</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <p>Dobble Copyright &copy, 2015</p>
                    </div>
                </footer>
            </div>
        );
    }
}