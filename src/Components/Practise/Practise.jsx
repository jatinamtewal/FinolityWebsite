import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "./Practise.css";

const Practise = () => {
  return (
    <div className='practisecontainer'>
      <Sidebar/>
      <div className='practisechildContainer'>
        <div className="backhomebtns">
          <Link to="/">Back</Link>
          <Link to="/">Home</Link>
        </div>
        <h1>Practise IIT JEE</h1>
        <div className="hero">
          <div className='features'>
            <h2>Get unlimited practice with IIT JEE subscription</h2>
            <ul>
              <li>
                <img src="https://static.uacdn.net/production/_next/static/images/practice-session/topics/tick.svg" alt="" />
                <p>Boost your performance with adaptive practice tests</p>
              </li>
              <li>
                <img src="https://static.uacdn.net/production/_next/static/images/practice-session/topics/tick.svg" alt="" />
                <p>Boost your performance with adaptive practice tests</p>
              </li>
              <li>
                <img src="https://static.uacdn.net/production/_next/static/images/practice-session/topics/tick.svg" alt="" />
                <p>Boost your performance with adaptive practice tests</p>
              </li>
              <li>
                <img src="https://static.uacdn.net/production/_next/static/images/practice-session/topics/tick.svg" alt="" />
                <p>Boost your performance with adaptive practice tests</p>
              </li>
              
            </ul>
            <button>Learn More</button>
          </div>
          <div>
            <img src="https://static.uacdn.net/production/_next/static/images/practice-session/topics/practice-banner.svg" alt="Phone" />
          </div>
        </div>
        <div className="subjects">
          <h1>Chemistry</h1>
          <div className='primary'>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
           </div>
        </div>
        <div className="subjects">
          <h1>Physics</h1>
          <div className='secondary'>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
          </div>
        </div>
        <div className="subjects">
          <h1>Mathematics</h1>
          <div className='primary'>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
          </div>
        </div>
        <div className="subjects">
          <h1>KVPY Syllabus</h1>
          <div className='secondary'>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
            <Link to="#">Physical Chemistry</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Practise