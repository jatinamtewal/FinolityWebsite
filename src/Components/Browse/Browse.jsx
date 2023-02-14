import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "./Browse.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SlCalender } from "react-icons/sl";
import { AiFillLock } from "react-icons/ai";
import { MdWysiwyg } from "react-icons/md";

import data from "../../data.json";
import Educators from "../Educators.js";
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
                {/* <Carousel  showStatus={false} showThumbs={false} showIndicators={false}> */}
              
                  <div className="batch">
                    <img src="https://static.uacdn.net/thumbnail/batch/692a4523b7e14698abcf88a033209907.png" alt="" />
                    <div>
                      <div className="keywords">
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                      </div>
                      <h2>Physics: Crash Course -Impulse JEE IIT Mains/Advance</h2>
                      <div className="stats">
                        <ul>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
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
                  <div className="batch">
                    <img src="https://static.uacdn.net/thumbnail/batch/692a4523b7e14698abcf88a033209907.png" alt="" />
                    <div>
                      <div className="keywords">
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                      </div>
                      <h2>Physics: Crash Course -Impulse JEE IIT Mains/Advance</h2>
                      <div className="stats">
                        <ul>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
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
                  <div className="batch">
                    <img src="https://static.uacdn.net/thumbnail/batch/692a4523b7e14698abcf88a033209907.png" alt="" />
                    <div>
                      <div className="keywords">
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                        <p>ENGLISH</p>
                      </div>
                      <h2>Physics: Crash Course -Impulse JEE IIT Mains/Advance</h2>
                      <div className="stats">
                        <ul>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
                          </li>
                          <li>
                            <SlCalender/>
                            <p>Started on 9 Feb 2023</p>
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
                {/* </Carousel> */}
            </div>

            <div className='seeall'>
                  <h2>IIT JEE Educators</h2>
                  <Link to="/">SEE ALL</Link>
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
              {/* <Carousel> */}
                    <div>
                      <Link to="#"><div><h2>SAFALTA Batch Series</h2>  <span>FREE</span> </div>
                        <div>
                          <p>Test 16</p>
                          <p>Feb 15,3:00 PM</p>
                        </div>
                      </Link>
                      <Link to="#"><div><h2>SAFALTA Batch SeriesSAFALTA Batch SeriesSAFALTA Batch Series</h2>  <span>FREE</span> </div>
                        <div>
                          <p>Test 16</p>
                          <p>Feb 15,3:00 PM</p>
                        </div>
                      </Link>
                      <Link to="#"><div><h2>SAFALTA Batch Series</h2> <span>FREE</span> </div>
                        <div>
                          <p>Test 16</p>
                          <p>Feb 15,3:00 PM</p>
                        </div>
                      </Link>

                    </div>
              {/* </Carousel> */}
            </div>

            <div className='seeall'>
                  <h2>Upcoming Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
              {/* </Carousel> */}
            </div>
            <div className='seeall'>
                  <h2>Recently Started Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
              {/* </Carousel> */}
            </div>
            <div className='seeall'>
                  <h2>Popular Courses</h2>
                  <Link to="/">SEE ALL</Link>
            </div>

            <div className="upcomingCourses">
              {/* <Carousel> */}
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
                    <div className="course">
                      <div className='imgdiv'>
                        <img src="https://static.uacdn.net/thumbnail/course/v2/880DB81F-4D0C-4466-92BA-CDD3FF348011_plus.png" alt="" />
                        <AiFillLock/>
                      </div>
                      <div>
                        <div>
                          <span>Hindi</span>
                          <p>Chemistry</p>
                        </div>
                        <h2>Evolve:Perfect Course on Biomolecules - IIT JEE</h2>
                        <p>Starts on 15 Feb</p>
                        <span>8 Lessons</span>
                        <h3>Gaurav Dixit</h3>
                      </div>
                    </div>
              {/* </Carousel> */}
            </div>
      </div>
    </div>
  )
}

export default Browse