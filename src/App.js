import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Background from "./components/Background";
import Topbar from "./components/Topbar";
import Map from "./components/Map";
import Services from "./components/Services";


class App extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleLoad = this.handleLoad.bind(this)
    }

    update() {
        try {
            if (document.getElementById("bg").offsetHeight > 0) {
                document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
            }
        } catch (err) {
            console.log("No bg element")
        }
    }

    handleLoad() {
        try {
            if (document.getElementById("bg").offsetHeight > 0) {
                document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
            }
        } catch (err) {
            console.log("No bg element")
        }
    }

    addListeners() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener("resize", this.update);
    }

    removeListeners() {
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener("resize", this.update);
    }

    render() {
        return (
            <Router>
                <Topbar/>
                <Route path="/ACS-Beskidy" exact render={
                    () => {
                        document.title = "ACS Beskidy";
                        this.addListeners();
                        return (
                            <div>
                                <Background/>

                            </div>)
                    }
                }/>
                <Route path="/ACS-Beskidy/dojazd" exact render={
                    () => {
                        document.title = "ACS Beskidy - dojazd";
                        this.removeListeners();
                        return (
                            <div>

                                <Map/>
                            </div>)
                    }
                }/>
                <Route path="/ACS-Beskidy/uslugi" exact render={
                    () => {
                        document.title = "ACS Beskidy - dojazd";
                        this.removeListeners();
                        return (
                            <div>
                                <Services/>
                            </div>)
                    }
                }/>
            </Router>
        )
    }
}

export default App;
