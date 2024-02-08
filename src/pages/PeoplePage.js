import React from "react";
import PeopleTabs from "../components/PeopleTabs"
import Footer from "../components/Footer";

const PeoplePage = () => {
  return (

    <div>
        <div className='pageTitle'><h1>Our People</h1></div>
        <PeopleTabs/> 
        <Footer/>
    </div>

  );
};

export default PeoplePage;