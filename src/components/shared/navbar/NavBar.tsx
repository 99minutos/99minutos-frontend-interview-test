import React from 'react'
import styled from "styled-components";
import logo from '../../../logo.png'
import { NavBarLogo } from '../../ui/styled-components/image'

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className="container-fluid px-0">
                <NavBarBrand>
                    <NavBarLogo 
                        src={logo}
                        alt="logo"
                        width={40} 
                        height={40}
                    />
                </NavBarBrand>
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
    padding: .5rem 1rem;

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0;

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
