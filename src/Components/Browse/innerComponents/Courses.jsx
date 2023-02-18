import React from 'react';

import { AiFillLock } from "react-icons/ai";

const Courses = ({data}) => {
    const pStyle={
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: 2,
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };
  return (
    <div className="course">
            <div className='imgdiv'>
                <img src={data.image} alt="" />
                <AiFillLock/>
            </div>
            <div>
                <div>
                    <span>{data.specs}</span>
                    <p>{data.subject}</p>
                </div>
            <h2 style={pStyle}>{data.title}</h2>
            <p>Starts on {data.date}</p>
            <span>{data.lessons}</span>
            <h3>{data.teacher}</h3>
            </div>
    </div>
  )
}

export default Courses