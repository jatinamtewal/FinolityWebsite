import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "./Browse.css";

import Carousel from "react-multi-carousel";  //npm i react-multi-carousel   <----------------
import "react-multi-carousel/lib/styles.css"; // add this also      <-------------------------

import data from "../../data.json";
//inner components
import Educators from "../Educators.js";
import Batches from "./innerComponents/Batches.jsx";
import TestSeries from "./innerComponents/TestSeries.jsx";
import Courses from "./innerComponents/Courses.jsx";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2
  }
};






const Browse = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <div className='childContainer'>

            <div className="heading">
              <img src="https://static.uacdn.net/topology/TMUVD/icon/origin.png" alt="" />
              <h1>IIT JEE</h1>
            </div>

            <div className='seeall'>
              <h2>Batches for syllabus completion</h2>
              <Link to="/">SEE ALL</Link>
            </div>

            <div className="batchCarousel">
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} className='carousel' responsive={responsive}>
                {data.batches && data.batches.map((item,index)=>{
                    return(<Batches key={item.id} data={item}/>)
                })}
              </Carousel>
            </div>

            <div className='seeall'>
                  <h2>IIT JEE Educators</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className='EducatorsSection'>

                    {/* data is coming from data.json file */}
                    {data.educators && data.educators.map((item,index)=>{
                        if(index>3){
                          // eslint-disable-next-line
                            return;
                        }
                        return (<Educators key={item.id} data={item}/>)
                    })}
            </div>

            <div className='seeall'>
                  <h2>Topics</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="topics">
              <div>
                <Link to="#"><h2>Chemistry</h2> <p>38 Chapters</p></Link>
                <Link to="#"><h2>Mathematics</h2> <p>31 Chapters</p></Link>
                <Link to="#"><h2>Physics</h2> <p>43 Chapters</p></Link>
              </div>
            </div>

            <div className='seeall'>
                  <h2>Test Series</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className='testseries'>
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} className='carousel' responsive={responsive}>
                {data.testSeries && data.testSeries.map((item,index)=>{
                   return(<TestSeries key={item.id} data={item}/>) 
                })}
              </Carousel>
            </div>

            <div className='seeall'>
                  <h2>Upcoming Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} className='carousel' responsive={responsive}>
             
              {data.upcomingCourses && data.upcomingCourses.map((item,index)=>{
              return(<Courses key={item.id} data={item}/>)
             })}
              </Carousel>
            </div>
            <div className='seeall'>
                  <h2>Recently Started Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} className='carousel' responsive={responsive}>
             
              {data.recentlyStartedCourses && data.recentlyStartedCourses.map((item,index)=>{
              return(<Courses key={item.id} data={item}/>)
             })}
              </Carousel>
            </div>
            <div className='seeall'>
                  <h2>Popular Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
              <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} className='carousel' responsive={responsive}>
             {data.popularCourses && data.popularCourses.map((item,index)=>{
              return(<Courses key={item.id} data={item}/>)
             })}
                  
              </Carousel>
            </div>
      </div>
    </div>
  )
}

export default Browse