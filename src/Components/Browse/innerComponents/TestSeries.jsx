import React from 'react';
import { Link } from 'react-router-dom';

const TestSeries = ({data}) => {
  return (
    <Link to="#">
        <div>
            <h2>{data.title}</h2>  
            <span>FREE</span> 
        </div>
        <div>
            <p>Test {data.testNo}</p>
            <p>{data.date},{data.time}</p>
        </div>
    </Link>
  )
}

export default TestSeries