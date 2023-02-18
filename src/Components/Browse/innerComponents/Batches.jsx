import React from 'react';
import { MdWysiwyg } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

const Batches = ({data}) => {
    const pStyle={
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: 2,
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };
  return (
    <div className="batch">
        <img src={data.image} alt="" />
        <div>
            <div className="keywords">
            <p>ENGLISH</p>
            <p>ENGLISH</p>
            <p>ENGLISH</p>
            <p>ENGLISH</p>
            </div>
            <h2>{data.title}</h2>
            <div className="stats">
            <ul>
                <li>
                <SlCalender/>
                <p>Started on {data.date}</p>
                </li>
                <li>
                <AiOutlineClockCircle className='clock'/>
                <p style={pStyle}>{data.timming}</p>
                </li>
                <li>
                <CgProfile className='profile'/>
                <p style={pStyle}>{(data.teachers).join('. ')}</p>
                </li>
            </ul>
            </div>
            <hr />
            <div className='schedule'>
                <MdWysiwyg/>
                <p>View full schedule</p>
            </div>
        </div>
    </div>
  )
}

export default Batches