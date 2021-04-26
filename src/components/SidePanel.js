
import React from 'react'

function openNav() {
    document.getElementById("mySidepanel").style.cssText = `
        width: 30vw;
        transition: 0.5s ease;
    
    `;

  }
  
 

function SidePanel() {
    return (
        <div>
            <button className="openbtn" onClick={() => openNav()}>☰</button>  
        </div>
    )
}

export default SidePanel;