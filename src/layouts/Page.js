import React from "react";
import Footer from "../components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import ProgressBar from "react-scroll-progress-bar";


const Page = (title, children, links) => {
    return (
      <div>
       <ProgressBar bgcolor="#F76902" />

       <div id="navv">
         {links.map((link) => {
           <Link activeClass="activeS" className="newItem" smooth spy to={link.to}>{link.text}</Link>
         })
        }
       </div>

       <div className='pageTitle'>
         <h1>{title}</h1>
       </div>

       {children}

       <Footer />
      </div>
  )
}

export default Page;