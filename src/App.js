import React from 'react';
import './App.css';
import './Nav.css'
import getData from './util/getData.js';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import ProgressBar from "react-scroll-progress-bar";

// component imports
import Home from './pages/Home';
import Academics from './pages/Academics';
import NavBar from './components/NavBar';
import ScrollButton from './components/ScrollButton';

// Page imports
import ResearchPage from './pages/ResearchPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import EmploymentPage from './pages/EmploymentPage';
import PeoplePage from './pages/PeoplePage';



export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      about: {},
      loaded: false
    }
  }

  render(){
    //bring in state...
    const {about, loaded} = this.state;

    return (
      <div id='app' className='App'>

        <BrowserRouter>

        <NavBar/>

          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/academics' element={<Academics/>}/>
                <Route path='/resources' element={<ResourcesPage/>}/>
                <Route path='/people' element={<PeoplePage/>}/>
                <Route path='/employment' element={<EmploymentPage/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/research' element={<ResearchPage/>}/>
          </Routes>

        </BrowserRouter>
        <ScrollButton/>
     
      

      </div>
    );
  }

  componentDidMount(){
    //Go get the data
    const header = document.getElementsByClassName("hamburger_menu");

    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting == false){
          console.log("It was less than 1");
          document.getElementById('navv').style.top="0px"
        }
        if(entry.isIntersecting == true){{
          console.log("It was greater than 1");
          document.getElementById('navv').style.top="-60px"
        }}
      });
    };
    
    let observer = new IntersectionObserver(callback, options);

    observer.observe(document.getElementById('navbar'));
  }
  //on mounting - 1) constructor 2) getDerivedStateFromProps 3) render 4) componentDidMount
}
