import React, { useContext } from 'react';
import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import CardLoading from '../Card/CardLoading';
import './index.scss'
import { SpaceContext } from '../../context/SpaceProvider';
import { CircularProgress } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';

const CardSpace = lazy(()=> import('../Card'));

const ListSpace = ({title, loading}) => {
    
    const { spaceData, setSelected } = useContext(SpaceContext);
    const history = useHistory();

    const handleClick = (id) => {
        setSelected(id);
        if(window.screen.width <= 768){
            history.push(`/launches/${id}`);
        }
    }

    return (
        <div className="list-container">
            <div className="text-center">
                <h1>{title}</h1>
            </div>
            <ul role="listitem">
            {
                spaceData.data.length > 0 && spaceData.data.map((data, index) =>{
                    return(
                            <Suspense fallback={<CardLoading/>} key={data.id}>
                                <CardSpace space={data} onClick={()=>handleClick(data.id)} />
                            </Suspense>
                    )
                })
            }
            </ul>
        </div>
    )
}

ListSpace.propTypes = {
    title: PropTypes.string.isRequired
}

export default ListSpace;