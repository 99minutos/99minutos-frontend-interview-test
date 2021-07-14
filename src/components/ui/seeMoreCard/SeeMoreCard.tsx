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
                        <Scrollbars style={{ 
                            width: "100%" ,
                            maxHeight: "50%", 
                            minHeight:"130px",
                            marginBottom: "15px",
                            overflowAnchor:"none"}}
                        >
                            <p>{launch?.details}</p>
                        </Scrollbars>
                        <Button
                            onClick={():void=>{window.open(`${launch.links.video_link}`)}}
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

    align-self: auto;
    flex: 0 1 auto;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;

    & div:first-of-type {
        overflow-x: hidden !important;
        margin-bottom: 0 !important;
    }

    & h1 {
        margin-top: 0;
    }


`
