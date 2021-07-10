import React from 'react'
import styled from "styled-components";
import { RocketThumb } from '../../ui/rocketThumb/RocketThumb';

export const SideBar = () => {
    return (
        <SideBarWrapper>
            <h1>Last Launches</h1>

            <SideBarRockets>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
                <RocketThumb/>
            </SideBarRockets>

            
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
    padding: 30px;
    border: 1px solid #2f373e;
    border-radius: 10px;

    & h1{
        text-align: center;
        color: #2f373e;
    }

`
const SideBarRockets = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`
