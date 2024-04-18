import React from "react";
import { FaToggleOn } from "react-icons/fa";


const Header=({handleToggleDarkMode})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button 
                onClick={()=> handleToggleDarkMode(
                    (previousDarkMode)=> !previousDarkMode
                    )} 
                className="save"
            ><FaToggleOn size='1.8rem'/> 
               
            </button>
        </div>
    )
}

export default Header;