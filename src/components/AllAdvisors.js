import React from 'react';
import BasicCard from './DegreesCard';


export default class AllAdvisors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thisGroup : props.advGroup,
            title: props.title
        }
    }

    render(){
        const {title, thisGroup } = this.state;

        return(
            <div>
                
                <div className='peopleList'>
                {/* {
                    thisGroup.map((p) =>
                        <div className='degreeListItem'>
                 
                        </div>
                    )
                } */}
                </div>
            </div>
        )
    }
}
