import { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Grid } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';
import Musk from '../../assets/elon-musk.jpg'
import { useStylesElon } from '../../style'

const Cont = () => {
    const classes = useStylesElon();
    return (
        <>
            <Grid>
                <Grid.Column width={4} className={classes.root}>
                    <Avatar alt="Elon Musk" src={Musk} className={classes.large} />
                </Grid.Column>
                <Grid.Column width={12} >
                    <div style={{ paddingTop: "0.4cm", paddingLeft:"0.3cm" }}>
                        Welcome to Spacex Launch, enjoy the content
                    </div>
                </Grid.Column>
            </Grid>
        </>
    )
}
export default function Elon() {
    const { addToast } = useToasts();
    useEffect(() => {
        addToast(<Cont />, { appearance: 'success' });
    }, [addToast]);
    return null
}