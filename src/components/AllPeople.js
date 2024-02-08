import React from 'react';
import BasicModal from './PeopleModal';

export default class AllPeople extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thisGroup : props.pepGroup,
            title: props.title
        }
    }

    render(){
        const {title, thisGroup } = this.state;

        return(
            <div>
                <h4 className='contentTitle'>{title}</h4>
                <div className='peopleList'>
                    {
                        thisGroup.map((p) =>
                            <div className='degreeListItem'>
                                <img className="peopleImg" src = {p.imagePath} alt = "Faculty Person"/>
                                <BasicModal {...p}/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
