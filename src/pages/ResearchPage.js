import React from "react";
import Research from "../components/Research";
import Footer from "../components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import ProgressBar from "react-scroll-progress-bar";

const ResearchPage = () => {
  return (
    <div>

      <ProgressBar bgcolor="#F76902"/>

      <div id="navv">
          <Link activeClass="activeS" className="newItem" smooth spy to="byInterestArea">By Interest Area</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="byFaculty">By Faculty</Link>
      </div>

      <div className='pageTitle'><h1>Research Page</h1></div>   
      
      <Research/>

      <Footer/>

    </div>
  );
};

export default ResearchPage;