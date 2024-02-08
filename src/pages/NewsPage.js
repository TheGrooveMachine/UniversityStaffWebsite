import React from "react";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
  return (<div>
      <div className='pageTitle'>
      <h1>News</h1>
    </div>
    <News/>
    <Footer />
  </div>
  
   
  );
};

export default NewsPage;