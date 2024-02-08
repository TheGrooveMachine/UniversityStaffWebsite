import React from 'react';
import getData from '../util/getData.js';
import BasicCard from './MinorsCard.js';

export default class Minors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minors:{},
            loaded:false
        }
    }

    render(){
        const {minors, loaded, } = this.state;

        if(!loaded) return (<div>Minors Loading...</div>);

        return(
            <div>
                <div className='degreeList'>
                    {
                        minors.UgMinors.map((p) =>
                            <div className='degreeListItem'>
                                <BasicCard {...p}/>
                                {/* <BasicModal {...p}/>  */}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        getData('minors/')
            .then((json) => {
                this.setState({
                    minors:json,
                    loaded:true,
                    danTest:5
                });
            });
    }
}
