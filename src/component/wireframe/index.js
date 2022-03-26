import React, { useContext } from 'react';
import { SpaceContext } from '../../context/SpaceProvider';
import _ from 'lodash';
import { Button, Grid, IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';

import spaceLoading from "../../images/spaceEmpty.png";
import Carousel from '../Carousel';
import spaceEmpty from '../../images/spaceLoading.png';

const Wireframe = ({loading}) => {
    
    const { spaceData } = useContext(SpaceContext); 
    const { selected } = spaceData;
    
    return (
        <div>
            {
                _.isEmpty(spaceData.data) && <h1>Loading...</h1>
            }
            <Grid container justifyContent="center" alignItems="center">
                {
                    _.isEmpty(selected) ? (
                        <img src={spaceLoading} width="50%" className="image" alt="space"/>
                    )
                    :(
                        <>
                        <Grid item md={11}>
                            {
                                _.isEmpty(selected.ships) ? (
                                    <div>
                                        <img src={spaceEmpty} alt="default" width="30%"/>
                                    </div>
                                )
                                :(<Carousel sources={selected.ships}/>)
                            }
                            
                        </Grid>
                        <Grid item md={10}>
                            <h2>{selected.mission_name}</h2>
                            <p>{selected.details}</p>
                            {
                                selected.links.article_link && <a href={selected.links.article_link} target="_blank" rel="noopener noreferrer"><Button variant="contained" color="primary" startIcon={<DescriptionIcon/>}>See More</Button></a>
                            }
                            {
                                selected.links.video_link &&<a href={selected.links.video_link} target="_blank" rel="noopener noreferrer"><Button startIcon={<YouTubeIcon/>} variant="contained" color="secondary">Video</Button> </a>
                            }
                        </Grid>
                        </>
                    )
                }
            </Grid>
        </div>
    )
};

export default Wireframe;