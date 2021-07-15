import React from 'react'
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
import { RocketThumb } from '../../ui/rocketThumb/RocketThumb';
import { LaunchesPast } from '../../../interfaces/LaunchPast';

interface SideBarProps {
    launches: LaunchesPast[];
    onSelectItem: (launch:LaunchesPast)=> void;
    isActiveSideBarMobile: boolean;
};

export const SideBar: React.FC<SideBarProps> = ({launches, onSelectItem, isActiveSideBarMobile}) => {

    
    return (
        <SideBarWrapper
            activeSideBar={isActiveSideBarMobile}
        >
            <h1>Last Launches</h1>


            <CustomScroll>
                <SideBarRockets>
                    {
                        launches.map( (launch:LaunchesPast) =>(
                            <RocketThumb
                                key= {launch.id}
                                launchPast={launch}
                                onSelectItem = {onSelectItem}
                            />
                        ))
                    }
                </SideBarRockets>
            </CustomScroll>

            
        </SideBarWrapper>
    )
}

interface SideBarShowProp {
    activeSideBar: boolean
}

const SideBarWrapper = styled.div.attrs( ({activeSideBar}:SideBarShowProp) => ({
    activeSideBar: activeSideBar 
    
}))`
    height: 75vh;
    overflow: hidden;
    margin-bottom: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    border: 1px solid #2f373e;
    border-radius: 10px 0 0 10px;

    & h1{
        text-align: center;
        color: #2f373e;
        margin-top: 0;
        margin-bottom: 0;
    }

    

    ${(props)=>props.activeSideBar && window.matchMedia( "(max-width: 640px)" ).matches
        &&
        `position: absolute; 
         z-index: 1; 
         background: #fff; 
         left: 25px;

         -webkit-transition: width 0.7s;
         transition: width 0.7s;
        `
    }


`
const SideBarRockets = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`

const CustomScroll = styled(Scrollbars)`
    width: 500px !important;
    height: 100%;

    @media(max-width: 1024px) {
        width: 300px !important;
    }
`
