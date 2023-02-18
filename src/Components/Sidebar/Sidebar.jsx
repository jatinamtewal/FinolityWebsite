import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/">Home</Link>
        <p>Self Study</p>
        <Link to="/browse">Browse</Link>
        <Link to="/practise">Practise</Link>
        <Link to="/test">Test</Link>
        <Link to="/syllabus">Syllabus</Link>
    </div>
  )
}

export default Sidebar