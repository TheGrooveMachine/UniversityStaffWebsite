import React from 'react';
import getData from '../util/getData.js';
import '../App.css';
import Footer from "../components/Footer";


export default class Home extends React.Component{

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

    if(!loaded) return (<div><h1>Loading...</h1></div>);

    return (<div className='App'>

        <div className='pageTitle'><h1>Welcome to the iSchool website...</h1></div>
        <section id="about">
            <div className='contentHolder'>
              <h4 className='contentTitle'>{about.title}</h4>
              <p className='sectionContent'>{about.description}</p>
              <p className='sectionContent'>{about.quote}</p>
              <p className='sectionContent'>---{about.quoteAuthor}</p> 
            </div>
        </section>
        
        <Footer/>

      </div>
    );
  }

  componentDidMount(){
    //Go get the data
    getData('about/')
      .then((json)=>{
        console.log(json);
        this.setState({
          about: json, 
          loaded: true
        })
      });
  }
  //on mounting - 1) constructor 2) getDerivedStateFromProps 3) render 4) componentDidMount
}
