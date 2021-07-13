import React from 'react'
import styled from "styled-components";
import { CardWrapper } from '../styled-components/card';
import { Button } from '../styled-components/button';
import { LaunchesPast } from '../../../interfaces/LaunchPast';
import { Scrollbars } from 'react-custom-scrollbars';

interface SeeMoreCardProps {
    launch: LaunchesPast | null;
};


export const SeeMoreCard: React.FC<SeeMoreCardProps> = ({launch}) => {


    return (
        <Panel>
            {
                launch  
                    ?<>

                        <h3>{launch.mission_name}</h3>
                        <Scrollbars style={{ width: "100%" , height: "100px", minHeight:"100px" , overflowAnchor:"none"}}>
                        <p>
                                {launch?.details}
                        </p>
                        </Scrollbars>
                        <Button
                            onClick={():void=>console.log('click')}
                        >See More</Button>
                    </>
                    : <h3>Select Launch Past</h3>
            }
        </Panel>
    )
}

const Panel = styled(CardWrapper)`
    min-width: 700px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;

    order: 0;
    flex: 0 0 auto;
    align-self: auto;
    -webkit-order: 0;
    -ms-flex-order: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;

    & h1 {
        margin-top: 0;
    }

    
    /* & p {
        max-width: 700px;
        overflow: auto;

    } */
`
