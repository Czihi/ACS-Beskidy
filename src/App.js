import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Background from "./components/Background";
import Topbar from "./components/Topbar";
import Map from "./images/Map";



class App extends Component {
    update(){
        if(document.getElementById("bg").offsetHeight>0) {
            document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
        }
    }
    handleLoad(){
        if(document.getElementById("bg").offsetHeight>0) {
            document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
        }
    }
    componentDidMount() {
        this.update();
        window.addEventListener('load',this.handleLoad.bind(this));
        window.addEventListener("resize", this.update.bind(this));
    }

    render() {
        return (
            <Router>
                <Topbar/>
                <Route path="/ACS-Beskidy" exact render={
                    () => {
                        document.title = "ACS Beskidy";
                        return (
                            <div>
                                <Background/>

                            </div>)
                    }
                }/>
                <Route path="/ACS-Beskidy/kontakt" exact render={
                    () => {
                        document.title = "ACS Beskidy kontakt";
                        return (
                            <div>

                                <Map/>
                            </div>)
                    }
                }/>
            </Router>
        )
    }
}

export default App;
