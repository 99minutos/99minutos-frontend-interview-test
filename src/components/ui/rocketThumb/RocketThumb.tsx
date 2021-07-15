import React from 'react'
import styled from "styled-components";
import { CardWrapper } from '../styled-components/card'
import { ImageThumb } from '../styled-components/image';
import { LaunchesPast } from '../../../interfaces/LaunchPast';
import { formatDate } from '../../../helpers/date';
import rocketImg from '../../../rocket.png'

interface RocketThumbProps {
    launchPast: LaunchesPast;
    onSelectItem: (launch:LaunchesPast)=> void;
};



export const RocketThumb: React.FC<RocketThumbProps> = ({launchPast, onSelectItem}) => {

    
    return (
        <CardWrapper
            onClick={()=>onSelectItem(launchPast)}
        >
            <RocketMini>
                <ImageThumb
                    src={rocketImg}
                    alt="rocket"
                    width={70} 
                    height={70}
                />

                <LaunchInfoWraper>
                    <h3>{launchPast.mission_name}</h3>
                    <p>{launchPast.launch_site.site_name_long}</p>
                    <span>{formatDate(launchPast.launch_date_local)}</span>
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

