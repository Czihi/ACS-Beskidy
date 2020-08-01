import React from "react";
import RTV from "./RTV";
import Tools from "./Tools";
import AGD from "./AGD";
import Telecommunication from "./Telecommunication";
import Sell from "./Sell";

const Services = () =>{
    return(
        <div className="gradientBackground">
            <p className="head">Oferujemy usługi w zakresie napraw gwarancyjnych i pogwarancyjnych sprzętu elektronicznego.</p>
            <div className="groupService">
            <RTV/>
            <Tools/>
            <AGD/>
            <Telecommunication/>
            <Sell/>
            </div>
        </div>
    )
};
export default Services;