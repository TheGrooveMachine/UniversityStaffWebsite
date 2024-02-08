import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.jpg'; // with import

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.links = [
            {
                text: "Resources",
                href: "/resources"
            },
            {
                text: "Academics",
                href: "/academics"
            },
            {
                text: "People",
                href: "/people"
            },
            {
                text: "Employment",
                href: "/employment"
            },
            {
                text: "News",
                href: "/news"
            },
            {
                text: "Research",
                href: "/research"
            }
        ]
        }
    

    render(){
        // const {minors, loaded, } = this.state;

        // if(!loaded) return (<div>Minors Loading...</div>);

        return(<div>
                
                <div id="navbar" className='hamburger-menu'>
                    <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>

                    <div className='logo'>
                        <a href="/"><img src={logo}/></a>
                    </div>
            
                    <ul className="menu__box">
                        {
                            this.links.map((link) => (
                                <li><NavLink className="menu__item" to={link.href}>{link.text}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
