import React from 'react';
import getData from '../util/getData.js';

export default class Research extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            research:{},
            loaded:false
        }
    }

    render(){
        const {research, loaded } = this.state;

        if(!loaded) return (<div>Resources Loading...</div>);
        return(
            <div>
                <div className='degreeList'>
                    <div>
                    {/* By Interest Area Section */}
                        {
                            research.byInterestArea.map((p) => (
                                <section id="byInterestArea"> 
                                <div className="subTitle"><h2>By Interest Area</h2></div>                               
                                    <div className='contentHolder'>
                                        <h4 className='contentTitle'>{p.areaName}</h4>
                                        <p className='sectionContent'>{p.citations}</p>
                                    </div>
                                </section>
                            ))
                        }
                    {/* By Faculty Section */}
                        {
                            research.byFaculty.map((p) => (
                                <section id="byFaculty">    
                                <div className="subTitle"><h2>By Faculty</h2></div>                            
                                    <div>
                                        <h1>{p.facultyName}</h1>
                                        <p>{p.username}</p>
                                        <p>{p.citations}</p>
                                    </div>
                                </section>
                            ))
                        }
                    </div>                    
                </div>
            </div>
        )
    }
    
    componentDidMount(){
        getData('research/')
            .then((json) => {
                this.setState({
                    research:json,
                    loaded:true,            });
        });
    }
}
