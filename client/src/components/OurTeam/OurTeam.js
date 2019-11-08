import React from 'react';
import OurEmployee from '../OuEmployee/OurEmployee';
import './style.scss';

function OurTeam(props){
    return(
        <div className={"wrapper-our-team"}>
            <p className={"heading-our-team"}></p>
            <div className={"wrapper-employees"}>
                <OurEmployee/>
                <OurEmployee/>
            </div>
        </div>
    )
}

export default OurTeam;