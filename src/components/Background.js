import React from "react";
import bg from "../images/background.png"
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
const Background=()=>{
    return(<div className="main">
        <img className="background" src={bg} alt="bg"/>
        <div className="groupRec">
        <div className="blueRec">
            <LeftPanel/>
        </div>
        <div className="whiteRec">
        <RightPanel/>
        </div>
        </div>
    </div>)
};
export default Background