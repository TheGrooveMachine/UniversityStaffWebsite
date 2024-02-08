import React from 'react';
import getData from '../util/getData.js';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            footer:{},
            loaded:false
        }
    }

    render(){
        const {footer, loaded } = this.state;

        if(!loaded) return (<div>Footer Loading...</div>);

        return(
            <div>
                <div className='footer'>

                    {/* Container to hold the footer items */}
                    <div className='footerContainer'>

                        <div id='quickLinks'>
                            <h1 style={{marginBottom:"0px"}}>QuickLinks</h1>
                                {
                                    footer.quickLinks.map((p) =>
                                        <div className='quickLinkItems'>
                                            <a href={p.href}>{p.title}</a>
                                        </div>
                                    )
                                }
                        </div>

                        <div id='footerSocials'>
                            {
                                Object.values(footer.social).map((link) => (
                                    <div className="socialItems">{link}</div>
                                ))
                            }
                        </div>

                        <div className='newsItem'>
                            <h1>Checkout the latest news</h1>
                            <a href={footer.social.news}>latest news</a>
                        </div>
                        
                        <div id='copyrightStuff' dangerouslySetInnerHTML={ {__html: footer.copyright.html}}></div>
                    </div>
                </div>         
            </div>
        )
    }

    componentDidMount(){
        getData('footer/')
            .then((json) => {
                this.setState({
                    footer:json,
                    loaded:true,
                    danTest:5
                });
            });
    }
}
