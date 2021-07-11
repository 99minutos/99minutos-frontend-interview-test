import React from 'react'
import styled from "styled-components";
import { NavBar } from '../../components/shared/navbar/NavBar';
import { SideBar } from '../../components/shared/sidebar/SideBar';
import { MainPanel } from '../../components/shared/mainpanel/MainPanel';


export const HomeScreen = () => {
    return (
        <HomeWrapper>

            <NavBar/>

            <MainWrapper>
                <SideBar/>
                <MainPanel/>
            </MainWrapper>

        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    height: 100vh;
    background-color: #2f373e;
    color: #fff;
    padding-left: 25px;
    padding-right: 25px;
`

const MainWrapper = styled.div`

    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-color: #ffffffca;
    border: 1px solid #dadde1;
    border-radius: 10px;
    

`