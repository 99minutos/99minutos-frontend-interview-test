import { Card, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import './index.scss';

const CardLoading = () => (
    <Card className="card">
        <Skeleton variant="rect" width="35%">
            <div style={{ paddingTop: '57%' }} />
        </Skeleton>
        <div className="card-details">
            <CardContent>
                <Typography component="div" variant="h5">
                    <Skeleton width={'50%'}/>
                </Typography>
                <Typography component="div" variant="caption">
                    <Skeleton/>
                </Typography>
                <Typography component="div" variant="caption">
                    <Skeleton />
                </Typography>
                <Typography component="div" variant="caption">
                    <Skeleton />
                </Typography>
                <p className="date"><Skeleton width={100}/></p>
            </CardContent>
        </div>
    </Card>
    );

export default CardLoading;