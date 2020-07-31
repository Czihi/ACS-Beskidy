import React from "react";
import About from "./About";
const LeftPanel = () =>{
    return(
    <div>
        <p className="title subtitle">Autoryzowany Serwis gwarancyjny i pogwarancyjny sprzętu RTV firm:</p>
        <div className="brands">
            <p><a className="panasonic" href="https://www.panasonic.com/pl/" target="_blank"  rel="noopener noreferrer">Panasonic</a></p>
            <p className="other">Toshiba | Sharp | Manta</p>
        </div>
        <p className="other2">Technics | JVC | Vestel | Selecline | Qilive</p>
        <About/>
        <p className="open"> Poniedziałek - Piątek 9.00-17.00</p>
        <div className="authors">
            <p className="madeBy">Design: NamesRunOut</p>
            <p className="madeBy">Wykonanie: Czihi</p>
        </div>
    </div>
    )
};

export default LeftPanel;