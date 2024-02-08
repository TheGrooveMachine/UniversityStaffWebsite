import React from "react";
import Employment from "../components/Employment"
import Footer from "../components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import ProgressBar from "react-scroll-progress-bar";



const EmploymentPage = () => {
  return (<div>

      <ProgressBar bgcolor="#F76902"/>

      <div id="navv">
          <Link activeClass="activeS" className="newItem" smooth spy to="degreeStatistics">Statistics</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="employerSection">Employers</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="careers">Careers</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="coopTable">Coops</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="employmentTable">Employment</Link>
          <Link activeClass="activeS" className="newItem" smooth spy to="employerMap">Employer Map</Link>
      </div>  

      <div className='pageTitle'>
        <h1>Employment</h1>
      </div>

      <Employment/>
      
      <Footer/>
      
    </div>

  );
};

export default EmploymentPage;