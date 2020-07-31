import React from "react";
const About = ()=>{
    return(
        <div className="aboutGroup">
            <div className="adress">
            <h3>Adres</h3>
                <hr className="line"/>
                <p><a className="link" href="https://goo.gl/maps/nTKkc4rdQrB99F2j6" target="_blank"  rel="noopener noreferrer" >43-300 Bielsko-Biała ul.Sempołowskiej 19</a></p>
            </div>
            <div className="adress">
                <h3>Telefon</h3>
                <hr className="line"/>
                <p className="phone">33 8165192</p>
                <p className="phone">33 8167575</p>
                <p className="phone">798 588 851</p>
            </div>
            <div className="adress">
                <h3>E-mail</h3>
                <hr className="line"/>
                <p><a className="link" href="mailto:serwis@acs.beskidy.pl">serwis@acs.beskidy.pl</a></p>
            </div>
        </div>
    )
};
export default About;