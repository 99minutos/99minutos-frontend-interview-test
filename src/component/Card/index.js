import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';
import spacecraft from '../../images/spacecraft.png';
import _ from 'lodash';
import './index.scss';
import moment from 'moment';
import { SpaceContext } from '../../context/SpaceProvider';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginLeft: theme.spacing(2),
    },
  }));

const CardSpace = ({ space = {}, onClick }) =>{
    const classes = useStyles();
    const { spaceData } = useContext(SpaceContext);
    const { selected } = spaceData;
    return (
        <Card className={`card ${selected?.id === space?.id ? 'active': ''}`} onClick={onClick}>
            <CardMedia className="img-container">
                <Avatar src={!_.isEmpty(space?.links?.flickr_images) ? space?.links?.flickr_images[0] : spacecraft} alt={space?.mission_name ? space?.mission_name : 'default image'} className={classes.large}/>
            </CardMedia>
            <div className="card-details">
                <CardContent>
                    {
                        !_.isEmpty(space) ? (
                            <>
                                <h5 className="title">{space?.mission_name}</h5>
                                <p className="description">{space?.details ? space?.details : 'No Data Available'}</p>
                                <p className="date">{space?.launch_date_local ? moment(space?.launch_date_local).format('DD/MM/YYYY') : 'No Data Available'}</p>
                            </>
                        ): (
                            <h3 className="text-center">No Data Available</h3>
                        )
                    }
                </CardContent>
            </div>
        </Card>
    );
}

CardSpace.propTypes = {
    space: PropTypes.object.isRequired
}

export default CardSpace;