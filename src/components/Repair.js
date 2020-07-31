import React from "react";
import rtv from "../images/RTV.png"
import jvc from "../images/JVC.png"
import camera from "../images/camera.png"
import tools from "../images/tools.png"
import phone from "../images/phone.png"
import radio from "../images/radio.png"
import parts from "../images/parts.png"
const Repair = (props)=>{
    const images={"rtv": rtv, "jvc": jvc, "camera": camera, "tools": tools, "phone":phone, "radio": radio, "parts": parts};
    return(  <div className="section">
            <img className="repairImage" src={images[props.src]} alt={props.src}/>
            <p className="label">{props.label}</p>
        </div>

    )
};
export default Repair