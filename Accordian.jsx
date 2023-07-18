import React, { useState } from "react";
import {question} from "./api";
import "./Accordian.css"
import MyAccordion from "./MyAccordion";
const Accordian=()=>{
    const[data,setData]=useState(question);
    return(
        <>
        <section className="main_div">
            <h1>REACT INTERVIEW QUESTIONS</h1>{
        data.map((curElement)=>{
            const{id,question,answer}=curElement;
            return<MyAccordion key={id}{...curElement}/>
        })
        }</section>
        </>
    )
}
export default Accordian
