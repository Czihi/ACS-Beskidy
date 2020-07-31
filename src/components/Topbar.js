import React from "react";
import {Link} from "react-router-dom"

const Topbar = () => {
    return (<div className="groupTop">
        <div className="leftTop">
            <Link className="title" to="/ACS-Beskidy">
            <p className="title">ACS "Beskidy"</p>
            </Link>
        </div>
        <div className="rightTop">
            <div className="groupButton">
                <button className="but">usługi</button>
                <Link className="but" to="/ACS-Beskidy/kontakt">
                    <button className="but2">dojazd</button>
                    </Link>
                    <button className="but contact">kontakt</button>
            </div>
        </div>
    </div>
)
};

export default Topbar;