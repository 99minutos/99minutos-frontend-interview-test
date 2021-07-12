import React from 'react'
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
import { CardWrapper } from '../styled-components/card';

export const DetailCard = () => {
    return (
        <Panel>
            <Scrollbars style={{ width: "100%" , height: "100%", minHeight:"100%" }}>

                <h3>Starlink-15 (v1.0)</h3>

                <ul>
                    <li><b>Rocket Name: </b><span>Falcon 9</span></li>
                    <li><b>launch Site: </b><span>Cape Canaveral Air Force Station Space Launch Complex 40</span></li>
                    <li><b>First Step: </b>
                        <ul>
                            <li><b>Flight 7: </b><span>reuse count 6, status unknown</span></li>
                            <li><b>Flight 8: </b><span>reuse count 0, status unknown</span></li>
                        </ul>
                    </li>
                    <li><b>Second Step Payloads: </b>
                        <ul>
                            <li><span>Satellite of 15400 kg</span></li>
                            <li><span>Crew Dragon</span></li>
                        </ul>
                    </li>
                    <li><b>Ships: </b>
                        <ul>
                            <li><b>Name: </b><span>"Of Course I Still Love You"  </span> 
                                <b> Port: </b><span>Port Canaveral</span>
                            </li>
                            <li><b>Name: </b><span>"Of Course I Still Love You"  </span> 
                                <b> Port: </b><span>Port Canaveral</span>
                            </li>
                            <li><b>Name: </b><span>"Of Course I Still Love You"  </span> 
                                <b> Port: </b><span>Port Canaveral</span>
                            </li>
                            
                        </ul>
                    </li>
                    
                    
                </ul>
            </Scrollbars>              
        </Panel>
    )
}

const Panel = styled(CardWrapper)`
    min-width: 700px;
    max-height: 40%;
    overflow: auto;
    line-height: 1.5;
    
    flex: 2 1 auto;
    order: 0;
    align-self: auto;
    -webkit-order: 0;
    -ms-flex-order: 0;
    -webkit-flex: 2 1 auto;
    -ms-flex: 2 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    
    & h3 {
        text-align: center;
    }
    & li {
        list-style: none;
    }
`