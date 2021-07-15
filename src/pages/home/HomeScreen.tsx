import React from 'react'
import styled from "styled-components";
import { NavBar } from '../../components/shared/navbar/NavBar';
import { SideBar } from '../../components/shared/sidebar/SideBar';
import { MainPanel } from '../../components/ui/mainPanel/MainPanel';
import { useLaunchesPast } from '../../hooks/useLaunchesPast';
import { useSideBar } from '../../hooks/useSideBar';


export const HomeScreen = () => {

    const {sideBarState,toggleSideBar, hiddeSideBar} = useSideBar(true)
    const {launchesPast, launchSelected, setLaunchSelected} = useLaunchesPast(hiddeSideBar)


    return (
        <HomeWrapper
            // onClick={hiddeSideBar}
        >

            <NavBar
                menuBtnAction={toggleSideBar}
            />

            <MainWrapper>
                <SideBar 
                    launches= {launchesPast} 
                    onSelectItem={setLaunchSelected} 
                    isActiveSideBarMobile={sideBarState}
                    />
                <MainPanel 
                    launch= {launchSelected}  
                    isActiveSideBarMobile={sideBarState}
                />
            </MainWrapper>

        </HomeWrapper>
    )
}



const HomeWrapper = styled.div.attrs( (props) => ({
    custompadding: window.matchMedia( "(max-height: 400px)" ).matches ? "15%" 
                                                                      : window.matchMedia( "(max-height: 700px)" ).matches ? "7%" : ""
    
}))`
    height: 100vh;
    padding-bottom: ${props => props.custompadding}; 
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