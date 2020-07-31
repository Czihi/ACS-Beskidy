import React from "react";
import Repair from "./Repair";

const RightPanel = () => {
    return (<div className="repairSection">
        <p className="miniTitle">Naprawa</p>
        <hr className="line" />
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
        <Repair
            src="radio"
            label="CB Radio"
        />
        <hr className="line" />
        <Repair
            src="parts"
            label="Sprzedaż części"
        />
    </div>)
};
export default RightPanel