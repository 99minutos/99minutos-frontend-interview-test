import React from 'react'
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
import { RocketThumb } from '../../ui/rocketThumb/RocketThumb';
import { LaunchesPast } from '../../../interfaces/LaunchPast';

interface SideBarProps {
    launches: LaunchesPast[];
    onSelectItem: (launch:LaunchesPast)=> void;
};

export const SideBar: React.FC<SideBarProps> = ({launches, onSelectItem}) => {

    return (
        <SideBarWrapper>
            <h1>Last Launches</h1>


            <Scrollbars style={{ width: 500 , height: "100%" }}>
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
            </Scrollbars>

            
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
    height: 70vh;
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

`
const SideBarRockets = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`
