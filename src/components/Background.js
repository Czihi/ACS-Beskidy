import React, {useLayoutEffect} from 'react';
import bg from "../images/background.png"
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

function changeHeight() {
    useLayoutEffect(() => {
        function handleLoad(){
            try {
                if(document.getElementById("bg").offsetHeight>0) {
                    document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
                }  } catch(err){
                console.log("No bg element")
            }
        }
        function update(){
            try {
                if (document.getElementById("bg").offsetHeight > 0) {
                    document.getElementById("mainDiv").style.height = document.getElementById("bg").offsetHeight + "px";
                }
            } catch(err){
                console.log("No bg element")
            }
        }
        window.addEventListener("resize", update);
        window.addEventListener('onload', handleLoad);
        handleLoad();
        update();
        return () => {window.removeEventListener('onload', handleLoad); window.removeEventListener('resize', update);}
    }, []);
}
const Background=()=>{
 changeHeight();
    return(<div className="main">
        <img id="bg" className="background" src={bg} alt="bg"/>
        <div className="groupRec" id="mainDiv">
        <div id="blueDiv" className="blueRec">
            <LeftPanel/>
        </div>
        <div className="whiteRec">
        <RightPanel/>
        </div>
        </div>
    </div>)
};
export default Background