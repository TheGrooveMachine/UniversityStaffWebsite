import React from 'react';
import BasicCard from './DegreesCard';

export default class AllDegrees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thisGroup : props.degGroup,
            title: props.title
        }
    }

    render(){
        const {title, thisGroup } = this.state;

        return(
            <div>
                <div className='peopleList'>
                {
                    thisGroup.map((p) =>
                        <div className='degreeListItem'>
                            <BasicCard {...p}/>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}
