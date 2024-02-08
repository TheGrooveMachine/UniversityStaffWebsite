import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Button } from './Styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
      
     <BsFillArrowUpCircleFill onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
     
    </Button>
  );
}
  
export default ScrollButton;