import { Button, Container } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Carousel from '../../component/Carousel';
import { SpaceContext } from '../../context/SpaceProvider';
import MainLayout from '../../layout/MainLayout';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DescriptionIcon from '@material-ui/icons/Description';
import spaceEmpty from '../../images/spaceLoading.png';
import HomeIcon from '@material-ui/icons/Home';
import _ from 'lodash';

const Article = () => {
    const { id } = useParams();
    const history = useHistory();
    const [selected, setSelectedH] = useState([]);
    const { spaceData, setSelected } = useContext(SpaceContext);

    const returnHome = () => {
        history.push('/');
        setSelected([]);
    }

    useEffect(() => {
        if(_.isEmpty(spaceData)){
            history.push('/');
            return;
        }
        setSelectedH(_.find(spaceData.data, {id}));
        console.log('selected', selected, spaceData);
    }, [id, selected])
    
    return (
        <MainLayout>
            <div className="text-center" style={{marginBottom:'2rem'}}>
            {
               _.isEmpty(selected?.ships) ? <img src={spaceEmpty} alt="default" width="80%"/>: (<Carousel sources={selected?.ships}/>)
            }
            <h2>{selected?.mission_name ? selected?.mission_name : 'No Data Avaliable'}</h2>
            <p>{selected?.details}</p>
            {
                selected?.links?.article_link && <a href={selected?.links?.article_link} target="_blank" rel="noopener noreferrer"><Button variant="contained" color="primary" startIcon={<DescriptionIcon/>}>See More</Button></a>
            }
            {
                selected?.links?.video_link &&<a href={selected?.links?.video_link} target="_blank" rel="noopener noreferrer"><Button startIcon={<YouTubeIcon/>} variant="contained" color="secondary">Video</Button> </a>
            }
                <Button variant="contained" color="primary" onClick={returnHome} startIcon={<HomeIcon/>}>Home</Button>
            </div>
        </MainLayout>
    );
}

export default Article;