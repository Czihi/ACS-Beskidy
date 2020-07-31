import React from "react";
import Repair from "./Repair";

const RightPanel = () => {
    return (<div className="repairSection">
        <Repair
            src="phone"
            label="Telefony, faxy"
        />
        <Repair
            src="rtv"
            label="Sprzęt RTV&AGD"
        />
        <Repair
            src="jvc"
            label="Kamery"
        />
        <Repair
            src="camera"
            label="Aparaty cyfrowe"
        />
        <Repair
            src="tools"
            label="Elektronarzędzia"
        />
    </div>)
};
export default RightPanel