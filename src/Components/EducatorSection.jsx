import React from 'react'
import "./EducatorSection.css";

import {CgShapeRhombus} from "react-icons/cg";
import {GiElectric} from "react-icons/gi";
import {AiOutlineRight,} from "react-icons/ai";
import data from "../data.json";
import Educators from "../Components/Educators.js";

const EducatorSection = () => {
    // data.educators.map((educators)=>{
    //    return console.log(educators.name);
    // });
  return (


    <div className='EducatorPage'>
        <div className='heading'>
            <h1>
                India's top educators to learn from
            </h1>
            <div className='headFeatures'>
                <div>
                    <CgShapeRhombus/>
                    <h3>Proven history of delivering results.</h3>
                </div>
                <div>
                    <CgShapeRhombus/>
                    <h3>Mentored past rankers</h3>
                </div>
                <div>
                    <CgShapeRhombus/>
                    <h3>Unique style of teaching</h3>
                </div>
            </div>
        </div>
        <div className='EducatorsSection'>

            {/* data is coming from data.json file */}
            {data.educators && data.educators.map((item,index)=>{
                if(index>3){
                    return;
                }
                return (<Educators key={item.id} data={item}/>)
            })}
        </div>
        <div className='button'>View all educators</div>
    </div>
  )
}

export default EducatorSection