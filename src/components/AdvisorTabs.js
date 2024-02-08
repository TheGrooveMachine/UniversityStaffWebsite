import React from 'react';
import { Tab } from 'semantic-ui-react';
import getData from '../util/getData.js';
import AllAdvisors from './AllAdvisors.js';


export default class AdvisorTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resources: {},
            loaded: false
        }
    }

    render(){
        const {resources, loaded} = this.state;

       
        const panes = [
            { menuItem: 'Professional Advisors', render: () => 
            <div className='tab'> 
              <Tab.Pane>
                  <AllAdvisors activeClass="activeTab" key="1" title="Professional Advisors" advGroup={resources.studentServices.academicAdvisors.professionalAdvisors}/>
              </Tab.Pane> 
            </div>
               
            },
            { menuItem: 'Faculty Advisors', render: () => 
            <div className='tab'>
                 <Tab.Pane>
                  <AllAdvisors activeClass="activeTab" key="1" title="Faculty Advisors" advGroup={resources.studentServices.academicAdvisors.facultyAdvisors}/>
              </Tab.Pane> 
            </div>
            },
            { menuItem: 'IST Minor Advising', render: () => 
            <div className='tab'>
                 <Tab.Pane>
                  <AllAdvisors activeClass="activeTab" key="1" title="IST Minor Advising'" advGroup={resources.studentServices.academicAdvisors.istMinorAdvising}/>
              </Tab.Pane> 
            </div>
            }
        ]

        if(!loaded)return(<div><h1>Our Degrees are loading...</h1></div>);

        return(
            <div className='optionTabs'>
                    <div className="degrees"><h2>Degrees</h2></div>
                <Tab panes={panes} />
            </div>
        );
    }

    componentDidMount(){
        getData('resources/')
            .then((json) => {
                this.setState({
                    resources:json,
                    loaded: true
                })
            })
    }
}
