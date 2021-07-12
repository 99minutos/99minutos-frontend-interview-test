import React from 'react'
import styled from "styled-components";
import { DetailCard } from '../detailCard/DetailCard';
import { SeeMoreCard } from '../seeMoreCard/SeeMoreCard';

export const MainPanel = () => {
    return (
        <MainPanelWrapper>          
            <DetailCard/>
            <SeeMoreCard/>                    
        </MainPanelWrapper>
    )
}

const MainPanelWrapper = styled.div`
    height: 70vh;
    overflow: auto;
    margin-bottom: 20px;
    padding: 30px;
    border: 1px solid #2f373e;
    border-radius: 0 10px 10px 0;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: stretch;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;

    & p{
        text-align: center;
        color: #2f373e;
    }

`

