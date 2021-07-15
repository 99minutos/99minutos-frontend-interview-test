import React,{ useRef, useEffect} from 'react'
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
import { CardWrapper } from '../styled-components/card';
import { LaunchesPast } from '../../../interfaces/LaunchPast';


interface DetailCardProps {
    launch: LaunchesPast | null;
};

export const DetailCard: React.FC<DetailCardProps> = ({launch}) => {


    const scrollview = useRef<Scrollbars>(null)

    useEffect(() => {

        if(scrollview.current) {
            scrollview.current.scrollTop(0)          
        }
        
        
    }, [launch])

    return (
        <Panel>
            <CustomScrollbars ref= {scrollview} style={{ width: "100%" , height: "100%", minHeight:"100%", overflowX:"hidden" }} >
            {
                launch 
                    ? <>
                            <h3 >{launch.mission_name}</h3>

                            <InfoWrapper>
                                {
                                    launch.links.flickr_images.length > 0 &&
                                    <ImagePortrait
                                        src={launch.links.flickr_images[0]}
                                        alt={launch.rocket.rocket_name}
                                    />
                                }

                                <ul>
                                    <li><b>Rocket Name: </b><span>{launch.rocket.rocket_name}</span></li>
                                    <li><b>launch Site: </b><span>{launch.launch_site.site_name_long}</span></li>
                                    {/* <li><b>Payloads: </b>
                                        <ul>
                                            {
                                                launch.rocket.second_stage.payloads.map( (payload,i) =>(
                                                    <li key={i}>
                                                        <span>{payload.payload_type} of { payload.payload_mass_kg } Kg
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li> */}
                                    {/* {
                                        launch.ships.length > 0
                                            &&
                                            <li><b>Ships: </b>
                                                <ul>
                                                    {
                                                        launch.ships.map( (ship,i) =>(
                                                            <li key={i}>
                                                                <b>Name: </b><span>"{ship.name}"  </span> 
                                                                <b> Port: </b><span>{ship.home_port}</span>
                                                            </li>
                                                        ))
                                                    }                                      
                                                </ul>
                                            </li>
                                    } */}
                                    
                                    
                                </ul>
                            </InfoWrapper>

                        </>
                    :    <h3 >Select Launch Past</h3>         
            }
            </CustomScrollbars>  
        </Panel>
    )
}

const Panel = styled(CardWrapper)`
    min-width: 90%;
    overflow: auto;
    line-height: 1.5;
    
    align-self: auto;
    flex: 2 1 auto;
    -webkit-flex: 2 1 auto;
    -ms-flex: 2 1 auto;
    -ms-flex-order: 0;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    
    & h3 {
        text-align: center;

    }
    & li {
        list-style: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 800px){
        & h3 {
            font-size: 1rem;
        }
    }


`

const CustomScrollbars = styled(Scrollbars)`
    & div:first-of-type {
        overflow: auto !important;
        overflow-x: hidden !important;
    }
`

const InfoWrapper = styled.div`
    display: flex;

    & ul {
        padding-right: 30px;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 800px){
        flex-direction: column !important;
        align-items: center !important;

        & ul {
            padding: 5px;
        }
    }

`
const ImagePortrait = styled.img`
    display: block;
    max-width: 40%;

    @media screen and (min-device-width: 481px) and (max-device-width: 800px){
        max-width: 90%;
    }
`