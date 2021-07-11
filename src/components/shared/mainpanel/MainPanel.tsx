import React from 'react'
import styled from "styled-components";
import { CardWrapper } from '../../ui/styled-components/card';

export const MainPanel = () => {
    return (
        <MainPanelWrapper>
            <TopPanel>
                
            </TopPanel>

            <BottomPanel>

            </BottomPanel>
            
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

    & p{
        text-align: center;
        color: #2f373e;
    }

`
const TopPanel = styled(CardWrapper)`
    min-width: 700px;
    
`
const BottomPanel = styled(CardWrapper)`
    
`
