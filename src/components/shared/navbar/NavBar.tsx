import React from 'react'
import styled from "styled-components";
import logo from '../../../logo.png'
import menu from '../../../menu.png'
import { NavBarLogo } from '../../ui/styled-components/image'

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <div>
                <NavBarBrand>
                    <NavBarLogo 
                        src={logo}
                        alt="logo"
                        width={40} 
                        height={40}
                    />

                </NavBarBrand>
            </div>
            <div className="menu">
                <MenuBtn
                    src={menu}
                    alt="logo"
                    width={40} 
                    height={40}
                />
            </div>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 0;

    & div.menu {
        background: white;
        border-radius: 20px;
        cursor: pointer;
    }
    
    @media(min-width: 640px) {
        & div.menu {
            display: none;
        }
    }
    

    @media (min-width: 992px) {
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-pack: start;
        justify-content: flex-start;
    }

`

const NavBarBrand = styled.div`
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`

const MenuBtn = styled(NavBarLogo)`
    
`
