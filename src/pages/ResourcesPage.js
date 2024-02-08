import React from 'react';
import '../App.css';
import Footer from "../components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import ProgressBar from "react-scroll-progress-bar";
import Resources from '../components/Resources';


export default class ResourcesPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    //bring in state...


    //bring in state...
    const data = [
      {
        to: 'studyAbroad',
        text: 'Study Abroad'
      },
      {
        to:"studentServices",
        text:"Student Services"
      },
      {
        to:"tutoring",
        text:"Tutoring"
      },
      {
        to:"studentAmbassadors",
        text:"Ambassadors"
      },
      {
        to:"forms",
        text:"Forms"
      },
      {
        to:"coopEnrollment",
        text:"Coop Enrollment"
      },

    ];
    
    return (
      <div>
        <ProgressBar bgcolor="#F76902"/>
        <div className='pageTitle'><h1>Resources</h1></div>
        <div id="navv"> 
        {
          data.map((item) => (
          <Link activeClass="activeS" className="newItem" smooth spy to={item.to}>{item.text}</Link>
        ))}


      </div>
      <Resources/>

      <Footer/>
      </div>

      
    )}
  //on mounting - 1) constructor 2) getDerivedStateFromProps 3) render 4) componentDidMount
}
