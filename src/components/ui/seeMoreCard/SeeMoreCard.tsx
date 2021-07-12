import React from 'react'
import styled from "styled-components";
import { CardWrapper } from '../styled-components/card';
import { Button } from '../styled-components/button';

export const SeeMoreCard = () => {
    return (
        <Panel>
            <h3>Starlink-15 (v1.0)</h3>
            <p>This mission will launch the thirteenth batch of operational 
                Starlink satellites, which are expected to be version 1.0, from LC-39A, 
                Kennedy Space Center. It is the fourteenth Starlink launch overall. 
                The satellites will be delivered to low Earth orbit and will spend a 
                few weeks maneuvering to their operational altitude of 550 km. 
                The booster for this mission is expected to land on an ASDS.
            </p>
            <Button
                onClick={():void=>console.log('click')}
            >See More</Button>
        </Panel>
    )
}

const Panel = styled(CardWrapper)`
    min-width: 700px;
    text-align: center;

    order: 0;
    flex: 0 0 auto;
    align-self: auto;
    -webkit-order: 0;
    -ms-flex-order: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;

    
    & p {
        max-width: 700px;
        overflow: auto;

    }
`
