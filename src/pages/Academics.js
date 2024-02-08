import React from "react";
import DegreeTabs from "../components/DegreeTabs"
import Minors from "../components/Minors"
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import { Link, animateScroll as scroll } from "react-scroll";
import CoursesGrid from "../components/CoopGrid"


function Academics(){
  return (<div>
      <ProgressBar bgcolor="#F76902"/>

      <div id="navv">
          <Link activeClass="activeS" className="newItem" smooth spy to="degreesSection">Degrees</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="minorsSection">Minors</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="coursesSection">Courses</Link>
      </div>

      <div className='pageTitle'>
        <h1>Academics</h1>
      </div>

      <section id="degreesSection"> 
          <DegreeTabs/>
      </section>
        
      <section id="minorsSection">
        <div className="subTitle"><h2>Minors</h2></div>
        <Minors/>
      </section>
              
      <section id="coursesSection">
        <div className="subTitle"><h2>Courses</h2></div>
        <CoursesGrid/>
      </section>
      <Footer/>
  </div>
  );
};

export default Academics;