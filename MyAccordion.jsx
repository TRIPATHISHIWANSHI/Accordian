import React, { useState } from "react";
import "./Accordian.css";
//<p onClick={setShow(!show)} it causes infinite loop
const MyAccordion=({question,answer})=>{
    const[show,setShow]=useState(false);//we keep this false so that when plus sign entered then only answers are visible 
    return(
        <>
        <div className="main_heading">
            <p onClick={()=>setShow(!show)}>{show? "➖": "➕"}</p>
            <h3>{question}</h3>
            
        </div>
        {show && <p className="answers">{answer}</p>}
        </>
    )
}
export default MyAccordion;
