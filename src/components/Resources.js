import React from 'react';
import getData from '../util/getData.js';
import AdvisorTabs from './AdvisorTabs.js';

export default class Resources extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resources:{},
            loaded:false
        }
    }

    render(){
        const {resources, loaded } = this.state;

        if(!loaded) return (<div></div>);
        

        return(
            <div>
                <div className='degreeList'>
                    <div>
                        {/* Study Abroad Section */}
                        
                            <section id="studyAbroad"> 
                                <div className="subTitle"><h2>{resources.studyAbroad.title}</h2></div>
                                <p className='sectionContent'>{resources.studyAbroad.description}</p>
                                    {
                                        resources.studyAbroad.places.map((p) => (
                                            <div className='contentHolder'>
                                                <h4 className='contentTitle'>{p.nameOfPlace}</h4>
                                                <p className='sectionContent'>{p.description}</p>
                                            </div>
                                        ))
                                    }
                            </section>
                        {/* Student Services Section */}
                        {
                            <section id="studentServices"> 
                                <div className="subTitle"><h2>{resources.studentServices.title}</h2></div>
                                    <h4 className="contentTitle" >{resources.studentServices.academicAdvisors.title}</h4>
                                    <p className='sectionContent'>{resources.studentServices.academicAdvisors.description}</p>
                                    <h4  className="contentTitle" >{resources.studentServices.academicAdvisors.faq.title}</h4>
                                    <a className='sectionContent' href={resources.studentServices.academicAdvisors.faq.contentHref}>Click Here</a>
                                    <div>
                                        {
                                            resources.studentServices.professonalAdvisors.advisorInformation.map((p) => (
                                                <div className='contentHolder'>
                                                    <h4 className='advisorName'>{p.name}</h4>
                                                    <p className='sectionContent'>{p.department}</p>
                                                    <p className='sectionContent'>{p.email}</p>
                                                </div>
                                            ))
                                        }
                                        <h4 className="contentTitle">{resources.studentServices.facultyAdvisors.title}</h4>
                                        <p className='sectionContent'>{resources.studentServices.facultyAdvisors.description}</p>
                                        <h4 className='contentTitle'>{resources.studentServices.istMinorAdvising.title}</h4>
                                        {
                                            resources.studentServices.istMinorAdvising.minorAdvisorInformation.map((p) => (
                                                <div className='contentHolder'>
                                                    <h4 className='advisorName'>{p.title}</h4>
                                                    <p className='sectionContent'>{p.advisor}</p>
                                                    <p className='sectionContent'>{p.email}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                            </section>
                        }
                        {/* Tutoring Section */}
                        {
                            <section id="tutoring"> 
                                <div className="subTitle"><h2>{resources.tutorsAndLabInformation.title}</h2></div>
                                    <p className='sectionContent'>{resources.tutorsAndLabInformation.description}</p>
                                    <a className='sectionContent' href={resources.tutorsAndLabInformation.tutoringLabHoursLink}>Apply</a>
                            </section>
                        }
                        {/* Student Ambassador Section */}
                        {
                            <section id="studentAmbassadors"> 
                                <div className="subTitle"><h2>{resources.studentAmbassadors.title}</h2></div>
                                    <img src={resources.studentAmbassadors.ambassadorsImageSource}/>
                                    {
                                        resources.studentAmbassadors.subSectionContent.map((p) => (
                                            <div className='contentHolder'>
                                                <h4 className='contentTitle'>{p.title}</h4>
                                                <p className='sectionContent'>{p.description}</p>
                                                <a className='sectionContent' href={resources.studentAmbassadors.applicationFormLink}>apply</a>
                                                <p className='sectionContent'>{resources.studentAmbassadors.note}</p>
                                            </div>
                                        ))
                                    }
                                   
                            </section>
                        }
                        {/* Forms Section */} 
                        {
                            <section id="forms"> 
                                <div className="subTitle"><h2>Forms</h2></div>
                                    {
                                        resources.forms.graduateForms.map((p) => (
                                                <div className='contentHolder'>
                                                <h4 className='advisorName'>{p.formName}</h4>
                                                <a className='sectionContent' href={p.href}>Go here</a>
                                            </div>
                                        ))
                                    }
                                    {
                                        resources.forms.undergraduateForms.map((p) => (
                                            <div className='contentHolder'>
                                                <h4 className='advisorName'>{p.formName}</h4>
                                                <a className="sectionContent" href={p.href}>Go here</a>
                                            </div>
                                        ))
                                    }
                            </section>
                        }
                        {/* Coop Enrollment Section */}    
                        {
                            <section id="coopEnrollment"> 
                                <div className="subTitle"><h2>{resources.coopEnrollment.title}</h2></div>
                                    {
                                        resources.coopEnrollment.enrollmentInformationContent.map((p) => (
                                            <div className='contentHolder'>
                                                <h4 className='contentTitle'>{p.title}</h4>
                                                <p className='sectionContent'>{p.description}</p>
                                            </div>
                                        ))
                                    }
                                    <a className="sectionContent" href={resources.coopEnrollment.RITJobZoneGuidelink}></a>
                            </section>
                        }
                    </div>
                </div>

            </div>
        )
    }
    
    componentDidMount(){
        getData('resources/')
            .then((json) => {
                this.setState({
                    resources:json,
                    loaded:true,
                    danTest:5
            });
        });
    }
}
