import React from 'react';
import { Tab } from 'semantic-ui-react';
import AllPeople from './AllPeople.js';
import getData from '../util/getData.js';

export default class PeopleTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people: {},
            loaded: false
        }
    }

    render(){
        const {people, loaded} = this.state;


        const panes = [
            { menuItem: 'Faculty', render: () => 
                <div className='tab'> 
                <Tab.Pane>
                    <AllPeople activeClass="activeTab" key="1" title="Faculty" pepGroup={people.faculty}/>
                </Tab.Pane> 
                </div>
               
            },
            { menuItem: 'Staff', render: () => 
                <div>
                    <Tab.Pane>
                        <AllPeople activeClass="activeTab" key="2" title="Staff" pepGroup={people.staff}/>
                    </Tab.Pane> 
                </div>
            }
        ]

        if(!loaded)return(<div><h1>Our People are loading...</h1></div>);

        return(
            <div>
                <div style={{paddingTop:"25px"}}  className='optionTabs'>
                    <div className="subTitle"><h2>{people.subTitle}</h2></div>
                    <Tab panes={panes} />
                </div>
            </div>
       
        );
    }

    componentDidMount(){
        getData('people/')
            .then((json) => {
                this.setState({
                    people:json,
                    loaded: true
                })
            })
    }
}
