import React, { Component } from 'react'
import NavLogo from '../../img/logo.b5cb06e3.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Theming from '../Themeing'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiX } from "react-icons/fi";
import './Nav.css'


const StyledNav = styled.nav`
    

    .main-nav {
        max-width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin: 1.8rem 2rem;
        align-items: center; 
    }

    @media(max-width: 940px) {
        max-width: 100%;
    }

    img {
        height: 50px;
        width: auto;
        margin-left: 3rem;
        @media(max-width: 768px) {
            margin-left: 1rem;
        }
        @media(max-width: 665px) {
            margin-left: .5rem;
        }
        @media(max-width: 477px) {
            margin-left: 0;
        }
    }

    ul {
        display: flex;

        li {
            font-size: .95rem;
            font-weight: 600;
            margin: 0 .8rem;

            @media(max-width: 880px) {
                font-size: .85rem;
                margin: 0 8px;
            }
            @media (max-width: 768px) {
                font-size: .95rem;
                margin: .1rem;
            }

            a {
                text-decoration: none;
            }
        }
    }
`

export class Nav extends Component {
    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <>
            <StyledNav className="nav" role="navigation">
                <div className="main-nav">
                    <img src={NavLogo} alt="Nav logo" />
                    <div className="nav-element">
                    <ul className={toggle ? "toggle" : ""}>
                        <li className="close" onClick={this.menuToggle}><FiX /></li>
                        <li className="li"><NavLink className="gc" exact to="/">Home</NavLink></li>
                        <li className="li"><NavLink className="gc" exact to="/login">Login</NavLink></li>
                        <li className="li"><NavLink className="gc" exact to="/signup">Sign up</NavLink></li>                
                        <li className="li"><NavLink className="gc" exact to="/team">Team</NavLink></li>
                        <li className="li"><NavLink className="gc" exact to="contact">Contact us</NavLink></li>
                        <Theming />
                    </ul>
                    <div className="menu" onClick={this.menuToggle}><GiHamburgerMenu /></div>
                </div>
                </div>
            </StyledNav>
            </>
        )
    }
}

export default Nav
