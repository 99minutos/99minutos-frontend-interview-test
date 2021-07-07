//#      --chain customSpec.json
import { Grid, Container } from 'semantic-ui-react';
import Content from '../components/Content'
import Info from '../components/Info'
import {useSelector} from 'react-redux';

const Layout = () => {
    const state = useSelector(state => state.addInfo)
    return (
        <Container>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Content data={state?.data}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Info/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Layout

