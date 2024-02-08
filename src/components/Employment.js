import React from 'react';
import getData from '../util/getData.js';
import CoopGrid from './CoopGrid';
import EmploymentGrid from './EmploymentGrid.js';


export default class Employment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employment:{},
            loaded:false
        }
    }

    render(){
        const {employment, loaded, } = this.state;

        const Section = ({ id, children, title }) => {
            return (
              <section id={id}>
                <div className="subTitle">
                  <h2>{title}</h2>
                </div>
          
                {children}
              </section>
            )
          }

        if(!loaded) return (<div>Employment Loading...</div>);

        return(
            <div style={{paddingTop:"25px"}}>
              <div className='subTitle'><h2>{employment.introduction.title}</h2></div>
                <div className='degreeList'>

                    {/* Degree Statistics Section  */}
                            {
                                employment.introduction.content.map((p) =>
                                    <div className='contentHolder'>
                                        <h4 className='contentTitle'>{p.title}</h4>
                                        <p className='sectionContent'>{p.description}</p>
                                    </div>
                                )
                            }
                        <Section id="degreeStatistics" title={"Degree Statistics"}> 
                            {
                                employment.degreeStatistics.statistics.map((p) =>
                                    <div className='contentHolder'>
                                      <h4 className='contentTitle'>{employment.degreeStatistics.title}</h4>
                                        <p className='sectionContent'>{p.value}</p>
                                        <p className='sectionContent'>{p.description}</p>
                                    </div>
                                )
                            }
                        </Section>
                    {/* Employers Section  */}
                        <Section id="employerSection" title={employment.employers.title}> 
                            {
                                employment.employers.employerNames.map((p) =>
                                    <div className='contentHolder'>
                                        <h4 className='contentTitle'>{p}</h4>
                                    </div>
                                )
                            }
                        </Section>

                    {/* Careers Section  */}
                        <Section id="careers" title={employment.careers.title}> 
                            {
                                employment.careers.careerNames.map((p) =>
                                    <div className='contentHolder'>
                                        <h4 className='contentTitle'>{p}</h4>
                                    </div>
                                )
                            }
                        </Section>     

                    {/* Coop Table Section  */}
                        <Section id="coopTable" title={employment.coopTable.title}> 
                            <h3>CoopTable</h3>

                            <CoopGrid/>
                            {/* {
                                employment.careers.careerNames.map((p) =>
                                    <div>
                                        <h1>{p}</h1>
                                    </div>
                                )
                            } */}
                        </Section>     

                    {/* Employer Table Section  */}
                        <Section id="employmentTable" title={employment.employmentTable.title}> 
                            <EmploymentGrid/>
                            {/* {
                                employment.careers.careerNames.map((p) =>
                                    <div>
                                        <h1>{p}</h1>
                                    </div>
                                )
                            } */}
                        </Section>   

                    {/* Employer Map Section  */}
                        <Section id="employerMap" title="Employer Map"> 

                        <h2>Employer map</h2>
                            {/* {
                                employment.careers.careerNames.map((p) =>
                                    <div>
                                        <h1>{p}</h1>
                                    </div>
                                )
                            } */}
                        </Section> 
                </div>
            </div>
        )
    }

    componentDidMount(){
        getData('employment/')
            .then((json) => {
                this.setState({
                    employment:json,
                    loaded:true,
                    danTest:5
                });
            });
    }
}
