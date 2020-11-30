
import React from 'react'

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
 

function SidePanel() {
    return (
        <div>
            <button className="openbtn" onClick={() => openNav()}>☰</button>  
        </div>
    )
}

export default SidePanel;