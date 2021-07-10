import React from 'react'
import styled from "styled-components";
import { CardWrapper } from '../styled-components/card'
import rocketImg from '../../../rocket.png'
import { ImageThumb } from '../styled-components/image';

export const RocketThumb = () => {
    return (
        <CardWrapper>
            <RocketMini>
                <ImageThumb
                    src={rocketImg}
                    alt="rocket"
                    width={70} 
                    height={70}
                />

                <LaunchInfoWraper>
                    <h3>Starlink-15 (v1.0)</h3>
                    <p>Cape Canaveral Air Force Station Space Launch Complex 40</p>
                    <span>2020-10-24T11:31:00-04:00</span>
                </LaunchInfoWraper>
            </RocketMini>         
        </CardWrapper>
    )
}

const RocketMini = styled.div`
    display: flex;
    align-items: center;
`

const LaunchInfoWraper = styled.div`
    display: flex;
    flex-direction: column;

    & h3 {
        margin-bottom: 0;
    }
    & span {
        text-align: end;
        color: #b7b7b7;
    }
`

