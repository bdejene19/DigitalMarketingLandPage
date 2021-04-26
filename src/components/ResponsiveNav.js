import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function ResponsiveNav() {
    const closeNav = () => {
        document.getElementById("mySidepanel").style.width = "0";
    }
    return (
        <div id="mySidepanel" className="sidepanel">
            <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>
            <a href="#">Home</a>
            <a href="#">Services <ArrowForwardIosIcon></ArrowForwardIosIcon></a>
            <a href="#">Value Proposition<ArrowForwardIosIcon></ArrowForwardIosIcon> </a>
            <a href="#">About</a>
            <a href="#">Blog <ArrowForwardIosIcon></ArrowForwardIosIcon></a>
            <a href="#">Contact Us</a>

          </div>
    )
}
