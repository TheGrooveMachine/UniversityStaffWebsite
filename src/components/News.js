import React from 'react';
import getData from '../util/getData.js';
import AdvisorTabs from './AdvisorTabs.js';

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news:{},
            loaded:false
        }
    }

    render(){
        const {news, loaded } = this.state;

        if(!loaded) return (<div>Resources Loading...</div>);

        return(
            <div>
                <div className='degreeList'>
                    <div>
                        {/*News Section */}
                        <div className="subTitle"><h2>Older</h2></div>
                        {
                            news.older.map((p) => (
                                <section id="older"> 
                                    <div>
                                        <h4>{p.date}</h4>
                                        <h4>{p.title}</h4>
                                        <p>{p.description}</p>
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
        getData('news/')
            .then((json) => {
                this.setState({
                    news:json,
                    loaded:true,
                    danTest:5
            });
        });
    }
}
