import { Card, Container } from '@material-ui/core';
import React from 'react';
import './index.scss';

const MainLayout = ({ children }) => {

    return (<Container maxWidth="lg">
        <Card className="content">
            { children }
        </Card>
    </Container>);
};


export default MainLayout; 