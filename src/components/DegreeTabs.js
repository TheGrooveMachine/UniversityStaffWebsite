import React from 'react';
import { Tab } from 'semantic-ui-react';
import getData from '../util/getData.js';
import AllDegrees from './AllDegrees.js';


export default class DegreeTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            degrees: {},
            loaded: false
        }
    }

    render(){
        const {degrees, loaded} = this.state;
        if(!loaded) return (<div>DegreeTabs Loading...</div>);

        // const paneData = [
        //     {
        //       title: 'Graduate',
        //       group: degrees.graduate
        //     },
        //     {
        //       title: 'Undergraduate',
        //       group: degrees.undergaduate
        //     }
        // ];
        console.log(degrees)
        const panes = [
          { menuItem: 'Graduate', render: () => 
              <div className='tab'> 
              <Tab.Pane>
                  <AllDegrees activeClass="activeTab" key="1" title="Graduate" degGroup={degrees.graduate}/>
              </Tab.Pane> 
              </div>
             
          },
          { menuItem: 'Undergraduate', render: () => 
              <div>
                  <Tab.Pane>
                      <AllDegrees activeClass="activeTab" key="2" title="Undergraduate" degGroup={degrees.undergraduate}/>
                  </Tab.Pane> 
              </div>
          }
      ]

      
        // console.log("Log Pane Data")
        // console.log(paneData)
    //     const panes = paneData.map(({ title, group }) => {
           
    //           return (
    //             <div className='tab'>
    //               <Tab.Pane>
    //                 <AllDegrees
    //                   activeClass="activeTab"
    //                   // key={key}
    //                   title={title}
    //                   degGroup={group}
    //                 />
    //               </Tab.Pane> 
    //             </div>
    //           );
          
    //     // return renderPane(title, group);
    
    //     return(
    //       <div>{title}</div>
    //     )  
    // });
    

    return(
        <div className='optionTabs'>
            <div className="subTitle"><h2>Degrees</h2></div>
      
            <Tab panes={panes} />
        </div>
        
    );
    // return {
    //     menuItem: title,
    //     render: renderPane(menuItem, index, group)
    //   }

    }
    componentDidMount(){
        getData('degrees/')
            .then((json) => {
                this.setState({
                    degrees:json,
                    loaded: true
                })
            })
    }
}
