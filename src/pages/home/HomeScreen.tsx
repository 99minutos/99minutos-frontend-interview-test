import React from 'react'
import styled from "styled-components";
import { NavBar } from '../../components/shared/navbar/NavBar';


export const HomeScreen = () => {
    return (
        <HomeWrapper>
            <NavBar/>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    background-color: #2f373e;
    padding-left: 25px;
    padding-right: 25px;
`